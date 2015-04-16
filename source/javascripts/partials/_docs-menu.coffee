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


  $('.docs .docs-page article h2').each ->
    heading = $(this)
    heading.html('<span>' + heading.text() + '</span>')