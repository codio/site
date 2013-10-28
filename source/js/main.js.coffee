#= require_tree ./lib

# Global vars
exports = this


# Codio Session
$ ->

  signedInNav = $('#signedin-nav')
  signedOutNav = $('#signedout-nav')
  sessionId = $.cookie('crafted_session')

  # User is anonymous
  if !sessionId
    do signedOutNav.fadeIn
    if ga?
      ga 'set', 'dimension1', 'no'
      ga 'set', 'dimension3', 'anonymous'
  else
    request = $.post 'https://codio.com/service/',
      acrequest: JSON.stringify
        object: 'AccountManager',
        method: 'getMyInfo',
        params:
          session_id: sessionId

    request.done (data)->
      if data.code != 1
        do signedOutNav.fadeIn
        if ga?
          ga 'set', 'dimension1', 'no'
          ga 'set', 'dimension3', 'anonymous'
      else
        user = data.response.details

        if typeof Intercom != 'undefined'
          Intercom 'boot',
            app_id: 'ee8711023afa04b80a6b921ddb3939c1171e0f62',
            email: user.email,
            created_at: if user.created_at then Math.round(user.created_at / 1000) else undefined,
            username: user.name,
            name: user.actual_name || user.name,
            user_id: data.response.account
            widget:
              activator: '#IntercomDefaultWidget'

        hash = md5 user.email.toLowerCase()
        $('#gravatar img').prop 'src', '//www.gravatar.com/avatar/' + hash + '?s=32&amp;d=mm'
        $('#gravatar').prop 'href', "/#{user.name}"
        userlink = $('#userlink')
        userlink.prop 'href', "/#{user.name}"
        userlink.text user.name

        do signedInNav.fadeIn
        if ga?
          ga 'set', 'dimension1', 'yes'
          ga 'set', 'dimension3', user.name


$ ->

  $("a[href^='#']").on 'click', (event) ->
    t = $(this).data().el || $(this.hash)
    $(this).data().el = t
    return if !t.length

    tOffset = t.offset().top;
    $('html,body').animate {scrollTop: tOffset - 50}, 'slow';



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
      media: {},
      title:
        type: 'inside'
    beforeLoad: ->
      this.title = $(this.element).find('img').attr('title')


$ ->
  if (aside = $('body.standard:not(.no-fixed-submenu) aside')).length > 0
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
  if (videos = $("body.blog section.posts article a").filter("[href*='youtube'], [href*='vimeo']")).length > 0
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
      if (videos = $("body.docs article a").filter("[href*='youtube'], [href*='vimeo']")).length > 0
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
      ga? && ga 'send', 'pageview'


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
