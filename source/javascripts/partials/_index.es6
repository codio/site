/* globals $ */

$(() => {
  const headerHeight = $('header').height()
  const eventType = ((document.ontouchstart !== null) ? 'click' : 'touchstart')

  $('.scrollto').on(eventType, function (event) {
    const id = $(this).attr('href')
    const offset = 2 * headerHeight
    const target = $(id).offset().top - offset

    $('html, body').animate({
      scrollTop: target
    }, 500)

    event.preventDefault()
  })
})
