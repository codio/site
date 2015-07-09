/* globals $ */

$(() => {

  const $header = $('header')
  const $toggle = $('.menu-toggle')
  const $nav = $('.mobile-nav')

  const fixedLocations = [
    '/',
    '/team',
    '/mission'
  ]

  if (fixedLocations.indexOf(location.pathname) > -1) {
    $header.removeClass('fixed')

    const headerHeight = $('header').height()
    const heroHeight = $('.header-block').height()
    const offsetVal = heroHeight - headerHeight

    $(window).scroll(() => {
      const scrollTop = $(window).scrollTop()

      if (scrollTop >= offsetVal && !$header.hasClass('fixed')) {
        $header.hide()
        $header.addClass('fixed')
        $toggle.addClass('fixed')
        $header.fadeIn()
      } else if (scrollTop < offsetVal) {
        $header.removeClass('fixed')
        $toggle.removeClass('fixed')
      }
    })
  }

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
