$ ->
  $('.video-modal').on 'click', (event) ->
    event.preventDefault()
    url = $(event.target).attr('href')
    $.pgwModal(
      titleBar: no
      maxWidth: 720
      content: """
        <iframe src="https://player.vimeo.com/video/122905464?autoplay=1&color=ffffff" width="720" height="475" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        """
    )
