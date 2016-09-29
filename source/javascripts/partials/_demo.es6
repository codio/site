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

var $videoDescriptions = new Array(videoIdlist.length);
var $videoTitles = new Array(videoIdlist.length);

const $videoList = $('.video-list ul');
const $title = $('.video-content .title');
const $description = $('.video-content .description');
const $videoFrame = $('.video-player .h_iframe');

const fillVideoList = () => {
  $.each(videoIdlist, (index, id) => {
    $.getJSON("http://vimeo.com/api/v2/video/" + id + ".json",
      (videoData) => {
        $videoList.append('<li data-index="' + index + '"><div class="video-list-item">'
          + '<div class="thumb"><img class="" src="' + videoData[0].thumbnail_small + '" alt="videoData.title"/></div>'
          + '<div class="video-list-item-desc">'
          + '<div class="title">' + videoData[0].title + '</div>'
          + '<div class="user-name">' + videoData[0].user_name + '</div>'
          + '</div></div></li>');
        $videoDescriptions[index] = (videoData[0].description);
        $videoTitles[index] = (videoData[0].title);
      });
  });
};

$(document).ready(() => {
  $($videoList).on("click", "li", (e) => {
    $('.active-item').removeClass('active-item');
    $(e.currentTarget).find("div").addClass("active-item");
    var index = $(e.currentTarget).data('index');
    $('#vm-player').attr('src', 'https://player.vimeo.com/video/' + videoIdlist[index] + '?byline=0&portrait=0');
    var iframe = $('#vm-player')[0];
    $('#vm-player').load(function(e) { iframe.api('play'); });
    $title.text($videoTitles[index]);
    $description.text($videoDescriptions[index]);
  });
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
