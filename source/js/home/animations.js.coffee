# Home page animations
# --------------------

$ ->

    # Roll the reel into play on page load.
    # $('#reel').transition
    #     marginLeft: "-=1280"
    #     rotate: '-360deg'
    #     delay: 500
    #     duration: 1500
    #     easing: 'ease'

    # $('#screen').transition
    #     marginLeft: "-=#{marginLeft-60}"
    #     delay: 800
    #     duration: 1500
    #     easing: 'ease'

    $('#screen, #reel').addClass 'move'

    # Fade in the tagline
    $('#tagline img, #tagline div').transition
        opacity: 1
        duration: 2000
        delay: 800


    $('#reel').on 'click', ->
        $(@).transition
            rotate: '+=360deg'
            duration: 1500
            easing: 'ease'