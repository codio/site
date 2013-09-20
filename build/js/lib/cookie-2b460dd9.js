/*!
 * jQuery Cookie Plugin v1.3
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
!function(e,t,n){function i(e){return e}function r(e){return decodeURIComponent(e.replace(o," "))}var o=/\+/g,a=e.cookie=function(o,s,l){if(s!==n){if(l=e.extend({},a.defaults,l),null===s&&(l.expires=-1),"number"==typeof l.expires){var c=l.expires,u=l.expires=new Date;u.setDate(u.getDate()+c)}return s=a.json?JSON.stringify(s):String(s),t.cookie=[encodeURIComponent(o),"=",a.raw?s:encodeURIComponent(s),l.expires?"; expires="+l.expires.toUTCString():"",l.path?"; path="+l.path:"",l.domain?"; domain="+l.domain:"",l.secure?"; secure":""].join("")}for(var d=a.raw?i:r,h=t.cookie.split("; "),p=0,f=h.length;f>p;p++){var m=h[p].split("=");if(d(m.shift())===o){var g=d(m.join("="));return a.json?JSON.parse(g):g}}return null};a.defaults={},e.removeCookie=function(t,n){return null!==e.cookie(t)?(e.cookie(t,null,n),!0):!1}}(jQuery,document);