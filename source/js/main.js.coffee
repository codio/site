#= require_tree ./lib

# Global vars
exports = this


# Handle IE users - who are stupid!
$ ->
  if $.browser.msie?
    if parseInt($.browser.version, 10) < 9
      html = $('#old-browser').html()
      $('body :not(#old-browser,#old-browser-inner)').remove()
      $.fancybox.open html


$ ->
  $(':not(.nofade) > a').hover(
    ->
      $(this).animate opacity: 0.6, 200
    ->
      $(this).animate opacity: 1.0, 200
  )


# Home page feature lists
$ ->
  (links = $('body.home #nav-banner a')).on 'click', ->
    $this = $(this)
    type = $(this).attr('href').slice(1)

    $('#features .container > ul:visible').fadeOut ->
      do $("##{type}").fadeIn

    links.parent().removeClass 'active'
    $this.parent().addClass 'active'

    $(document.body).animate({
      scrollTop: $('#nav-banner').offset().top
    }, 1000)

    false


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


# Homepage Slideshow.
$ ->
  $('body.home header > .carousel').carousel()


# Blog
$ ->

  # Handle blog images
  if (images = $('body.blog section.posts article img')).length > 0
    images.wrap -> "<a href='#{$(this).attr('src')}' class='fancybox' />"

  if (images = $("body.blog section.posts article img[align='left']")).length > 0
    images.css 'margin', '20px 25px 15px 0'

  # Set syntax highlighting language to javascript by default.
  $('body.blog section.posts article pre > code').addClass 'lang-javascript'
