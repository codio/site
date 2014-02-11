/*!
 * jQuery Cookie Plugin v1.3
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
!function(e,t,i){function l(e){return e}function a(e){return decodeURIComponent(e.replace(n," "))}var n=/\+/g,r=e.cookie=function(n,o,d){if(o!==i){if(d=e.extend({},r.defaults,d),null===o&&(d.expires=-1),"number"==typeof d.expires){var s=d.expires,c=d.expires=new Date;c.setDate(c.getDate()+s)}return o=r.json?JSON.stringify(o):String(o),t.cookie=[encodeURIComponent(n),"=",r.raw?o:encodeURIComponent(o),d.expires?"; expires="+d.expires.toUTCString():"",d.path?"; path="+d.path:"",d.domain?"; domain="+d.domain:"",d.secure?"; secure":""].join("")}for(var y=r.raw?l:a,b=t.cookie.split("; "),u=0,p=b.length;p>u;u++){var f=b[u].split("=");if(y(f.shift())===n){var h=y(f.join("="));return r.json?JSON.parse(h):h}}return null};r.defaults={},e.removeCookie=function(t,i){return null!==e.cookie(t)?(e.cookie(t,null,i),!0):!1}}(jQuery,document);