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

var videoDescriptions = new Array(videoIdlist.length);
var videoTitles = new Array(videoIdlist.length);

const fillVideoList = (videoList) => {
  $.each(videoIdlist, (index, id) => {
    $.ajax({
      type: "GET",
      dataType: "jsonp",
      url: "https://vimeo.com/api/v2/video/" + id + ".json?callback=?",
      success: (videoData) => {
        videoList.append('<li data-index="' + index + '"><div class="video-list-item">'
          + '<div class="thumb"><img class="" src="' + videoData[0].thumbnail_small + '" alt="videoData.title"/></div>'
          + '<div class="video-list-item-desc">'
          + '<div class="title">' + videoData[0].title + '</div>'
          + '<div class="user-name">' + videoData[0].user_name + '</div>'
          + '</div></div></li>');
        videoDescriptions[index] = (videoData[0].description);
        videoTitles[index] = (videoData[0].title);
      },
      error: () => {
        alert("Unable reading video info with id=" + id);
      } 
    });
  });
};

$(document).ready(() => {
  var videoList = $('.video-list ul');
  var title = $('.video-content .title');
  var description = $('.video-content .description');
  var player = $('#vm-player');

  $('#book-now-id').collapse('hide');

  fillVideoList(videoList);

  videoList.on("click", "li", (e) => {
    var activeItem = $('.active-item');
    var target = $(e.currentTarget);
    activeItem.removeClass('active-item');
    target.find("div").addClass("active-item");
    var index = target.data('index');
    player.attr('src', 'https://player.vimeo.com/video/' + videoIdlist[index] + '?byline=0&portrait=0');
    var iframe = player[0];
    player.load();
    title.text(videoTitles[index]);
    description.text(videoDescriptions[index]);
  });

  setTimeout(() => {
    $('.video-list ul li').first().trigger('click');
  }, 500);
});
