#= require_tree ./lib

# Global vars
exports = this


$ ->
  $(':not(.nofade) > a').hover(
    ->
      $(this).animate opacity: 0.6, 200
    ->
      $(this).animate opacity: 1.0, 200
  )


# Home page feature lists
$ ->
  navBannerClick = (e)->
    e && e.preventDefault()

    $this = $(this)
    type = $this.attr('href').slice(1)

    $('.switched-lists .container > ul:visible').fadeOut ->
      do $("##{type}").fadeIn

    links.parent().removeClass 'active'
    $this.parent().addClass 'active'

    pusher = $('#ac-sitebar-pusher')
    pushHeight = if pusher.length > 0 then pusher.height() else 0
    $(document.body).animate({
      scrollTop: $('#nav-banner').offset().top - pushHeight
    }, 1000)

  (links = $('#nav-banner a')).on 'click', navBannerClick


  # Handle the "features" click in main navigation
  $('#navigation a[href="/#features"]').on 'click', (e)->
    if goto = $('#nav-banner [href=#current-features]')
      navBannerClick.call $('#nav-banner [href=#current-features]')[0]

  # Handle the "features" click in main navigation
  $('#navigation a[href="/#education"], #edulink').on 'click', (e)->
    if goto = $('#nav-banner [href=#education]')
      navBannerClick.call $('#nav-banner [href=#education]')[0]



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

    # $(window).on 'scroll', ->
    #   return if $('body').hasClass('full-screen')

    #   $window = $(window)

    #   winHeight = $window.height() - 100
    #   footHeight = $('#price-banner').position().top - $window.scrollTop() - 100

    #   height = if footHeight < winHeight then footHeight else winHeight
    #   if $window.scrollTop() <= 220
    #     height = $window.height() - $tree.position().top + $window.scrollTop() - 10

    #   $tree.height height


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
