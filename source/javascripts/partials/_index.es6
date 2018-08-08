/* globals $ */

$(() => {
  const headerHeight = $('header').height()
  const eventType = ((document.ontouchstart !== null) ? 'click' : 'touchstart')

  $('.scrollto').on(eventType, 'a', function (event) {
    event.preventDefault()

    const id = $(this).attr('href')
    const target = $(id).offset().top - headerHeight

    $('html, body').animate({
      scrollTop: target
    }, 500)
  })

  $('.video-link').magnificPopup({type:'iframe'});

  $('body').scrollspy({ target: '#scrollSpy' });
})
