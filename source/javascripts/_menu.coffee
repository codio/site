#= require classie
#= require tap.js/tap


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

# Reimplement .closest selector from jquery
#
# el     - DOM element
# matcher - Function,
#
# Returns a DOM object or undefined.
closest = (el, matcher) ->
  while (el)
    return el if matcher(el)
    el = el.parentNode


# _.delay
#
delay = (fn) ->
  setTimeout(fn, 0)

menu = document.querySelector '.slide-menu'
menuToggle = document.getElementById 'menu-toggle'
body = document.documentElement

menuToggleTap = new Tap(menuToggle)
bodyTap = new Tap(body)


openMenuHandler = (event) ->
  event.preventDefault()

  toggleMenu()

closeMenuHandler = (event) ->
  elem = closest getTarget(event), (el) -> el.className?.match 'slide-menu'

  toggleMenu() unless elem



toggleMenu = ->
  classie.toggle menuToggle, 'active'
  classie.toggle menu, 'open'

  if classie.has menu, 'open'
    delay ->
      body.addEventListener 'tap', closeMenuHandler, false
      document.documentElement.onclick = closeMenuHandler
  else
    document.documentElement.onclick = null
    body.removeEventListener 'tap', closeMenuHandler, false


#menuToggle.addEventListener 'tap', openMenuHandler
menuToggle.onclick = openMenuHandler
