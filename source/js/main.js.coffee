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
  (links = $('#nav-banner a')).on 'click', (e)->
    do e.preventDefault

    $this = $(this)
    type = $(this).attr('href').slice(1)

    $('.switched-lists .container > ul:visible').fadeOut ->
      do $("##{type}").fadeIn

    links.parent().removeClass 'active'
    $this.parent().addClass 'active'

    pusher = $('#ac-sitebar-pusher')
    pushHeight = if pusher.length > 0 then pusher.height() else 0
    $(document.body).animate({
      scrollTop: $('#nav-banner').offset().top - pushHeight
    }, 1000)


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
