# Extension namespace
module Middleman
  module Extensions

    # Relative Assets extension
    module RelativeAssets

      # Relative Assets instance method
      module InstanceMethods

        # asset_url override for relative assets
        # @param [String] path
        # @param [String] prefix
        # @return [String]
        def asset_url(path, prefix="")
          path = super(path, prefix)

          if path.include?("//")
            path
          else
            if current_resource.path == 'index.html'
              path = "/s" + path
            end

            current_dir = Pathname('/' + current_resource.destination_path)
            Pathname(path).relative_path_from(current_dir.dirname)
          end
        end
      end
    end
  end
end




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
      if !url.include?('://') && url != '/' && !url.start_with?('#')
        url = args[url_arg_index] = "/s" + url
      end
    end

    super
  end

  # def asset_path(kind, source)
  #   build? ? "/s/#{super}" : super
  # end

  def link_to_author(name)
    first, last = name.split(' ')
    mail_to "#{first[0]}#{last}@applicationcraft.com".downcase, name
  end
end


###
# Compass
###

# Susy grids in Compass
# First: gem install susy --pre
# require 'susy'

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

page "/blog/feed.xml", :layout => false

# Proxy (fake) files
# page "/this-page-has-no-template.html", :proxy => "/template-file.html" do
#   @which_fake_page = "Rendering a fake page with a variable"
# end

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

set :css_dir, 'css'
set :js_dir, 'js'
set :images_dir, 'img'
set :fonts_dir, 'fonts'

set :markdown_engine, :redcarpet
set :markdown, :autolink => true,
               :with_toc_data => true,
               :hard_wrap => true

activate :blog do |blog|
  blog.layout             = "blog"
  blog.prefix             = "blog"
  blog.permalink          = ":year/:month/:title.html"
  blog.sources            = "articles/:year/:month/:title.html"
  blog.paginate           = true
  blog.year_template      = "blog/year.html"
  blog.month_template     = "blog/month.html"
end

activate :directory_indexes


# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  activate :gzip
  activate :asset_hash
  activate :cache_buster

  # activate :favicon_maker

  # Use relative URLs
  activate :relative_assets

  # Compress PNGs after build
  # First: gem install middleman-smusher
  # require "middleman-smusher"
  # activate :smusher

  # Or use a different image path
  # set :http_path, "/Content/images/"
end