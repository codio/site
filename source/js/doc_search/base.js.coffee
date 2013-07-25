class DocSearch

  minimum_length: 3

  results: $('#search-content')

  form: $('.docs aside form')

  constructor: ->
    do @init_events


  init_events: ->
    @form.on 'submit', =>
      @perform_search @form.find('input').val()
      false

    @results.on 'click', 'a', ->
      expandTreeWithPath $(this).attr('href')

    @form.find('input').keydown (e) =>
      key = e.keyCode
      listItems = @results.find 'li'
      return if !@results.is ':visible'
      return if key isnt 40 and key isnt 38 and key isnt 13

      e.preventDefault()
      selected = listItems.filter '.selected'
      current = undefined
      listItems.removeClass 'selected'

      if key is 13 and selected.length
        expandTreeWithPath(selected.find('a').attr('href'))
      else if key is 40 # Down key
        if not selected.length or selected.is(':last-child')
          current = listItems.eq(0)
        else
          current = selected.next()
      else if key is 38 # Up key
        if not selected.length or selected.is(':first-child')
          current = listItems.last()
        else
          current = selected.prev()

      if key is 40 or key is 38
        current.addClass 'selected'


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