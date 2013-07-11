class DocSearch

  minimum_length: 3

  results: $('#search-content')


  constructor: ->
    do @init_events


  init_events: ->
    $('.docs aside form').on 'submit', =>
      @perform_search $('.docs aside form input').val()
      false

    @results.on 'click', 'a', ->
      expandTreeWithPath $(this).attr('href')


  perform_search: (term) ->
    term = $.trim(term.toLowerCase())

    if term.length >= @minimum_length
      @results.html "<li><span>Loading...</span></li>"

      $.ajax({
        url: 'https://api.swiftype.com/api/v1/public/engines/suggest.json',
        data: {
          q: term,
          engine_key: '9ss2uGXz9XP6kyd6y6CN'
        },
        dataType: 'jsonp'
      })
      .done (data) =>
          if data.record_count < 1
            @results.html "<li><span>No results found. Please refine your search.</span></li>"
          else
            @results.html('')

            # Build and show the results
            for page in data.records.page
              title =  if page.highlight.title then page.highlight.title else "#{page.title}<small>#{page.highlight.sections}</small>"
              url = page.url.replace(window.location.origin, '')
              @results.append("<li><a href='#{page.url}'>#{title}</a></li>")

    else
      @results.html "<li><span>Should be #{@minimum_length} characters or more.</span></li>"


    # A one time event to allow us to close the results overlay.
    $(':not(#search-content)').one 'click', =>
      do @results.fadeOut

    # Show the results
    do @results.fadeIn


$ ->
  new DocSearch