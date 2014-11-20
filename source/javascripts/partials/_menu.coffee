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
  root = document.documentElement

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
        $(document).on 'click', closeMenuHandler
        $(document).on 'tap', closeMenuHandler
    else
      $(document).off 'click', closeMenuHandler
      $(document).on 'tap', closeMenuHandler

  menuToggle.on 'click', openMenuHandler
