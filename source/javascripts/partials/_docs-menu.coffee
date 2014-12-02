# Mobile Menu for the Docs
#

$ ->

  menu = $ '#docs-menu'
  toggle = $ '#docs-menu-button'

  toggleMenu = ->
    menu.toggleClass 'open'

  openMenuHandler = (event) ->
    event.preventDefault()

    toggleMenu()

  toggle.on 'click', openMenuHandler
