window.Rainbow&&(window.Rainbow.linecount=function(e){e.onHighlight(function(e){var t=$(e),n=t.clone().empty(),r=$("<table />",{"class":"rainbow"}).appendTo(n),i=$("<tr />",{"class":"rainbow-header"}).appendTo(r);$("<th />").appendTo(i),$("<th />",{"class":"rainbow-language"}).text(t.data("language")).appendTo(i);var a=t.html().trim().split("\n");$.each(a,function(e,t){e++;var n=$("<tr />",{"class":"rainbow-line rainbow-line-"+e});$("<td />",{"class":"rainbow-line-number","data-number":e}).appendTo(n),$("<td />",{"class":"rainbow-line-code"}).html(t).appendTo(n),r.append(n)}),t.replaceWith(r)})}(window.Rainbow));