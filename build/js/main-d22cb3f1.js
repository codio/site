/*!
 * jQuery Cookie Plugin v1.3
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */

(function ($, document, undefined) {

  var pluses = /\+/g;

  function raw(s) {
    return s;
  }

  function decoded(s) {
    return decodeURIComponent(s.replace(pluses, ' '));
  }

  var config = $.cookie = function (key, value, options) {

    // write
    if (value !== undefined) {
      options = $.extend({}, config.defaults, options);

      if (value === null) {
        options.expires = -1;
      }

      if (typeof options.expires === 'number') {
        var days = options.expires, t = options.expires = new Date();
        t.setDate(t.getDate() + days);
      }

      value = config.json ? JSON.stringify(value) : String(value);

      return (document.cookie = [
        encodeURIComponent(key), '=', config.raw ? value : encodeURIComponent(value),
        options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
        options.path    ? '; path=' + options.path : '',
        options.domain  ? '; domain=' + options.domain : '',
        options.secure  ? '; secure' : ''
      ].join(''));
    }

    // read
    var decode = config.raw ? raw : decoded;
    var cookies = document.cookie.split('; ');
    for (var i = 0, l = cookies.length; i < l; i++) {
      var parts = cookies[i].split('=');
      if (decode(parts.shift()) === key) {
        var cookie = decode(parts.join('='));
        return config.json ? JSON.parse(cookie) : cookie;
      }
    }

    return null;
  };

  config.defaults = {};

  $.removeCookie = function (key, options) {
    if ($.cookie(key) !== null) {
      $.cookie(key, null, options);
      return true;
    }
    return false;
  };

})(jQuery, document);
/*! fancyBox v2.1.3 fancyapps.com | fancyapps.com/fancybox/#license */

