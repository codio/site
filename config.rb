# coding: utf-8

require "lib/helpers"
require "lib/image_helpers"
helpers MyHelpers
helpers ImageHelpers

require "susy"

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

activate :sitemap,
         :gzip => false,
         :hostname =>  "https://codio.com"

activate :syntax, line_numbers: true

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

set :cookie_consent, ENV["M_COOKIE_CONSENT"] || 'https://d32pm7l1p0vsmf.cloudfront.net/cookieconsent2.4aadfbb2.js'

activate :directory_indexes

ignore '*.ordered'

# Need the extension for error pages
page "404.html", :directory_index => false
page "50x.html", :directory_index => false

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

activate :bower
activate :es6

activate :autoprefixer do |config|
  config.browsers = ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
end


# Reload the browser automatically whenever files change
configure :development do
  # activate :livereload, no_swf: true
  set :file_watcher_ignore, [
      %r{\.tern-port},
      %r{flycheck_},
      %r{node_modules/},
      %r{vendor/},
      %r{\.idea/},
      %r{\.#}
    ]
end


set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'
set :images_dir, 'img'
set :partials_dir, 'partials'

set :intercom_id, ENV["M_INTERCOM_ID"] || "hzz6oifn"
set :codio_environment, ENV["M_CODIO_ENVIRONMENT"] || "development"

set :asset_host, ENV["M_ASSET_HOST"] || "http://localhost:4567"

set :tiny_host, ENV["M_TINY_HOST"] || "http://localhost:6789"

# Build-specific configuration
configure :build do
  # Minification and Compression
  activate :minify_css
  activate :minify_javascript do |js|
    require 'uglifier'
    js.compressor = Uglifier.new(:output => {:comments => :none}, :screw_ie8 => true)
  end
  activate :minify_html do |html|
    html.remove_http_protocol = false
    html.remove_https_protocol = true
    html.remove_input_attributes = false  
  end

  activate :gzip do |gzip|
    gzip.exts = %w(.js .css .html .htm .svg)
  end
  activate :cache_buster

  # Enable cache buster
  activate :asset_hash

  set :asset_host, ENV["M_ASSET_HOST"] || "https://codio.com"
end

activate :sprockets

def createUrlNode(loc, priority, doc)
  url = Nokogiri::XML::Node.new("url", doc)

  urlpriority = Nokogiri::XML::Node.new("priority", doc)
  urlpriority.content = priority
  url << urlpriority

  urlloc = Nokogiri::XML::Node.new("loc", doc)
  urlloc.content = loc
  url << urlloc

  url
end

after_build do
  sitemapfile = File.join(build_dir, "sitemap.xml")

  # Read or initialize the data
  if File.exist?(sitemapfile)
    data = File.read(sitemapfile)
  end

  doc = Nokogiri::XML.parse data

  urlset = doc.at_css('urlset')
  urlset << createUrlNode("https://news.codio.com/", 0.9, doc)
  urlset << createUrlNode("https://codio.com/start-edu-trial", 0.9, doc)

  outfile = File.join(build_dir, "sitemap.xml")
  File.open(outfile, 'w') {|f| f.write(doc) }
end