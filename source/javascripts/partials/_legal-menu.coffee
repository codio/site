# Mobile Menu for the Docs
#

$ ->

  menu = $ '#legal-menu'
  toggle = $ '#legal-menu-button'

  toggleMenu = ->
    menu.toggleClass 'open'

  openMenuHandler = (event) ->
    event.preventDefault()

    toggleMenu()

  toggle.on 'click', openMenuHandler
