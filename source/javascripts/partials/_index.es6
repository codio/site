/* globals $ */

$(() => {
  const headerHeight = $('header').height()
  const eventType = ((document.ontouchstart !== null) ? 'click' : 'touchstart')
  const higherPerformanceHeight = $('.higher-performance').height()

  $('.higher-performance-top-action-icon').click(function() {
    $('html, body').animate({
      scrollTop: higherPerformanceHeight
    }, 500);
  });

  $('.scrollto').on(eventType, function (event) {
    event.preventDefault()

    const id = $(this).attr('href')
    const offset = 2 * headerHeight
    const target = $(id).offset().top - offset

    $('html, body').animate({
      scrollTop: target
    }, 500)
  })

  $('.video-link').magnificPopup({type:'iframe'});

  $('body').scrollspy({ target: '#scrollSpy' });
})
