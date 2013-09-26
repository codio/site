/*!
 * jQuery Cookie Plugin v1.3
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
!function(e,t,n){function i(e){return e}function r(e){return decodeURIComponent(e.replace(a," "))}var a=/\+/g,o=e.cookie=function(a,s,c){if(s!==n){if(c=e.extend({},o.defaults,c),null===s&&(c.expires=-1),"number"==typeof c.expires){var l=c.expires,u=c.expires=new Date;u.setDate(u.getDate()+l)}return s=o.json?JSON.stringify(s):String(s),t.cookie=[encodeURIComponent(a),"=",o.raw?s:encodeURIComponent(s),c.expires?"; expires="+c.expires.toUTCString():"",c.path?"; path="+c.path:"",c.domain?"; domain="+c.domain:"",c.secure?"; secure":""].join("")}for(var d=o.raw?i:r,f=t.cookie.split("; "),p=0,h=f.length;h>p;p++){var g=f[p].split("=");if(d(g.shift())===a){var m=d(g.join("="));return o.json?JSON.parse(m):m}}return null};o.defaults={},e.removeCookie=function(t,n){return null!==e.cookie(t)?(e.cookie(t,null,n),!0):!1}}(jQuery,document);