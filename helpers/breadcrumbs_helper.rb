module BreadcrumbsHelper

  module_function

    def breadcrumbs(page = nil)
      excluded = ['/', '/docs/']
      page, crumbs = (page || current_page), []

      while page = page.parent
        next if excluded.include? page.url

        crumbs << {
          :url => page.url,
          :title => page.data.title
        }
      end

      crumbs.reverse
    end

end