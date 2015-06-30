/* globals $ */

$(() => {

  const $header = $('header')
  const $toggle = $('.menu-toggle')
  const $nav = $('.mobile-nav')

  if (location.pathname === '/') {
    // Index page
    $header.removeClass('fixed')

    const headerHeight = $('header').height()
    const heroHeight = $('.header-block').height()
    const offsetVal = heroHeight - headerHeight

    $(window).scroll(() => {
      const scrollTop = $(window).scrollTop()

      if (scrollTop >= offsetVal) {
        $header.addClass('fixed')
        $toggle.addClass('fixed')
      } else {
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
