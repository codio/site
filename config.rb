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
        if path.include?('img/blog')
          return "/s" + path.to_s
        elsif current_resource.path == 'index.html'
          path = "/s" + path.to_s
        end

        current_dir = Pathname('/' + current_resource.destination_path)
        Pathname(path).relative_path_from(current_dir.dirname).to_s
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

set(
  :markdown,
  :no_intra_emphasis   => true,
  :tables              => true,
  :gh_blockcode        => true,
  :fenced_code_blocks  => true,
  :autolink            => true,
  :strikethrough       => true,
  :lax_html_blocks     => true,
  :space_after_headers => true,
  :superscript         => true,
  :with_toc_data       => true,
  :hard_wrap           => true
)
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


# Landing pages
[ "github-ide", "cp-fiddle", "salesforce" ].each do |name|
  proxy "/lp/#{name}.html", "/index.html", :locals => { :lp => name }
end


# Build-specific configuration
configure :build do

  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  activate :gzip
  activate :asset_hash
  activate :cache_buster

  activate :favicon_maker

  # Use relative URLs
  activate :relative_asset

  # Compress PNGs after build
  # First: gem install middleman-smusher
  # require "middleman-smusher"
  # activate :smusher

  # Or use a different image path
  # set :http_path, "/Content/images/"
end

