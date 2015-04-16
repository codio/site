# Mobile Menu for the Docs
#

$ ->

  menu = $ '#docs-menu'
  toggle = $ '#docs-menu-toggle'

  toggle.on 'click', (event) ->
    event.preventDefault()
    menu.toggleClass 'open'


  $('.docs .docs-page article h2').each ->
    heading = $(this)
    heading.html('<span>' + heading.text() + '</span>')