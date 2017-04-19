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
  var header = $('header');
  var footer = $('footer');
  var win = $(window);
  var subheader = $('#features-subheader');
  var headerBlock = $('.header-block');
  var content = $('.content-body');
  var scrollPos = 0;

  subheader.affix({
    offset: {
      top: function() {
        const c = headerBlock.height() - 65;
        this.top = c;

        return this.top;
      },
      bottom: function () {
        this.bottom = footer.outerHeight(true) + 100;
        return this.bottom;
      }
    }
  });

  subheader.on('affixed.bs.affix', function(){
    scrollPos = win.scrollTop();
    content.css('padding-top', '140px');
    
    win.scroll(() => {
      var currentScroll = win.scrollTop();
      if (scrollPos < (currentScroll - 45)) {
        subheader.css('top', '25px');
      } else {
        subheader.css('top', '65px');
      }
    });
  });

  subheader.on('affixed-top.bs.affix', function(){
    content.css('padding-top', '50px');
  });

  $(window).scroll(function() {
    const el = $('#featuresRow');
    var top = $('.top');
    var dot = $('.dot');
    var bottom = $('.bottom');

    if (isElementInWindow(el)) {
      top.css('height', '50px');
      dot.css('border-width', '6px');
      bottom.css('height', '360px');
    }
  });

  parseRSS();
});
