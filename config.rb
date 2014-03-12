# Relative Assets extension
module RelativeAsset

  # Setup extension
  class << self

    # Once registered
    def registered(app)
      # Tell compass to use relative assets
      app.compass_config do |config|
        config.relative_assets = true
      end

      # Include instance methods
      app.send :include, InstanceMethods
    end

    alias :included :registered
  end

  # Relative Assets instance method
  module InstanceMethods

    # asset_url override for relative assets
    # @param [String] path
    # @param [String] prefix
    # @return [String]
    def asset_url(path, prefix="")
      path = super(path, prefix)

      if path.include?("//") || path.start_with?("/#") || !current_resource
        path
      else
        "/s#{path.to_s}"
      end
    end
  end
end
::Middleman::Extensions.register(:relative_asset, RelativeAsset)


helpers do
  # Overrides the built-in #link_to helper to allow us to prepend /s to links.
  def link_to(*args, &block)
    return super unless build?

    url_arg_index = block_given? ? 0 : 1

    if url = args[url_arg_index]
      # Handle Resources, which define their own url method
      if url.respond_to? :url
        url = args[url_arg_index] = url.url
      end

      # Ignore external links, root, and anchors (hashes).
      if !url.include?('://') && url != '/' && !url.start_with?('#') && !url.start_with?('/#') && !url.start_with?('mailto:')
        url = args[url_arg_index] = "/s" + url
      end
    end

    super
  end

  # def image_tag(path, params={})
  #   p path
  #   if path.start_with?('blog')

  #   end
  #   super
  # end

  # def asset_path(kind, source)
  #   build? ? "/s/#{super}" : super
  # end

  def link_to_author(name)
    first, last = name.split(' ')
    mail_to "#{first[0]}#{last}@codio.com".downcase, name
  end
end


###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
page "/blog/feed.xml", :layout => false
page "/docs/*", :layout => :docs


###
# Helpers
###

set :css_dir, 'css'
set :js_dir, 'js'
set :images_dir, 'img'
set :fonts_dir, 'fonts'

set :markdown, :no_intra_emphasis => true,
               :tables => true,
               :gh_blockcode => true,
               :fenced_code_blocks => true,
               :autolink => true,
               :strikethrough => true,
               :lax_html_blocks => true,
               :superscript => true,
               :with_toc_data => true,
               :hard_wrap => true

set :markdown_engine, :redcarpet

activate :blog do |blog|
  blog.layout             = "blog"
  blog.prefix             = "blog"
  blog.permalink          = ":year/:month/:title.html"
  blog.sources            = "articles/:year/:month/:title.html"
  blog.paginate           = true
  blog.year_template      = "blog/year.html"
  blog.month_template     = "blog/month.html"
  blog.tag_template       = "blog/tag.html"
end

activate :directory_indexes
#activate :livereload

# Landing pages
[ "github-ide", "cp-fiddle", "salesforce", "parse" ].each do |name|
  proxy "/lp/#{name}.html", "/index.html", :locals => { :lp => name }
end


# Build-specific configuration
configure :build do

  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # until image_magick fixed:
  activate :favicon_maker do |f|
    f.icons = {
      "favicon_template.png" => [
        { icon: "apple-touch-icon-152x152-precomposed.png" },
        { icon: "apple-touch-icon-144x144-precomposed.png" },
        { icon: "apple-touch-icon-120x120-precomposed.png" },
        { icon: "apple-touch-icon-114x114-precomposed.png" },
        { icon: "apple-touch-icon-76x76-precomposed.png" },
        { icon: "apple-touch-icon-72x72-precomposed.png" },
        { icon: "apple-touch-icon-60x60-precomposed.png" },
        { icon: "apple-touch-icon-57x57-precomposed.png" },
        { icon: "apple-touch-icon-precomposed.png", size: "57x57" },
        { icon: "apple-touch-icon.png", size: "57x57" },
        { icon: "favicon-196x196.png" },
        { icon: "favicon-160x160.png" },
        { icon: "favicon-96x96.png" },
        { icon: "favicon-32x32.png" },
        { icon: "favicon-16x16.png" },
        { icon: "favicon.png", size: "16x16" },
        { icon: "favicon.ico", size: "64x64,32x32,24x24,16x16" },
        { icon: "mstile-144x144", format: "png" }
      ]
    }
  end

  activate :gzip
  activate :asset_hash, ignore: /font/
  activate :cache_buster

  # Use relative URLs
  activate :relative_asset

  # Compress PNGs after build
  # First: gem install middleman-smusher
  # require "middleman-smusher"
  # activate :smusher

  # Or use a different image path
  # set :http_path, "/Content/images/"
end

