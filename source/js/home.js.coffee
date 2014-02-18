# Home page animations
# --------------------

$ ->

    # Fade in the tagline
    $('#tagline h1, #tagline div').transition
        opacity: 1
        duration: 1000
        delay: 800

    $('#screen').transition
        opacity: 1
        duration: 5000
        delay: 600

    $('#screen a').transition
        opacity: 1
        duration: 1000
        delay: 2500


    # Language selector
    $('#languages li a').on 'click', ->
        ele = $(@)
        iframe = $('#languages iframe')
        src = iframe.attr('src').replace /[0-9]+/, (ele.attr('href').replace('#', '') || '123')
        iframe.attr 'src', src

        ele.parents('ul').find('li').removeClass 'active'
        ele.parent().addClass 'active'

        false