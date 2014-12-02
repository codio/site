# coding: utf-8

require "lib/helpers"
helpers MyHelpers

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
with_layout :docs do
  page "/docs/*"
end

with_layout :legal do
  page "/legal/*"
end

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

set :markdown, :no_intra_emphasis  => true,
               :tables             => true,
               :gh_blockcode       => true,
               :fenced_code_blocks => true,
               :autolink           => true,
               :strikethrough      => true,
               :lax_html_blocks    => true,
               :superscript        => true,
               :with_toc_data      => true,
               :hard_wrap          => true,
               :smartypants        => true

set :markdown_engine, :redcarpet

activate :syntax

activate :automatic_clowncar,
         :sizes => {
           :small => 400,
           :medium => 600,
           :large => 800,
           :extraLarge => 1000
         },
         :namespace_directory => %w(artwork),
         :filetypes => [:jpg, :jpeg, :png]

activate :asset_host
set :asset_host, ENV["M_ASSET_HOST"] || "http://localhost:4567"


activate :blog do |blog|
  blog.layout            = "blog"
  blog.prefix            = "blog"
  blog.permalink         = ":year/:month/:title.html"
  blog.sources           = "articles/:year/:month/:title.html"
  blog.paginate          = true
  blog.tag_template      = "blog/tag.html"
  blog.calendar_template = "blog/calendar.html"
end

activate :directory_indexes

ignore '*.ordered'

# Need the extension for error pages
page "404.html", :directory_index => false
page "50x.html", :directory_index => false

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

activate :bower

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end


set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'
set :images_dir, 'img'
set :partials_dir, 'partials'



# Build-specific configuration
configure :build do

  # Minification and Compression
  activate :minify_css
  activate :minify_javascript
  activate :minify_html

  # Disable in development
  #activate :imageoptim

  activate :gzip
  activate :cache_buster

  # Enable cache buster
  activate :asset_hash

  set :asset_host, ENV["M_ASSET_HOST"] || "https://codio.com"
end
