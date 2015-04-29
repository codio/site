# Mobile Blog Menu
#

$ ->

  menu = $ '#blog-menu'
  toggle = $ '#blog-menu-toggle'

  toggle.on 'click', (event) ->
    event.preventDefault()
    menu.toggleClass 'open'
    console.log "AAA"
