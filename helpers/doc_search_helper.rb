module DocSearchHelper

  def doc_search_data
    # Disabled in favour of using swiftype
    return

    path, rules = 'source/docs', []
    Dir.new(path).each do |x|
      next if x == '.' || x == '..' || x == 'dir.ordered' || x.start_with?('index.') || x.start_with?('.')

      rules << build_rule("#{path}/#{x}")
    end

    rules.join "},{"
  end


  private

    def build_rule(file)
      rules = []

      if Dir.exists?(file)
        resource = resource_for("#{file}/index.html.markdown")

        Dir.new(file).each do |x|
          next if x == '.' || x == '..' || x == 'dir.ordered' || x.start_with?('index.') || x.start_with?('.')

          rules << build_rule("#{file}/#{x}")
        end
      else
        resource = resource_for(file)
      end

      breadcrumbs = BreadcrumbsHelper.breadcrumbs(resource)
      breadcrumbs.map! { |b| b[:title] }

      url = build? ? "/s#{resource.url}" : resource.url
      rules << '"t":"' + resource.data.title + '","u":"' + url + '","b":["' + breadcrumbs.join('","') + '"]'
    end

    def resource_for(file)
      path = sitemap.file_to_path(file)
      resource = sitemap.find_resource_by_path(path)
    end

end