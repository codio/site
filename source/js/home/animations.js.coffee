# Home page animations
# --------------------

$ ->

    # Fade in the tagline
    $('#tagline img, #tagline div').transition
        opacity: 1
        duration: 1000
        delay: 800

    $('#screen').transition
        opacity: 1
        duration: 5000
        delay: 600