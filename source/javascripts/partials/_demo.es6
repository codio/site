/* globals $ */

const videoIdlist = [
  '170160323',
  '177558343',
  '178919137',
  '177721667',
  '163315948',
  '177721668',
  '165269077',
  '160137702',
  '177715465',
  '177714682'
]

var videoDescription = [];

const $videoList = $('.video-list ul');

const fillVideoList = () => {
  $.each(videoIdlist, (index, id) =>{
    $.getJSON("http://vimeo.com/api/v2/video/" + id + ".json",
      (videoData) => {
        $videoList.append('<li data-index="' + index + '"><div class="video-list-item">'
          + '<div class="thumb"><img class="" src="' + videoData[0].thumbnail_small + '" alt="videoData.title"/></div>'
          + '<div class="video-list-item-desc">'
          + '<div class="title">' + videoData[0].title + '</div>'
          + '<div class="user-name">' + videoData[0].user_name + '</div>'
          + '</div></div></li>');
        videoDescription.push(videoData[0].description);
      });
  });
}

$(document).ready(() => {
  videoList.click((e) => {

  })
});

$(() => {

  $('#book-now-id').collapse('hide');

  fillVideoList();

  $('#demo-form').submit(function (event) {
    event.preventDefault()

    var data = {
      name: $('#name').val(),
      company: $('#company').val(),
      email: $('#email').val(),
      phone: $('#phone').val(),
      datetime: $('#datetime').val(),
      byEmail: $('#byEmail').prop('checked') ? 'yes' : 'no',
      byPhone: $('#byPhone').prop('checked') ? 'yes' : 'no'
    }

    $.post($("#demo-form").attr('action'), data, (data, status) => {
      if(status == 'success') {
        ga('send', 'event', 'Site', 'Book a demo', 'University')
        $('.section.second').fadeOut(1000, () => {
          $('.section.third').fadeIn(1000)
        })
      }
    })
    .fail(function() {
      alert('There was an error procesing your request please try again.')
    })
  })

})
