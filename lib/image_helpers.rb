# Middleman - Inline SVG Helper
# ------------------------------------------------------------------------------
# 1. Save this file at `[project_root]/helpers/image_helpers.rb`
# 2. Restart your local Middleman server if it's running
# 3. Embed SVG files into your template files like so:
#
#      <%= inline_svg("name/of/file.svg") %>
#
#    The helper also allows for CSS classes to be added:
#
#      <%= inline_svg("name/of/file.svg", class: "my-addl-class") %>
#
module ImageHelpers

  # Embed SVG images inline within a Middleman template.
  # ---
  # Adapted from the work of James Martin and Steven Harley.
  # Reference: https://robots.thoughtbot.com/organized-workflow-for-svg
  def inline_svg(filename, options = {})
    asset = sprockets.find_asset(filename)

    # If the file wasn't found, embed error SVG
    if asset.nil?
      %(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 30"
          width="400px" height="30px"
        >
          <text font-size="16" x="8" y="20" fill="#cc0000">
            Error: '#{filename}' could not be found.
          </text>
          <rect
            x="1" y="1" width="398" height="28" fill="none"
            stroke-width="1" stroke="#cc0000"
          />
        </svg>
      )

    # If the file was found, parse it, add optional classes, and then embed it
    else
      file = asset.source.force_encoding("UTF-8")
      doc = Nokogiri::HTML::DocumentFragment.parse file
      svg = doc.at_css "svg"

      if options[:class].present?
        svg["class"] = options[:class]
      end

      doc
    end
  end
end
