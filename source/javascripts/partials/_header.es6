/* globals $ */

$(() => {
  const $header = $('header');
  const $toggle = $('.menu-toggle');
  const $nav = $('.mobile-nav');
  const $dropdownMenu = $('.header-dropdown-menu');
  const $headerLogo = $header.find('img');

  var setDark = () => {
    $header.removeClass('header-dark');
    $header.addClass('header-light');
    $dropdownMenu.removeClass('header-dark');
    $dropdownMenu.addClass('header-light');
    $headerLogo.attr({'src':'/img/logo-dark.svg', 'alt':'Logo'});
  }

  var setLight = () => {
    $header.removeClass('header-light');
    $header.addClass('header-dark');
    $dropdownMenu.removeClass('header-light');
    $dropdownMenu.addClass('header-dark');
    $headerLogo.attr({'src':'/img/logo-light.svg', 'alt':'Logo'});
  }

  if ($('body').innerWidth() <= 783) {
    setDark();
  }

  $(window).resize(() => {
    if ($('body').innerWidth() < 783) {
      setDark();
    }
  });

  $(window).on("scroll", () => {
    if ($(window).scrollTop() > 0) setDark();
    else setLight();
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
