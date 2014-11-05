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
