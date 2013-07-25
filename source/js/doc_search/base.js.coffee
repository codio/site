class DocSearch

  minimum_length: 3

  results: $('#search-content')

  form: $('.docs aside form')

  urlRegExp: new RegExp(/^.*\/\/[^\/]+/)

  constructor: ->
    do @init_events


  init_events: ->
    @form.on 'submit', =>
      input = @form.find('input')
      input.data 'val' , input.val()
      @perform_search input.val()
      false

    @results.on 'click', 'a', ->
      expandTreeWithPath $(this).attr('href')

    @form.find('input').keydown (e) =>
      input = @form.find('input')
      key = e.keyCode
      listItems = @results.find 'li'
      selected = listItems.filter '.selected'

      return if !@results.is(':visible')

      if key is 13 and selected.length
        return if input.val() != input.data 'val'
        e.preventDefault()
        window.location.href = selected.find('a').attr('href')

      return if key isnt 40 and key isnt 38

      e.preventDefault()
      current = undefined
      listItems.removeClass 'selected'

      if key is 40 # Down key
        if not selected.length or selected.is(':last-child')
          current = listItems.eq(0)
        else
          current = selected.next()
      else if key is 38 # Up key
        if not selected.length or selected.is(':first-child')
          current = listItems.last()
        else
          current = selected.prev()

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
              url = page.url.replace(@urlRegExp, '')
              @results.append("<li><a href='#{url}'>#{title}</a></li>")

    else
      @results.html "<li><span>Should be #{@minimum_length} characters or more.</span></li>"


    # A one time event to allow us to close the results overlay.
    $(':not(#search-content)').one 'click', =>
      do @results.fadeOut

    # Show the results
    do @results.fadeIn


$ ->
  new DocSearch