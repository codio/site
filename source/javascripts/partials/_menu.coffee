# Slide Menu

# Helper Methods

# Get the target of the given event
# Taken from http://www.quirksmode.org/js/events_properties.html#target
#
# event - Event Object
#
# Returns a DOM element.
getTarget = (event = window.event) ->
  # Fix IE
  target = if event.target then event.target else event.srcElement

  # Fix Safari
  target = target.parentNode if target.nodeType is 3

  target

# _.delay
#
delay = (fn) ->
  setTimeout(fn, 0)


# Attach handlers
$ ->

  menu = $ '.slide-menu'
  menuToggle = $ '#menu-toggle'
  body = $ 'document'
  root = document.documentElement

  menuToggleTap = new Tap('menu-toggle')
  bodyTap = new Tap(root)

  openMenuHandler = (event) ->
    event.preventDefault()

    toggleMenu()

  closeMenuHandler = (event) ->
    event.preventDefault()

    elem = $(getTarget event).closest '.slide-menu'

    toggleMenu() if elem.length is 0


  toggleMenu = () ->
    menuToggle.toggleClass 'active'
    menu.toggleClass 'open'


    if menu.hasClass 'open'
      delay ->
        root.addEventListener 'tap', closeMenuHandler, false
        #body.on 'click', closeHandler
    else
      root.removeEventListener 'tap', closeMenuHandler, false
      #body.off 'click', closeHandler


  menuToggle.on 'click', openMenuHandler
