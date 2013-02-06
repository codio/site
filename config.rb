helpers do
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
  # activate :relative_assets

  # Compress PNGs after build
  # First: gem install middleman-smusher
  # require "middleman-smusher"
  # activate :smusher

  # Or use a different image path
  # set :http_path, "/Content/images/"
end