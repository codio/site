/*!
 * jQuery Cookie Plugin v1.3
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
!function(e,t,i){function n(e){return e}function a(e){return decodeURIComponent(e.replace(r," "))}var r=/\+/g,o=e.cookie=function(r,l,s){if(l!==i){if(s=e.extend({},o.defaults,s),null===l&&(s.expires=-1),"number"==typeof s.expires){var d=s.expires,c=s.expires=new Date;c.setDate(c.getDate()+d)}return l=o.json?JSON.stringify(l):String(l),t.cookie=[encodeURIComponent(r),"=",o.raw?l:encodeURIComponent(l),s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("")}for(var u=o.raw?n:a,f=t.cookie.split("; "),p=0,h=f.length;h>p;p++){var y=f[p].split("=");if(u(y.shift())===r){var b=u(y.join("="));return o.json?JSON.parse(b):b}}return null};o.defaults={},e.removeCookie=function(t,i){return null!==e.cookie(t)?(e.cookie(t,null,i),!0):!1}}(jQuery,document);