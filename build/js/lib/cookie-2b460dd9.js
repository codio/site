/*!
 * jQuery Cookie Plugin v1.3
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
!function(e,t,n){function i(e){return e}function r(e){return decodeURIComponent(e.replace(a," "))}var a=/\+/g,o=e.cookie=function(a,s,l){if(s!==n){if(l=e.extend({},o.defaults,l),null===s&&(l.expires=-1),"number"==typeof l.expires){var c=l.expires,d=l.expires=new Date;d.setDate(d.getDate()+c)}return s=o.json?JSON.stringify(s):String(s),t.cookie=[encodeURIComponent(a),"=",o.raw?s:encodeURIComponent(s),l.expires?"; expires="+l.expires.toUTCString():"",l.path?"; path="+l.path:"",l.domain?"; domain="+l.domain:"",l.secure?"; secure":""].join("")}for(var u=o.raw?i:r,f=t.cookie.split("; "),p=0,h=f.length;h>p;p++){var g=f[p].split("=");if(u(g.shift())===a){var m=u(g.join("="));return o.json?JSON.parse(m):m}}return null};o.defaults={},e.removeCookie=function(t,n){return null!==e.cookie(t)?(e.cookie(t,null,n),!0):!1}}(jQuery,document);