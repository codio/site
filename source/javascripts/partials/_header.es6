/* globals $ */

$(() => {

  const $header = $('header')
  const $toggle = $('.menu-toggle')
  const $nav = $('.mobile-nav')
  const $subHeader = $('.subheader-block')

  if ($header.hasClass('should-be-fixed')) {
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

      if (scrollTop > 65) {
        $subHeader.hide();
        $header.height(65);
      } else {
        if ($(window).width() > 800) {
          $subHeader.show();
          $header.height(105);
        } else {
          $subHeader.hide();
          $header.height(65);
        }
      }
    })
  } else {
    $(window).scroll(() => {
      const scrollTop = $(window).scrollTop()

      if (scrollTop > 65) {
        $subHeader.hide();
        $header.height(65);
      } else {
        if ($(window).width() > 800) {
          $subHeader.show();
          $header.height(105);
        } else {
          $subHeader.hide();
          $header.height(65);
        }
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
