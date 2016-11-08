/* globals $ */

const parseRSS = () => {
  var rssBlock = $('.block-rss');

  $.get('http://news.codio.com/blog/rss.xml', function(data) {
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

$(document).ready(() => {
  var subheader = $(".subheader-block");
  var modalDialog = $(".modal-dialog");
  var header = $("header");
  var modal1 = $(".modal-body .step-1");
  var modal2 = $(".modal-body .step-2");

  $("#schoolsBtn").on("click", () => {
    modal1.css("display", "none");
    modal2.css("display", "block");
  })

  $("#backBtn").on("click", () => {
    modal1.css("display", "block");
	  modal2.css("display", "none");
  });

  $("#modalDialog").on("show.bs.modal", () => {
    var headerHeight = header.height();
    var scrollTop = $(window).scrollTop();
    var margin = -25;

    modal1.css("display", "block");
    modal2.css("display", "none");

    if (scrollTop < headerHeight) {
      margin += headerHeight - scrollTop;
    }
    modalDialog.css("margin-top", margin + "px");
  });

  parseRSS();
});
