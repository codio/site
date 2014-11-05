# Slide Menu

openMenuHandler = (menuToggle, menu, event) ->
  event.preventDefault()

  toggleMenu(menuToggle, menu)

closeMenuHandler = (menuToggle, menu, event) ->
  elem = $.closest getTarget(event), '.slide-menu'

  toggleMenu(menuToggle, menu) unless elem


toggleMenu = (menuToggle, menu) ->
  menuToggle.toggleClass 'active'
  menu.toggleClass 'open'

  closeHandler = closeMenuHandler.bind null, menuToggle, menu
  if menu.hasClass 'open'
    delay ->
      body.addEventListener 'tap', closeHandler, false
      body.on 'click', closeHandler
  else
    body.removeEventListener 'tap', closeHandler, false
    body.off 'click', closeHandler


# Attach handlers
$ ->

  menu = $ '.slide-menu'
  menuToggle = $ '#menu-toggle'
  body = $ 'document'

  menuToggleTap = new Tap('menu-toggle')
  bodyTap = new Tap(document.documentElement)

  menuToggle.on 'click', openMenuHandler.bind(menuToggle, menu)
