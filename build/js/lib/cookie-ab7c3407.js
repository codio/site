/*!
 * jQuery Cookie Plugin v1.3
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
!function(e,t,i){function n(e){return e}function a(e){return decodeURIComponent(e.replace(r," "))}var r=/\+/g,l=e.cookie=function(r,o,s){if(o!==i){if(s=e.extend({},l.defaults,s),null===o&&(s.expires=-1),"number"==typeof s.expires){var d=s.expires,c=s.expires=new Date;c.setDate(c.getDate()+d)}return o=l.json?JSON.stringify(o):String(o),t.cookie=[encodeURIComponent(r),"=",l.raw?o:encodeURIComponent(o),s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("")}for(var u=l.raw?n:a,f=t.cookie.split("; "),p=0,y=f.length;y>p;p++){var h=f[p].split("=");if(u(h.shift())===r){var b=u(h.join("="));return l.json?JSON.parse(b):b}}return null};l.defaults={},e.removeCookie=function(t,i){return null!==e.cookie(t)?(e.cookie(t,null,i),!0):!1}}(jQuery,document);