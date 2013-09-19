/*
Tipue Search 2.0
Copyright (c) 2012 Tipue
Tipue Search is released under the MIT License
http://www.tipue.com/search
*/
!function(t){t.fn.tipuesearch=function(e){var n=t.extend({show:7,newWindow:!1,showURL:!0,minimumLength:3,descriptiveWords:25,highlightTerms:!1,highlightEveryTerm:!1,mode:"static",contentLocation:"tipuesearch/tipuesearch_content.json"},e);return this.each(function(){function e(t){return decodeURIComponent((new RegExp("[?|&]"+t+"="+"([^&;]+?)(&|#|;|$)").exec(location.search)||[,""])[1].replace(/\+/g,"%20"))||null}function i(e,a){t("#tipue_search_content").hide();var s="",l=!1,c=!1,d=t(".docs aside form input").val().toLowerCase();d=t.trim(d);var u=d.split(" ");if(d.length>=n.minimumLength){if(a){for(var h=d,p=0;p<u.length;p++)for(var f=0;f<tipuesearch_replace.words.length;f++)u[p]==tipuesearch_replace.words[f].word&&(d=d.replace(u[p],tipuesearch_replace.words[f].replace_with),l=!0);u=d.split(" ")}for(var m=d,p=0;p<u.length;p++)for(var f=0;f<tipuesearch_stem.words.length;f++)u[p]==tipuesearch_stem.words[f].word&&(m=m+" "+tipuesearch_stem.words[f].stem);u=m.split(" ");var g=0;found=new Array;for(var p=0;p<o.pages.length;p++)if(void 0!=o.pages[p].t){for(var b=1e7,v=o.pages[p].t,f=0;f<u.length;f++){var y=new RegExp(u[f],"i");if(-1!=o.pages[p].t.search(y)&&(b-=2e3-p),o.pages[p].text&&-1!=o.pages[p].text.search(y)&&(b-=1500-p),n.highlightTerms){if(n.highlightEveryTerm)var w=new RegExp("("+u[f]+")","gi");else var w=new RegExp("("+u[f]+")","i");v=v.replace(w,"<em>$1</em>")}-1!=o.pages[p].b.search(y)&&(b-=1e3-p)}1e7>b&&(found[g++]=b+"^"+o.pages[p].r+"^"+v+"^"+o.pages[p].u)}if(0!=g){1==l&&(s+='<div id="tipue_search_warning_head">Showing results for '+d+"</div>",s+='<div id="tipue_search_warning">Show results for <a href="javascript:void(0)" id="tipue_search_replaced">'+h+"</a></div>"),1==g?s+='<div id="tipue_search_results_count">1 result for '+d+"...</div>":(c_c=g.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),s+='<div id="tipue_search_results_count">'+c_c+" results for "+d+"...</div>"),found.sort();for(var Z=0,p=0;p<found.length;p++){var x=found[p].split("^");if(Z>=e&&Z<n.show+e){s+='<div id="tipue_search_content_title"><a href="'+x[3]+'"'+r+">"+x[1]+"</a></div>";var F=x[2],W="",O=F.split(" ");if(O.length<n.descriptiveWords)W=F;else for(var f=0;f<n.descriptiveWords;f++)W+=O[f]+" ";W=t.trim(W),"."!=W.charAt(W.length-1)&&(W+=" ..."),s+='<div id="tipue_search_content_text">'+W+"</div>",n.showURL&&(s+='<div id="tipue_search_content_loc"><a href="'+x[3]+'"'+r+">"+x[3]+"</a></div>")}Z++}if(g>n.show){var R=Math.ceil(g/n.show),k=e/n.show;if(s+='<div id="tipue_search_foot"><ul id="tipue_search_foot_boxes">',e>0&&(s+='<li><a href="javascript:void(0)" class="tipue_search_foot_box" id="'+(e-n.show)+"_"+a+'">&#171; Previous</a></li>'),4>=k){var C=R;R>5&&(C=5);for(var f=0;C>f;f++)s+=f==k?'<li class="current">'+(f+1)+"</li>":'<li><a href="javascript:void(0)" class="tipue_search_foot_box" id="'+f*n.show+"_"+a+'">'+(f+1)+"</a></li>"}else{var C=R+4;C>R&&(C=R);for(var f=k;C>f;f++)s+=f==k?'<li class="current">'+(f+1)+"</li>":'<li><a href="javascript:void(0)" class="tipue_search_foot_box" id="'+f*n.show+"_"+a+'">'+(f+1)+"</a></li>"}k+1!=R&&(s+='<li><a href="javascript:void(0)" class="tipue_search_foot_box" id="'+(e+n.show)+"_"+a+'">Next &#187;</a></li>'),s+="</ul></div>"}}else s+='<div id="tipue_search_warning_head">Nothing found</div>'}else c?s+='<div id="tipue_search_warning_head">Nothing found</div><div id="tipue_search_warning">Common words are largely ignored</div>':(s+='<div id="tipue_search_warning_head">Search too short</div>',s+=1==n.minimumLength?'<div id="tipue_search_warning">Should be one character or more</div>':'<div id="tipue_search_warning">Should be '+n.minimumLength+" characters or more</div>");t(".docs article").fadeOut(function(){t("#tipue_search_content").html(s).fadeIn()}),t("#tipue_search_replaced").click(function(){i(0,!1)}),t(".tipue_search_foot_box").click(function(){var e=t(this).attr("id"),n=e.split("_");i(parseInt(n[0]),n[1])})}var o={pages:[]};t.ajaxSetup({async:!1}),"json"==n.mode&&t.getJSON(n.contentLocation,function(e){o=t.extend({},e)}),"static"==n.mode&&(o=t.extend({},tipuesearch));var r="";n.newWindow&&(r=' target="_blank"'),e("q")&&(t(".docs aside form input").val(e("q")),i(0,!0)),t(".docs aside form").submit(function(){return i(0,!0),!1})})}}(jQuery);