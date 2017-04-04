/* globals $ */

$(() => {

  const $header = $('header')
  const $toggle = $('.menu-toggle')
  const $nav = $('.mobile-nav')

  // Responsive Menu

  $toggle.click(function (event) {
    event.preventDefault()

    if ($nav.hasClass('visible')) {
      $nav.fadeOut(() => {
        $nav.removeClass('visible')
      })
      $toggle.removeClass('close').addClass('open')
    } else {
      $nav.fadeIn(() => {
        $nav.addClass('visible')
      })
      $toggle.removeClass('open').addClass('close')
    }
  })
})
