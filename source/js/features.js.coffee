# Features page
# --------------------

$ ->

    # Language selector
    $('.feature-list ul li a').on 'click', ->
        ele = $(@)
        iframe = $('#feature-video iframe')
        src = iframe.attr('src').replace /[0-9]+/, (ele.attr('href').replace('#', '') || '123')
        iframe.attr 'src', src

        $('.feature-list li a').removeClass 'active'
        ele.addClass 'active'

        false