(function(B,x,f,q){var r=f(B),m=f(x),b=f.fancybox=function(){b.open.apply(this,arguments)},u=null,n=x.createTouch!==q,s=function(a){return a&&a.hasOwnProperty&&a instanceof f},p=function(a){return a&&"string"===f.type(a)},E=function(a){return p(a)&&0<a.indexOf("%")},k=function(a,d){var e=parseInt(a,10)||0;d&&E(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},v=function(a,b){return k(a,b)+"px"};f.extend(b,{version:"2.1.3",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,
maxWidth:9999,maxHeight:9999,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!n,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},
prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(f.browser.msie?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",
openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,
isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=s(a)?f(a).get():[a]),f.each(a,function(e,c){var j={},g,h,i,l,k;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),s(c)?(j={href:c.data("fancybox-href")||c.attr("href"),title:c.data("fancybox-title")||c.attr("title"),isDom:!0,element:c},f.metadata&&f.extend(!0,
j,c.metadata())):j=c);g=d.href||j.href||(p(c)?c:null);h=d.title!==q?d.title:j.title||"";l=(i=d.content||j.content)?"html":d.type||j.type;!l&&j.isDom&&(l=c.data("fancybox-type"),l||(l=(l=c.prop("class").match(/fancybox\.(\w+)/))?l[1]:null));p(g)&&(l||(b.isImage(g)?l="image":b.isSWF(g)?l="swf":"#"===g.charAt(0)?l="inline":p(c)&&(l="html",i=c)),"ajax"===l&&(k=g.split(/\s+/,2),g=k.shift(),k=k.shift()));i||("inline"===l?g?i=f(p(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):j.isDom&&(i=c):"html"===l?i=g:!l&&(!g&&
j.isDom)&&(l="inline",i=c));f.extend(j,{href:g,type:l,content:i,title:h,selector:k});a[e]=j}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==q&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1!==b.trigger("onCancel")&&(b.hideLoading(),b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||
b._afterZoomOut(a))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(!b.isOpen||!0===a?(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut()):(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&(b.player.timer=
setTimeout(b.next,b.current.playSpeed))},c=function(){d();f("body").unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};if(!0===a||!b.player.isActive&&!1!==a){if(b.current&&(b.current.loop||b.current.index<b.group.length-1))b.player.isActive=!0,f("body").bind({"afterShow.player onUpdate.player":e,"onCancel.player beforeClose.player":c,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")}else c()},next:function(a){var d=b.current;d&&(p(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},
prev:function(a){var d=b.current;d&&(p(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=k(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==q&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,j;c&&(j=b._getPosition(d),a&&"scroll"===a.type?(delete j.position,c.stop(!0,!0).animate(j,200)):(c.css(j),e.pos=f.extend({},
e.dim,j)))},update:function(a){var d=a&&a.type,e=!d||"orientationchange"===d;e&&(clearTimeout(u),u=null);b.isOpen&&!u&&(u=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),u=null)},e&&!n?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,n&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),
b.trigger("onUpdate")),b.update())},hideLoading:function(){m.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");m.bind("keydown.loading",function(a){if(27===(a.which||a.keyCode))a.preventDefault(),b.cancel()});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}))},getViewport:function(){var a=b.current&&b.current.locked||
!1,d={x:r.scrollLeft(),y:r.scrollTop()};a?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=n&&B.innerWidth?B.innerWidth:r.width(),d.h=n&&B.innerHeight?B.innerHeight:r.height());return d},unbindEvents:function(){b.wrap&&s(b.wrap)&&b.wrap.unbind(".fb");m.unbind(".fb");r.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(r.bind("orientationchange.fb"+(n?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&m.bind("keydown.fb",function(e){var c=e.which||e.keyCode,j=
e.target||e.srcElement;if(27===c&&b.coming)return!1;!e.ctrlKey&&(!e.altKey&&!e.shiftKey&&!e.metaKey&&(!j||!j.type&&!f(j).is("[contenteditable]")))&&f.each(d,function(d,j){if(1<a.group.length&&j[c]!==q)return b[d](j[c]),e.preventDefault(),!1;if(-1<f.inArray(c,j))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,j,g){for(var h=f(d.target||null),i=!1;h.length&&!i&&!h.is(".fancybox-skin")&&!h.is(".fancybox-wrap");)i=h[0]&&!(h[0].style.overflow&&
"hidden"===h[0].style.overflow)&&(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();if(0!==c&&!i&&1<b.group.length&&!a.canShrink){if(0<g||0<j)b.prev(0<g?"down":"left");else if(0>g||0>j)b.next(0>g?"up":"right");d.preventDefault()}}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,
e){e&&(b.helpers[d]&&f.isFunction(b.helpers[d][a]))&&(e=f.extend(!0,{},b.helpers[d].defaults,e),b.helpers[d][a](e,c))});f.event.trigger(a+".fb")}},isImage:function(a){return p(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$)/i)},isSWF:function(a){return p(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c,a=k(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&
(d.padding=[c,c,c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=
!0;if("image"===c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=!0);"iframe"===c&&n&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(n?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,v(d.padding[a]))});b.trigger("onReady");
if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=
this.width;b.coming.height=this.height;b._afterLoad()};a.onerror=function(){this.onload=this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,d=f(a.tpl.iframe.replace(/\{rnd\}/g,
(new Date).getTime())).attr("scrolling",n?"auto":a.iframe.scrolling).attr("src",a.href);f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);n||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||b._afterLoad()},_preloadImages:function(){var a=
b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,j,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());b.unbindEvents();
e=a.content;c=a.type;j=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case "inline":case "ajax":case "html":a.selector?e=f("<div>").html(e).find(a.selector):s(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",
!1)}));break;case "image":e=a.tpl.image.replace("{href}",g);break;case "swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}(!s(e)||!e.parent().is(a.inner))&&a.inner.append(e);b.trigger("beforeShow");
a.inner.css("overflow","yes"===j?"scroll":"no"===j?"hidden":j);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(b.isOpened){if(d.prevMethod)b.transitions[d.prevMethod]()}else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,j=b.skin,g=b.inner,h=b.current,c=h.width,i=h.height,l=h.minWidth,t=h.minHeight,m=h.maxWidth,
n=h.maxHeight,r=h.scrolling,p=h.scrollOutside?h.scrollbarWidth:0,w=h.margin,y=k(w[1]+w[3]),q=k(w[0]+w[2]),x,z,s,C,A,F,B,D,u;e.add(j).add(g).width("auto").height("auto").removeClass("fancybox-tmp");w=k(j.outerWidth(!0)-j.width());x=k(j.outerHeight(!0)-j.height());z=y+w;s=q+x;C=E(c)?(a.w-z)*k(c)/100:c;A=E(i)?(a.h-s)*k(i)/100:i;if("iframe"===h.type){if(u=h.content,h.autoHeight&&1===u.data("ready"))try{u[0].contentWindow.document.location&&(g.width(C).height(9999),F=u.contents().find("body"),p&&F.css("overflow-x",
"hidden"),A=F.height())}catch(G){}}else if(h.autoWidth||h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(C),h.autoHeight||g.height(A),h.autoWidth&&(C=g.width()),h.autoHeight&&(A=g.height()),g.removeClass("fancybox-tmp");c=k(C);i=k(A);D=C/A;l=k(E(l)?k(l,"w")-z:l);m=k(E(m)?k(m,"w")-z:m);t=k(E(t)?k(t,"h")-s:t);n=k(E(n)?k(n,"h")-s:n);F=m;B=n;h.fitToView&&(m=Math.min(a.w-z,m),n=Math.min(a.h-s,n));z=a.w-y;q=a.h-q;h.aspectRatio?(c>m&&(c=m,i=k(c/D)),i>n&&(i=n,c=k(i*D)),c<l&&(c=l,i=k(c/D)),i<t&&
(i=t,c=k(i*D))):(c=Math.max(l,Math.min(c,m)),h.autoHeight&&"iframe"!==h.type&&(g.width(c),i=g.height()),i=Math.max(t,Math.min(i,n)));if(h.fitToView)if(g.width(c).height(i),e.width(c+w),a=e.width(),y=e.height(),h.aspectRatio)for(;(a>z||y>q)&&(c>l&&i>t)&&!(19<d++);)i=Math.max(t,Math.min(n,i-10)),c=k(i*D),c<l&&(c=l,i=k(c/D)),c>m&&(c=m,i=k(c/D)),g.width(c).height(i),e.width(c+w),a=e.width(),y=e.height();else c=Math.max(l,Math.min(c,c-(a-z))),i=Math.max(t,Math.min(i,i-(y-q)));p&&("auto"===r&&i<A&&c+w+
p<z)&&(c+=p);g.width(c).height(i);e.width(c+w);a=e.width();y=e.height();e=(a>z||y>q)&&c>l&&i>t;c=h.aspectRatio?c<F&&i<B&&c<C&&i<A:(c<F||i<B)&&(c<C||i<A);f.extend(h,{dim:{width:v(a),height:v(y)},origWidth:C,origHeight:A,canShrink:e,canExpand:c,wPadding:w,hPadding:x,wrapSpace:y-j.outerHeight(!0),skinSpace:j.height()-i});!u&&(h.autoHeight&&i>t&&i<n&&!c)&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",
top:c[0],left:c[3]};d.autoCenter&&d.fixed&&!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=v(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=v(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&(b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){!f(d.target).is("a")&&!f(d.target).parent().is("a")&&
(d.preventDefault(),b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind(n?"touchstart.fb":"click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),!a.loop&&a.index===a.group.length-1?b.play(!1):b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=
!1,b.play()))},_afterZoomOut:function(a){a=a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,i=a.wPadding,l=b.getViewport();!e&&(a.isDom&&d.is(":visible"))&&(e=d.find("img:first"),e.length||(e=d));s(e)?(c=e.offset(),
e.is("img")&&(f=e.outerWidth(),g=e.outerHeight())):(c.top=l.y+(l.h-g)*a.topRatio,c.left=l.x+(l.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=l.y,c.left-=l.x;return c={top:v(c.top-h*a.topRatio),left:v(c.left-i*a.leftRatio),width:v(f+i),height:v(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](k("width"===
f?c:c-g*e)),b.inner[f](k("width"===f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,j=f.extend({opacity:1},d);delete j.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(j,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&
(c.opacity=0.1));b.wrap.animate(c,{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=v(k(e[g])-200),c[g]="+=200px"):(e[g]=v(k(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:function(){setTimeout(b._afterZoomIn,
20)}})},changeOut:function(){var a=b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!n,fixed:!0},overlay:null,fixed:!1,create:function(a){a=f.extend({},this.defaults,a);this.overlay&&this.close();
this.overlay=f('<div class="fancybox-overlay"></div>').appendTo("body");this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this,a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(r.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",function(a){f(a.target).hasClass("fancybox-overlay")&&
(b.isActive?b.close():d.close())});this.overlay.css(a.css).show()},close:function(){f(".fancybox-overlay").remove();r.unbind("resize.overlay");this.overlay=null;!1!==this.margin&&(f("body").css("margin-right",this.margin),this.margin=!1);this.el&&this.el.removeClass("fancybox-lock")},update:function(){var a="100%",b;this.overlay.width(a).height("100%");f.browser.msie?(b=Math.max(x.documentElement.offsetWidth,x.body.offsetWidth),m.width()>b&&(a=m.width())):m.width()>r.width()&&(a=m.width());this.overlay.width(a).height(m.height())},
onReady:function(a,b){f(".fancybox-overlay").stop(!0,!0);this.overlay||(this.margin=m.height()>r.height()||"scroll"===f("body").css("overflow-y")?f("body").css("margin-right"):!1,this.el=x.all&&!x.querySelector?f("html"):f("body"),this.create(a));a.locked&&this.fixed&&(b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){b.locked&&(this.el.addClass("fancybox-lock"),!1!==this.margin&&f("body").css("margin-right",k(this.margin)+
b.scrollbarWidth));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.isActive&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var d=b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(p(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case "inside":c=b.skin;break;case "outside":c=
b.wrap;break;case "over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),f.browser.msie&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(k(d.css("margin-bottom")))}d["top"===a.position?"prependTo":"appendTo"](c)}}};f.fn.fancybox=function(a){var d,e=f(this),c=this.selector||"",j=function(g){var h=f(this).blur(),i=d,j,k;!g.ctrlKey&&(!g.altKey&&!g.shiftKey&&!g.metaKey)&&!h.is(".fancybox-wrap")&&(j=a.groupAttr||"data-fancybox-group",k=h.attr(j),k||(j="rel",
k=h.get(0)[j]),k&&(""!==k&&"nofollow"!==k)&&(h=c.length?f(c):e,h=h.filter("["+j+'="'+k+'"]'),i=h.index(this)),a.index=i,!1!==b.open(h,a)&&g.preventDefault())},a=a||{};d=a.index||0;!c||!1===a.live?e.unbind("click.fb-start").bind("click.fb-start",j):m.undelegate(c,"click.fb-start").delegate(c+":not('.fancybox-item, .fancybox-nav')","click.fb-start",j);this.filter("[data-fancybox-start=1]").trigger("click");return this};m.ready(function(){f.scrollbarWidth===q&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});if(f.support.fixedPosition===q){var a=f.support,d=f('<div style="position:fixed;top:20px;"></div>').appendTo("body"),e=20===d[0].offsetTop||15===d[0].offsetTop;d.remove();a.fixedPosition=e}f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")})})})(window,document,jQuery);
/*! Responsive Carousel - v0.1.0 - 2012-10-23
* https://github.com/filamentgroup/responsive-carousel
* Copyright (c) 2012 Filament Group, Inc.; Licensed MIT, GPL */

/*
 * responsive-carousel
 * https://github.com/filamentgroup/responsive-carousel
 *
 * Copyright (c) 2012 Filament Group, Inc.
 * Licensed under the MIT, GPL licenses.
 */


(function($) {

  var pluginName = "carousel",
    initSelector = "." + pluginName,
    transitionAttr = "data-transition",
    transitioningClass = pluginName + "-transitioning",
    itemClass = pluginName + "-item",
    activeClass = pluginName + "-active",
    inClass = pluginName + "-in",
    outClass = pluginName + "-out",
    navClass =  pluginName + "-nav",
    cssTransitionsSupport = (function(){
      var prefixes = "webkit Moz O Ms".split( " " ),
        supported = false,
        property;

      while( prefixes.length ){
        property = prefixes.shift() + "Transition";

        if ( property in document.documentElement.style !== undefined && property in document.documentElement.style !== false ) {
          supported = true;
          break;
        }
      }
      return supported;
    }()),
    methods = {
      _create: function(){
        $( this )
          .trigger( "beforecreate." + pluginName )
          [ pluginName ]( "_init" )
          [ pluginName ]( "_addNextPrev" )
          .trigger( "create." + pluginName );
      },

      _init: function(){
        var trans = $( this ).attr( transitionAttr );

        if( !trans ){
          cssTransitionsSupport = false;
        }

        return $( this )
          .addClass(
            pluginName +
            " " + ( trans ? pluginName + "-" + trans : "" ) + " "
          )
          .children()
          .addClass( itemClass )
          .first()
          .addClass( activeClass );
      },

      next: function(){
        $( this )[ pluginName ]( "goTo", "+1" );
      },

      prev: function(){
        $( this )[ pluginName ]( "goTo", "-1" );
      },

      goTo: function( num ){

        var $self = $(this),
          trans = $self.attr( transitionAttr ),
          reverseClass = " " + pluginName + "-" + trans + "-reverse";

        // clean up children
        $( this ).find( "." + itemClass ).removeClass( [ outClass, inClass, reverseClass ].join( " " ) );

        var $from = $( this ).find( "." + activeClass ),
          prevs = $from.index(),
          activeNum = ( prevs < 0 ? 0 : prevs ) + 1,
          nextNum = typeof( num ) === "number" ? num : activeNum + parseFloat(num),
          $to = $( this ).find( ".carousel-item" ).eq( nextNum - 1 ),
          reverse = ( typeof( num ) === "string" && !(parseFloat(num)) ) || nextNum > activeNum ? "" : reverseClass;

        if( !$to.length ){
          $to = $( this ).find( "." + itemClass )[ reverse.length ? "last" : "first" ]();
        }

        if( cssTransitionsSupport ){
          $self[ pluginName ]( "_transitionStart", $from, $to, reverse );
        } else {
          $to.addClass( activeClass );
          $self[ pluginName ]( "_transitionEnd", $from, $to, reverse );
        }

        // added to allow pagination to track
        $self.trigger( "goto." + pluginName, $to );
      },

      update: function(){
        $(this).children().not( "." + navClass ).addClass( itemClass );

        return $(this).trigger( "update." + pluginName );
      },

      _transitionStart: function( $from, $to, reverseClass ){
        var $self = $(this);

        $to.one( navigator.userAgent.indexOf( "AppleWebKit" ) > -1 ? "webkitTransitionEnd" : "transitionend otransitionend", function(){
          $self[ pluginName ]( "_transitionEnd", $from, $to, reverseClass );
        });

        $(this).addClass( reverseClass );
        $from.addClass( outClass );
        $to.addClass( inClass );
      },

      _transitionEnd: function( $from, $to, reverseClass ){
        $(this).removeClass( reverseClass );
        $from.removeClass( outClass + " " + activeClass );
        $to.removeClass( inClass ).addClass( activeClass );
      },

      _bindEventListeners: function(){
        var $elem = $( this )
          .bind( "click", function( e ){
            var targ = $( e.target ).closest( "a[href='#next'],a[href='#prev']" );
            if( targ.length ){
              $elem[ pluginName ]( targ.is( "[href='#next']" ) ? "next" : "prev" );
              e.preventDefault();
            }
          });

        return this;
      },

      _addNextPrev: function(){
        return $( this )
          .append( "<nav class='"+ navClass +"'><a href='#prev' class='prev' aria-hidden='true' title='Previous'>Prev</a><a href='#next' class='next' aria-hidden='true' title='Next'>Next</a></nav>" )
          [ pluginName ]( "_bindEventListeners" );
      },

      destroy: function(){
        // TODO
      }
    };

  // Collection method.
  $.fn[ pluginName ] = function( arrg, a, b, c ) {
    return this.each(function() {

      // if it's a method
      if( arrg && typeof( arrg ) === "string" ){
        return $.fn[ pluginName ].prototype[ arrg ].call( this, a, b, c );
      }

      // don't re-init
      if( $( this ).data( pluginName + "data" ) ){
        return $( this );
      }

      // otherwise, init
      $( this ).data( pluginName + "active", true );
      $.fn[ pluginName ].prototype._create.call( this );
    });
  };

  // add methods
  $.extend( $.fn[ pluginName ].prototype, methods );

  // DOM-ready auto-init
  $( function(){
    $( initSelector )[ pluginName ]();
  } );

}(jQuery));

/*
 * responsive-carousel touch drag extension
 * https://github.com/filamentgroup/responsive-carousel
 *
 * Copyright (c) 2012 Filament Group, Inc.
 * Licensed under the MIT, GPL licenses.
 */

(function($) {

  var pluginName = "carousel",
    initSelector = "." + pluginName,
    noTrans = pluginName + "-no-transition",
    // UA is needed to determine whether to return true or false during touchmove (only iOS handles true gracefully)
    iOS = /iPhone|iPad|iPod/.test( navigator.platform ) && navigator.userAgent.indexOf( "AppleWebKit" ) > -1,
    touchMethods = {
      _dragBehavior: function(){
        var $self = $( this ),
          origin,
          data = {},
          xPerc,
          yPerc,
          setData = function( e ){

            var touches = e.touches || e.originalEvent.touches,
              $elem = $( e.target ).closest( initSelector );

            if( e.type === "touchstart" ){
              origin = {
                x : touches[ 0 ].pageX,
                y: touches[ 0 ].pageY
              };
            }

            if( touches[ 0 ] && touches[ 0 ].pageX ){
              data.touches = touches;
              data.deltaX = touches[ 0 ].pageX - origin.x;
              data.deltaY = touches[ 0 ].pageY - origin.y;
              data.w = $elem.width();
              data.h = $elem.height();
              data.xPercent = data.deltaX / data.w;
              data.yPercent = data.deltaY / data.h;
              data.srcEvent = e;
            }

          },
          emitEvents = function( e ){
            setData( e );
            $( e.target ).closest( initSelector ).trigger( "drag" + e.type.split( "touch" )[ 1], data );
          };

        $( this )
          .bind( "touchstart", function( e ){
            $( this ).addClass( noTrans );
            emitEvents( e );
          } )
          .bind( "touchmove", function( e ){
            setData( e );
            emitEvents( e );
            if( !iOS ){
              e.preventDefault();
              window.scrollBy( 0, -data.deltaY );
            }
          } )
          .bind( "touchend", function( e ){
            $( this ).removeClass( noTrans );
            emitEvents( e );
          } );


      }
    };

  // add methods
  $.extend( $.fn[ pluginName ].prototype, touchMethods );

  // DOM-ready auto-init
  $( initSelector ).live( "create." + pluginName, function(){
    $( this )[ pluginName ]( "_dragBehavior" );
  } );

}(jQuery));
/*
 * responsive-carousel touch drag transition
 * https://github.com/filamentgroup/responsive-carousel
 *
 * Copyright (c) 2012 Filament Group, Inc.
 * Licensed under the MIT, GPL licenses.
 */

(function($) {

  var pluginName = "carousel",
    initSelector = "." + pluginName,
    activeClass = pluginName + "-active",
    itemClass = pluginName + "-item",
    dragThreshold = function( deltaX ){
      return Math.abs( deltaX ) > 4;
    },
    getActiveSlides = function( $carousel, deltaX ){
      var $from = $carousel.find( "." + pluginName + "-active" ),
        activeNum = $from.prevAll().length + 1,
        forward = deltaX < 0,
        nextNum = activeNum + (forward ? 1 : -1),
        $to = $carousel.find( "." + itemClass ).eq( nextNum - 1 );

      if( !$to.length ){
        $to = $carousel.find( "." + itemClass )[ forward ? "first" : "last" ]();
      }

      return [ $from, $to ];
    };

  // Touch handling
  $( initSelector )
    .live( "dragmove", function( e, data ){

      if( !dragThreshold( data.deltaX ) ){
        return;
      }
      var activeSlides = getActiveSlides( $( this ), data.deltaX );

      activeSlides[ 0 ].css( "left", data.deltaX + "px" );
      activeSlides[ 1 ].css( "left", data.deltaX < 0 ? data.w + data.deltaX + "px" : -data.w + data.deltaX + "px" );
    } )
    .live( "dragend", function( e, data ){
      if( !dragThreshold( data.deltaX ) ){
        return;
      }
      var activeSlides = getActiveSlides( $( this ), data.deltaX ),
        newSlide = Math.abs( data.deltaX ) > 45;

      $( this ).one( navigator.userAgent.indexOf( "AppleWebKit" ) ? "webkitTransitionEnd" : "transitionEnd", function(){
        activeSlides[ 0 ].add( activeSlides[ 1 ] ).css( "left", "" );
      });

      if( newSlide ){
        activeSlides[ 0 ].removeClass( activeClass ).css( "left", data.deltaX > 0 ? data.w  + "px" : -data.w  + "px" );
        activeSlides[ 1 ].addClass( activeClass ).css( "left", 0 );
      }
      else {
        activeSlides[ 0 ].css( "left", 0);
        activeSlides[ 1 ].css( "left", data.deltaX > 0 ? -data.w  + "px" : data.w  + "px" );
      }
    } );

}(jQuery));



/*
 * responsive-carousel pagination extension
 * https://github.com/filamentgroup/responsive-carousel
 *
 * Copyright (c) 2012 Filament Group, Inc.
 * Licensed under the MIT, GPL licenses.
 */

(function( $, undefined ) {
  var pluginName = "carousel",
    initSelector = "." + pluginName + "[data-paginate]",
    paginationClass = pluginName + "-pagination",
    activeClass = pluginName + "-active-page",
    paginationMethods = {
      _createPagination: function(){
        var nav = $( this ).find( "." + pluginName + "-nav" ),
          items = $( this ).find( "." + pluginName + "-item" ),
          pNav = $( "<ol class='" + paginationClass + "'></ol>" ),
          num;

        // remove any existing nav
        nav.find( "." + paginationClass ).remove();

        for( var i = 0, il = items.length; i < il; i++ ){
          num = i + 1;
          pNav.append( "<li><a href='#" + num + "' title='Go to slide " + num + "'>" + num + "</a>" );
        }
        nav
          .addClass( pluginName + "-nav-paginated" )
          .find( "a" ).first().after( pNav );
      },
      _bindPaginationEvents: function(){
        $( this )
          .bind( "click", function( e ){
            var pagLink = $( e.target ).closest( "a" ),
              href = pagLink.attr( "href" );

            if( pagLink.closest( "." + paginationClass ).length && href ){
              $( this )[ pluginName ]( "goTo", parseFloat( href.split( "#" )[ 1 ] ) );
              e.preventDefault();
            }
          } )
          // update pagination on page change
          .bind( "goto." + pluginName, function( e, to  ){

            var index = to ? $( to ).index() : 0;

            $( this ).find( "ol." + paginationClass + " li" )
              .removeClass( activeClass )
              .eq( index )
                .addClass( activeClass );

          } )
          // initialize pagination
          .trigger( "goto." + pluginName );
      }
    };

  // add methods
  $.extend( $.fn[ pluginName ].prototype, paginationMethods );

  // create pagination on create and update
  $( initSelector )
    .live( "create." + pluginName, function(){
      $( this )
        [ pluginName ]( "_createPagination" )
        [ pluginName ]( "_bindPaginationEvents" );
    } )
    .live( "update." + pluginName, function(){
      $( this )[ pluginName ]( "_createPagination" );
    } );

}(jQuery));


/*
 * responsive-carousel autoplay extension
 * https://github.com/filamentgroup/responsive-carousel
 *
 * Copyright (c) 2012 Filament Group, Inc.
 * Licensed under the MIT, GPL licenses.
 */

(function( $, undefined ) {
  var pluginName = "carousel",
    initSelector = "." + pluginName,
    interval = 4000,
    autoPlayMethods = {
      play: function(){
        var $self = $( this ),
          intAttr = $self.attr( "data-interval" ),
          thisInt = parseFloat( intAttr ) || interval;
        return $self.data(
          "timer",
          setInterval( function(){
            $self[ pluginName ]( "next" );
          },
          thisInt )
        );
      },

      stop: function(){
        clearTimeout( $( this ).data( "timer" ) );
      },

      _bindStopListener: function(){
        return $(this).bind( "mousedown", function(){
          $( this )[ pluginName ]( "stop" );
        } );
      },

      _initAutoPlay: function(){
        var autoplay = $( this ).attr( "data-autoplay");
        if( autoplay !== undefined && autoplay !== false ){
          $( this )
            [ pluginName ]( "_bindStopListener" )
            [ pluginName ]( "play" );
        }
      }
    };

  // add methods
  $.extend( $.fn[ pluginName ].prototype, autoPlayMethods );

  // DOM-ready auto-init
  $( initSelector ).live( "create." + pluginName, function(){
    $( this )[ pluginName ]( "_initAutoPlay" );
  } );

}(jQuery));



/*
 * responsive-carousel touch drag transition
 * https://github.com/filamentgroup/responsive-carousel
 *
 * Copyright (c) 2012 Filament Group, Inc.
 * Licensed under the MIT, GPL licenses.
 */

(function($) {

  var pluginName = "carousel",
    initSelector = "." + pluginName,
    activeClass = pluginName + "-active",
    itemClass = pluginName + "-item",
    dragThreshold = function( deltaX ){
      return Math.abs( deltaX ) > 4;
    },
    getActiveSlides = function( $carousel, deltaX ){
      var $from = $carousel.find( "." + pluginName + "-active" ),
        activeNum = $from.prevAll().length + 1,
        forward = deltaX < 0,
        nextNum = activeNum + (forward ? 1 : -1),
        $to = $carousel.find( "." + itemClass ).eq( nextNum - 1 );

      if( !$to.length ){
        $to = $carousel.find( "." + itemClass )[ forward ? "first" : "last" ]();
      }

      return [ $from, $to ];
    };

  // Touch handling
  $( initSelector )
    .live( "dragmove", function( e, data ){

      if( !dragThreshold( data.deltaX ) ){
        return;
      }
      var activeSlides = getActiveSlides( $( this ), data.deltaX );

      activeSlides[ 0 ].css( "left", data.deltaX + "px" );
      activeSlides[ 1 ].css( "left", data.deltaX < 0 ? data.w + data.deltaX + "px" : -data.w + data.deltaX + "px" );
    } )
    .live( "dragend", function( e, data ){
      if( !dragThreshold( data.deltaX ) ){
        return;
      }
      var activeSlides = getActiveSlides( $( this ), data.deltaX ),
        newSlide = Math.abs( data.deltaX ) > 45;

      $( this ).one( navigator.userAgent.indexOf( "AppleWebKit" ) ? "webkitTransitionEnd" : "transitionEnd", function(){
        activeSlides[ 0 ].add( activeSlides[ 1 ] ).css( "left", "" );
      });

      if( newSlide ){
        activeSlides[ 0 ].removeClass( activeClass ).css( "left", data.deltaX > 0 ? data.w  + "px" : -data.w  + "px" );
        activeSlides[ 1 ].addClass( activeClass ).css( "left", 0 );
      }
      else {
        activeSlides[ 0 ].css( "left", 0);
        activeSlides[ 1 ].css( "left", data.deltaX > 0 ? -data.w  + "px" : data.w  + "px" );
      }
    } );

}(jQuery));



/*
 * responsive-carousel touch drag extension
 * https://github.com/filamentgroup/responsive-carousel
 *
 * Copyright (c) 2012 Filament Group, Inc.
 * Licensed under the MIT, GPL licenses.
 */

(function($) {

  var pluginName = "carousel",
    initSelector = "." + pluginName,
    noTrans = pluginName + "-no-transition",
    // UA is needed to determine whether to return true or false during touchmove (only iOS handles true gracefully)
    iOS = /iPhone|iPad|iPod/.test( navigator.platform ) && navigator.userAgent.indexOf( "AppleWebKit" ) > -1,
    touchMethods = {
      _dragBehavior: function(){
        var $self = $( this ),
          origin,
          data = {},
          xPerc,
          yPerc,
          setData = function( e ){

            var touches = e.touches || e.originalEvent.touches,
              $elem = $( e.target ).closest( initSelector );

            if( e.type === "touchstart" ){
              origin = {
                x : touches[ 0 ].pageX,
                y: touches[ 0 ].pageY
              };
            }

            if( touches[ 0 ] && touches[ 0 ].pageX ){
              data.touches = touches;
              data.deltaX = touches[ 0 ].pageX - origin.x;
              data.deltaY = touches[ 0 ].pageY - origin.y;
              data.w = $elem.width();
              data.h = $elem.height();
              data.xPercent = data.deltaX / data.w;
              data.yPercent = data.deltaY / data.h;
              data.srcEvent = e;
            }

          },
          emitEvents = function( e ){
            setData( e );
            $( e.target ).closest( initSelector ).trigger( "drag" + e.type.split( "touch" )[ 1], data );
          };

        $( this )
          .bind( "touchstart", function( e ){
            $( this ).addClass( noTrans );
            emitEvents( e );
          } )
          .bind( "touchmove", function( e ){
            setData( e );
            emitEvents( e );
            if( !iOS ){
              e.preventDefault();
              window.scrollBy( 0, -data.deltaY );
            }
          } )
          .bind( "touchend", function( e ){
            $( this ).removeClass( noTrans );
            emitEvents( e );
          } );


      }
    };

  // add methods
  $.extend( $.fn[ pluginName ].prototype, touchMethods );

  // DOM-ready auto-init
  $( initSelector ).live( "create." + pluginName, function(){
    $( this )[ pluginName ]( "_dragBehavior" );
  } );

}(jQuery));



/*
 * responsive-carousel touch drag transition
 * https://github.com/filamentgroup/responsive-carousel
 *
 * Copyright (c) 2012 Filament Group, Inc.
 * Licensed under the MIT, GPL licenses.
 */

(function($) {

  var pluginName = "carousel",
    initSelector = "." + pluginName,
    activeClass = pluginName + "-active",
    topClass = pluginName + "-top",
    itemClass = pluginName + "-item",
    dragThreshold = function( xPercent ){
      return (xPercent > -1 && xPercent < 0) || (xPercent < 1 && xPercent > 0);
    },
    getActiveSlides = function( $carousel, deltaX ){
      var $from = $carousel.find( "." + pluginName + "-active" ),
        activeNum = $from.prevAll().length + 1,
        forward = deltaX < 0,
        nextNum = activeNum + (forward ? 1 : -1),
        $to = $carousel.find( "." + itemClass ).eq( nextNum - 1 );

      if( !$to.length ){
        $to = $carousel.find( "." + itemClass )[ forward ? "first" : "last" ]();
      }

      return [ $from, $to ];
    };

  // Touch handling
  $( initSelector )
    .live( "dragstart", function( e, data ){
      $( this ).find( "." + topClass ).removeClass( topClass );
    })
    .live( "dragmove", function( e, data ){
      if( !dragThreshold( data.xPercent ) ){
        return;
      }
      var activeSlides = getActiveSlides( $( this ), data.deltaX ),
        degs = data.xPercent * 180,
        halfWay = Math.abs(data.xPercent) > 0.5;

      activeSlides[ 0 ].css( "-webkit-transform", "rotateY("+ degs +"deg)" );
      activeSlides[ 1 ].css( "-webkit-transform", "rotateY("+ ( ( degs > 0 ? -180 : 180 ) + degs ) +"deg)");

      activeSlides[ halfWay ? 1 : 0 ].addClass( topClass );
      activeSlides[ halfWay ? 0 : 1 ].removeClass( topClass );

    } )
    .live( "dragend", function( e, data ){
      if( !dragThreshold( data.xPercent ) ){
        return;
      }
      var activeSlides = getActiveSlides( $( this ), data.deltaX ),
        newSlide = Math.abs( data.xPercent ) > 0.5;

      if( newSlide ){
        activeSlides[ 0 ].removeClass( activeClass );
        activeSlides[ 1 ].addClass( activeClass );
      }
      else {
        activeSlides[ 0 ].addClass( activeClass );
        activeSlides[ 1 ].removeClass( activeClass );
      }

      activeSlides[ 0 ].add( activeSlides[ 1 ] ).removeClass( topClass ).css( "-webkit-transform", "" );

    } );

}(jQuery));
// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
  (function() {
    var noop = function() {};
    var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group',
                   'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd',
                   'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
    var length = methods.length;
    var console = window.console = {};
    while (length--) {
      console[methods[length]] = noop;
    }
  }());
}
;
(function() {
  var exports;

  exports = this;

  $(function() {
    return $(':not(.nofade) > a').hover(function() {
      return $(this).animate({
        opacity: 0.6
      }, 200);
    }, function() {
      return $(this).animate({
        opacity: 1.0
      }, 200);
    });
  });

  $(function() {
    var links, navBannerClick;
    navBannerClick = function(e) {
      var $this, pushHeight, pusher, type;
      e && e.preventDefault();
      $this = $(this);
      type = $this.attr('href').slice(1);
      $('.switched-lists .container > ul:visible').fadeOut(function() {
        return $("#" + type).fadeIn();
      });
      links.parent().removeClass('active');
      $this.parent().addClass('active');
      pusher = $('#ac-sitebar-pusher');
      pushHeight = pusher.length > 0 ? pusher.height() : 0;
      return $(document.body).animate({
        scrollTop: $('#nav-banner').offset().top - pushHeight
      }, 1000);
    };
    (links = $('#nav-banner a')).on('click', navBannerClick);
    $('#navigation a[href="/#features"]').on('click', function(e) {
      var goto;
      if (goto = $('#nav-banner [href=#current-features]')) {
        navBannerClick.call($('#nav-banner [href=#current-features]')[0]);
        return false;
      }
    });
    return $('#navigation a:first').on('click', function(e) {
      var goto, pushHeight, pusher;
      if (goto = $('#tryit')) {
        pusher = $('#ac-sitebar-pusher');
        pushHeight = pusher.length > 0 ? pusher.height() : 0;
        $(document.body).animate({
          scrollTop: goto.offset().top - pushHeight
        }, 1000);
        return false;
      }
    });
  });

  $(function() {
    return $('#content-body h1 button').click(function() {
      if ($('aside').is(':visible')) {
        return $('aside').hide();
      } else {
        return $('aside').show();
      }
    });
  });

  $(function() {
    return $('.fancybox').fancybox({
      helpers: {
        title: {
          type: 'inside'
        }
      },
      beforeLoad: function() {
        return this.title = $(this.element).find('img').attr('title');
      }
    });
  });

  $(function() {
    return $('body.home header > .carousel').carousel();
  });

  $(function() {
    var images;
    if ((images = $('body.blog section.posts article img')).length > 0) {
      images.wrap(function() {
        return "<a href='" + ($(this).attr('src')) + "' class='fancybox' />";
      });
    }
    if ((images = $("body.blog section.posts article img[align='left']")).length > 0) {
      images.css('margin', '20px 25px 15px 0');
    }
    return $('body.blog section.posts article pre > code').addClass('lang-javascript');
  });

  $(function() {
    var $tree, doc_events;
    if (($tree = $('#tree')).length > 0) {
      doc_events = function() {
        var images, videos;
        if ((images = $('body.docs article :not(a)>img')).length > 0) {
          images.wrap(function() {
            return "<a href='" + ($(this).attr('src')) + "' class='fancybox' />";
          });
        }
        $('body.docs article pre > code').addClass('lang-javascript');
        if ((videos = $("body.docs article a[href*='youtube']")).length > 0) {
          return videos.addClass('fancybox fancybox.iframe');
        }
      };
      doc_events();
      $('#full-screen').on('click', function() {
        if ($('body').hasClass('full-screen')) {
          return $('body').removeClass('full-screen');
        } else {
          $('body').addClass('full-screen');
          $tree = $('body.docs.full-screen > .container aside #tree');
          return $tree.height($(window).height() - $tree.offset().top - 20);
        }
      });
      $tree.find('div>span').on('click', function() {
        return $(this).parent().parent().toggleClass('expanded');
      });
      $tree.find('a').on('click', function() {
        var li;
        $tree.find('li').removeClass('checked').find('a').css('color', '#999');
        li = $(this).parent().find('>span').length > 0 ? $(this).parent().parent() : $(this).parent();
        li.addClass('checked');
        li.parents('li').addClass('checked');
        return li.find('li a').css('color', '#3E3E3E');
      });
      expandTreeWithPath();
      return $(document).on('page:change', function() {
        expandTreeWithPath();
        doc_events();
        return Rainbow.color();
      });
    }
  });

  exports.expandTreeWithPath = function(path) {
    var li, selected;
    if (path == null) {
      path = document.location.pathname;
    }
    path = path.replace(/\/$/, '') + "/";
    if ((selected = $("#tree a[href='" + path + "']")).length > 0) {
      $('#tree li').removeClass('checked').find('a').css('color', '#999');
      if (selected.parent().find('>span').length > 0) {
        li = selected.parent().parent();
      } else {
        li = selected.parent();
      }
      li.addClass('checked');
      li.parents('li').addClass('checked');
      return li.find('li a').css('color', '#3E3E3E');
    }
  };

}).call(this);
