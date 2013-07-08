#= require_tree ./lib

# Global vars
exports = this


# Home page animations
$ ->
  # Roll the reel into play on page load.
  $('#reel').transition
    x: -1980
    rotate: '-360deg'
    delay: 500
    duration: 1500
    easing: 'ease'

  $('#tagline img').transition
    opacity: 1
    duration: 3000
    delay: 800

  $('#tagline div').transition
    opacity: 1
    duration: 1000
    delay: 1800


# Handles the hidden submenu.
$ ->
  $('#content-body h1 button').click ->
    if $('aside').is(':visible')
      do $('aside').hide
    else
      do $('aside').show


$ ->
  $('.fancybox').fancybox
    helpers:
      title:
        type: 'inside'
    beforeLoad: ->
      this.title = $(this.element).find('img').attr('title')


$ ->
  if (aside = $('body.standard aside')).length > 0
    # Floating submenu
    top = aside.offset().top - parseFloat(aside.css('marginTop').replace(/auto/, 0))
    $(window).scroll (event)->
      # whether that's below the form
      if $(this).scrollTop() >= top
        # if so, ad the fixed class
        aside.addClass('fixed')
      else
        # otherwise remove it
        aside.removeClass('fixed')


# Blog
$ ->

  # Handle blog images
  if (images = $('body.blog section.posts article img')).length > 0
    images.each ->
      self = $(this)
      unless self.parent().is('a')
        self.wrap -> "<a href='#{self.attr('src')}' class='fancybox' />"

  # Set syntax highlighting language to javascript by default.
  $('body.blog section.posts article pre > code').addClass 'lang-javascript'

  # Handle video links so they open in fancybox
  if (videos = $("body.blog section.posts article a[href*='youtube']")).length > 0
    videos.addClass 'fancybox fancybox.iframe'



# Tree
$ ->
  if ($tree = $('#tree')).length > 0

    doc_events = ->
      # Handle images
      if (images = $('body.docs article :not(a)>img')).length > 0
        images.wrap -> "<a href='#{$(this).attr('src')}' class='fancybox' />"

      # Set syntax highlighting language to javascript by default.
      $('body.docs article pre > code').addClass 'lang-javascript'

      # Handle video links so they open in fancybox
      if (videos = $("body.docs article a[href*='youtube']")).length > 0
        videos.addClass 'fancybox fancybox.iframe'

    do doc_events


    # Handle full screen button
    $('#full-screen').on 'click', (e)->
      do e.preventDefault

      if $('body').hasClass('full-screen')
        $('body').removeClass 'full-screen'
      else
        $('body').addClass 'full-screen'
        $tree.height $(window).height() - $tree.offset().top - 20


    # Add/remove classes depending upon the collapsed state.
    $tree.find('div>span').on 'click', ->
      $(this).parent().parent().toggleClass 'expanded'


    # Clicking a directory link should open up the directory index.
    $tree.find('a').on 'click', ->
      $tree.find('li').removeClass('checked')

      li = if $(this).parent().find('>span').length > 0
        $(this).parent().parent()
      else
        $(this).parent()

      li.addClass 'checked'
      li.parents('li').addClass 'checked'


    do expandTreeWithPath

    # Make sure the tree is updated if a link is clicked within a doc page, and ensure all doc
    # events and set.
    $(document).on 'page:change', ->
      do expandTreeWithPath
      do doc_events
      do Rainbow.color


# Expands the tree to the current URL
exports.expandTreeWithPath = (path)->
  path = document.location.pathname unless path?
  path = path.replace(/\/$/, '') + "/"

  if (selected = $("#tree a[href='#{path}']")).length > 0
    $('#tree li').removeClass('checked')

    if selected.parent().find('>span').length > 0
      li = selected.parent().parent()
    else
      li = selected.parent()

    li.addClass 'checked'
    li.parents('li').addClass 'checked'
