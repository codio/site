/* globals $ */

$(() => {
  const $header = $('header')

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
      } else {
        $header.removeClass('fixed')
      }
    })
  }
})
