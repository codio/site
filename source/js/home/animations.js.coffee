# Home page animations
# --------------------

$ ->

    # Roll the reel into play on page load.
    $('#reel').transition
        x: -1980
        rotate: '-360deg'
        delay: 500
        duration: 1500
        easing: 'ease'

    # Fade in the tagline
    $('#tagline img').transition
        opacity: 1
        duration: 3000
        delay: 800

    # Fade in the call to action ("spin the wheel")
    $('#tagline div').transition
        opacity: 1
        duration: 1000
        delay: 1800


    $('#reel').on 'click', ->
        $(@).transition
            rotate: '+=360deg'
            duration: 1500
            easing: 'ease'