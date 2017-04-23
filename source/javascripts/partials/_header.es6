/* globals $ */

$(() => {

  const $header = $('header');
  const $toggle = $('.menu-toggle');
  const $nav = $('.mobile-nav');
  const $dropdownMenu = $('.header-dropdown-menu');

  if (!$header.hasClass('should-be-transparent')) {
    const offsetVal = $('.header-block').height() - 65;

    $(window).scroll(() => {
      const scrollTop = $(window).scrollTop();

      if (scrollTop >= offsetVal) {
        $header.removeClass('transparent-background');
        $header.addClass('opaque-background');
        $dropdownMenu.removeClass('transparent-background');
        $dropdownMenu.addClass('opaque-background');
        $header.fadeIn();
      } else if (scrollTop < offsetVal) {
        $header.removeClass('opaque-background');
        $header.addClass('transparent-background');
        $dropdownMenu.removeClass('opaque-background');
        $dropdownMenu.addClass('transparent-background');
      }
    })
  }

  // Responsive Menu

  $toggle.click(function (event) {
    event.preventDefault();

    if ($nav.hasClass('visible')) {
      $nav.fadeOut(() => {
        $nav.removeClass('visible');
      })
      $toggle.removeClass('close').addClass('open');
    } else {
      $nav.fadeIn(() => {
        $nav.addClass('visible');
      })
      $toggle.removeClass('open').addClass('close');
    }
  })
})
