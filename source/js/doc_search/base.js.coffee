class DocSearch

  minimum_length: 3

  stop_words: [ "and", "be", "by", "do", "for", "he", "how", "if", "is", "it", "my",
                 "not", "of", "or", "the", "to", "up", "what", "when" ]

  stems: [
    { word: "e-mail",     stem: "email" }
    { word: "javascript", stem: "script" }
    { word: "javascript", stem: "js" }
  ]

  results: $('#search-content')


  constructor: ->
    $.ajax
      url: '/js/doc_search/doc_search.json'
      dataType: 'json'
      async: false
      success: (json) =>
        @pages = json.pages

    do @init_events


  init_events: ->
    $('.docs aside form').on 'submit', =>
      @perform_search $('.docs aside form input').val()
      false

    $('#search-content').on 'click', 'a', ->
      expandTreeWithPath $(this).attr('href')


  perform_search: (term) ->
    term = $.trim(term.toLowerCase())

    if term.length >= @minimum_length
      terms = @stemming(term)

      count = 0
      found = []
      for page in @pages
        score = 10000000

        # Loop through the pages and score each.
        for term in terms
          pat = new RegExp(term, 'i')

          score -= (2000 - count) if page.t.search(pat) != -1

          for crumb in page.b
            score -= (1000 - count) if crumb.search(pat) != -1

          # Highlight terms
          patr = new RegExp('(' + term + ')', 'gi')
          text = page.t.replace(patr, "<em>$1</em>");
          crumbs = page.b.join('**').replace(patr, "<em>$1</em>");

        if (score < 10000000)
          found[count++] = score + '^' + crumbs + '^' + text + '^' + page.u

      if count < 1
        @results.html "<li><span>No results found. Please refine your search.</span></li>"
      else
        @results.html('')
        found.sort()

        # Build and show the results
        for item in found
          item = item.split('^')
          breadcrumbs = item[1].replace(/\*\*/g, ' > ')
          @results.append("<li><a href='#{item[3]}'>#{item[2]}<small>#{breadcrumbs}</small></a></li>")

    else
      @results.html "<li><span>Should be #{@minimum_length} characters or more.</span></li>"


    # A one time event to allow us to close the results overlay.
    $(':not(#search-content)').one 'click', =>
      do @results.fadeOut

    # Show the results
    do @results.fadeIn


  # Word stemming
  stemming: (term) ->
    terms = term.split(' ')

    for i in [0...terms.length]
      for item in @stems
        term = term + ' ' + item.stem if terms[i] == item.word

    term.split ' '


$ ->
  new DocSearch