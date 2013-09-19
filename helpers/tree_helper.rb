# Needed, otherwise build fails complaining about it being undefined.
Middleman::CoreExtensions::DefaultHelpers::NEWLINE = "\n".html_safe.freeze

module TreeHelper

  def tree_for(dir)
    output = ""

    # Load the order of the directory listing from the dir.ordered file if it exists.
    if File.exists?(order_file = "#{dir}/dir.ordered")
      file = File.read(order_file)
      file.split("\n").each do |item|
        output << build_tree("#{dir}/#{item}")
      end

    # else we scan the directory contents
    else
      Dir.new(dir).each do |x|
        next if x == '.' || x == '..' || x == 'dir.ordered' || x.start_with?('index.') || x.start_with?('.')
        output << build_tree("#{dir}/#{x}")
      end
    end

    content_tag :ol, output
  end


  private

    def build_tree(file)
      if Dir.exists?(file)
        build_directory file
      else
        if resource = resource_for("#{file}.html.markdown")
          link = link_to(resource.data.title, resource.url, :class => current_page?(resource.url) ? 'active' : '')
          content_tag :li, link, :class => "nofade"
        else
          ""
        end
      end
    end

    def build_directory(file)
      resource = resource_for("#{file}/index.html.markdown")
      content = (content_tag :span, "expand") + link_to(resource.data.title, resource.url)
      content_tag :li, content_tag(:div, content, :class => "nofade") + tree_for(file)
    end

    def resource_for(file)
      path = sitemap.file_to_path(file)
      resource = sitemap.find_resource_by_path(path)
    end

    def current_page?(path)
      current_path = current_page.url
      current_path.slice! -1 if current_page.url.end_with?('/')
      current_path == path
    end

end