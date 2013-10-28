/*!
 * jQuery Cookie Plugin v1.3
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
!function(e,t,n){function r(e){return e}function i(e){return decodeURIComponent(e.replace(o," "))}var o=/\+/g,a=e.cookie=function(o,s,c){if(s!==n){if(c=e.extend({},a.defaults,c),null===s&&(c.expires=-1),"number"==typeof c.expires){var l=c.expires,u=c.expires=new Date;u.setDate(u.getDate()+l)}return s=a.json?JSON.stringify(s):String(s),t.cookie=[encodeURIComponent(o),"=",a.raw?s:encodeURIComponent(s),c.expires?"; expires="+c.expires.toUTCString():"",c.path?"; path="+c.path:"",c.domain?"; domain="+c.domain:"",c.secure?"; secure":""].join("")}for(var f=a.raw?r:i,d=t.cookie.split("; "),p=0,h=d.length;h>p;p++){var g=d[p].split("=");if(f(g.shift())===o){var m=f(g.join("="));return a.json?JSON.parse(m):m}}return null};a.defaults={},e.removeCookie=function(t,n){return null!==e.cookie(t)?(e.cookie(t,null,n),!0):!1}}(jQuery,document);