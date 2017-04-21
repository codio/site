/* globals $ */

const parseRSS = () => {
  var rssBlock = $('.block-rss');

  $.get('https://codio.com/rss.xml', function(data) {
    $(data).find("item").each((index, element) => {
      var item = {
        title: $(element).find("title").text(),
        link: $(element).find("link").text(),
        description: $(element).find("description").text(),
        pubDate: $(element).find("pubDate").text(),
        author: $(element).find("author").text()
      }
      rssBlock.append("<div class='rss'><div class='rss-title'><a href='" + item.link + "'>" + item.title
        + "</a></div><div class='rss-description'>" + item.description + "</div></div>");
      if (index == 2) return false;
    });
  });
}

function isElementInWindow(el) {
  if ($(document).scrollTop() + $(window).height() > el.offset().top &&
    $(document).scrollTop() - el.offset().top < el.height())
    return true;
  else
    return false;
}

$().ready(() => {
  if (document.location.pathname.lastIndexOf("/features", 0) !== 0) return;
    const el = $('#featuresRow');
    var top = $('.top');
    var dot = $('.dot');
    var bottom = $('.bottom');
    const bottomHeight = el.outerHeight() - 56;

  $(window).scroll(function() {
    if (isElementInWindow(el)) {
      top.css('height', '50px');
      dot.css('border-width', '6px');
      bottom.css('height', String(bottomHeight) + 'px');
    }
  });

  parseRSS();
});
