# coding: utf-8
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
           :small => 200,
           :medium => 400,
           :large => 600,
           :extraLarge => 800
         },
         :namespace_directory => %w(artwork),
         :filetypes => [:jpg, :jpeg, :png]

activate :asset_host
set :asset_host, "http://localhost:4567"


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

# Methods defined in the helpers block are available in templates
helpers do
  def nav_pages(url)
    sitemap.resources.select do |r|
      r.url === url.split("/")[0..2].join("/") + "/"
    end
  end
  # Returns all pages under a certain directory.
  def sub_pages(dir)
    sitemap.resources.find_resource_by_path(dir)
  end

  def current_page?(path)
    current_path = current_page.url
    current_path.slice! -1 if current_page.url.end_with?('/')
    path.slice! -1 if path.end_with?('/')
    current_path == path
  end

  def current_section?(path)
    current_path = current_page.url
    current_path.slice! -1 if current_page.url.end_with?('/')
    path.slice! -1 if path.end_with?('/')
    current_path.start_with? path
  end
# insert active link menu-item <A>, or <SPAN> if it’s current page URL

  def link_to_nav(name, url)
    path = request.path
    current = false

    # path            - url
    # docs/index.html - /docs/index.html
    # docs/index.html - /docs
    # docs/quickstart/dashboard - /docs

    # Strip leading / from the url
    url = url[1..-1]


    if url == path
      # Exact match
      current = true
    elsif path.start_with? url
      # starts with match
      current = true
    end

    if current
      link_to name, url, :class => "active"
    else
      link_to name, url
    end
  end
end

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'
set :images_dir, 'img'
set :partials_dir, 'partials'
set :fonts_dir, 'fonts'




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

  set :asset_host, "http://blooming-peak.herokuapp.com"
end
