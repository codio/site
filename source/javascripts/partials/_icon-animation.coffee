# Animate Icons when they come into view


$ ->

  viewportOptions =
    scrollSelector: '.parallax'
    classToAdd: 'animate'
    offset: 50

  $('svg.stacks').viewportChecker viewportOptions
  $('svg.ide').viewportChecker viewportOptions
  $('svg.book').viewportChecker viewportOptions
