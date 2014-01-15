/*!
 * jQuery Cookie Plugin v1.3
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
!function(e,t,n){function i(e){return e}function a(e){return decodeURIComponent(e.replace(r," "))}var r=/\+/g,o=e.cookie=function(r,l,s){if(l!==n){if(s=e.extend({},o.defaults,s),null===l&&(s.expires=-1),"number"==typeof s.expires){var c=s.expires,d=s.expires=new Date;d.setDate(d.getDate()+c)}return l=o.json?JSON.stringify(l):String(l),t.cookie=[encodeURIComponent(r),"=",o.raw?l:encodeURIComponent(l),s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("")}for(var u=o.raw?i:a,f=t.cookie.split("; "),p=0,h=f.length;h>p;p++){var y=f[p].split("=");if(u(y.shift())===r){var g=u(y.join("="));return o.json?JSON.parse(g):g}}return null};o.defaults={},e.removeCookie=function(t,n){return null!==e.cookie(t)?(e.cookie(t,null,n),!0):!1}}(jQuery,document);