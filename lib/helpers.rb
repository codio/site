# coding: utf-8
module MyHelpers

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

  # Add active class if needed
  def link_to_nav(name, url)
    path = request.path
    current = false

    # path            - url
    # docs/index.html - /docs/index.html
    # docs/index.html - /docs
    # docs/quickstart/dashboard - /docs

    # Strip leading / from the url
    testUrl = url[1..-1]


    if testUrl == path
      # Exact match
      current = true
    elsif path.start_with? testUrl
      # starts with match
      current = true
    end

    if current
      link_to name, url, :class => "active"
    else
      link_to name, url
    end
  end

  # Order the children of a given resource according
  # to dir.ordered and if not alphabetically
  def ordered(resource)

    children = resource.children || []
    dir = resource.path

    orderedChildren = []

    if File.exists?(order_file = "#{dir}/dir.ordered")
      file = File.read(order_file)

      file.split("\n").map do |item|
        resource.children.select do |child|
          child.path == "#{dir}/#{item}"
        end
      end

    else
      # If it doesn't exists sort by the title
      children.sort_by { |c| c.data.title.downcase }
    end

  end
end
