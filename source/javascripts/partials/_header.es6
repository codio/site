/* globals $ */


$(() => {

  const $header = $('header');
  const $toggle = $('.menu-toggle');
  const $nav = $('.mobile-nav');
  const $dropdownMenu = $('.header-dropdown-menu');

  var setTransparent = () => {
    $header.removeClass('opaque-background');
    $header.addClass('transparent-background');
    $dropdownMenu.removeClass('opaque-background');
    $dropdownMenu.addClass('transparent-background');
  }

  var setOpaque = () => {
    $header.removeClass('transparent-background');
    $header.addClass('opaque-background');
    $dropdownMenu.removeClass('transparent-background');
    $dropdownMenu.addClass('opaque-background');
  }

  var setHeaderStyle = () => {
    setTransparent();
  }

  if ($('body').innerWidth() <= 783) {
    setOpaque();
  } else {
    setHeaderStyle();
  }

  $(window).resize(() => {
    if ($('body').innerWidth() > 783) {
      setHeaderStyle();
    } else {
      setOpaque();
    }
  });

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
