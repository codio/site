/*!
 * jQuery Cookie Plugin v1.3
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
!function(e,t,l){function i(e){return e}function a(e){return decodeURIComponent(e.replace(n," "))}var n=/\+/g,r=e.cookie=function(n,d,o){if(d!==l){if(o=e.extend({},r.defaults,o),null===d&&(o.expires=-1),"number"==typeof o.expires){var s=o.expires,y=o.expires=new Date;y.setDate(y.getDate()+s)}return d=r.json?JSON.stringify(d):String(d),t.cookie=[encodeURIComponent(n),"=",r.raw?d:encodeURIComponent(d),o.expires?"; expires="+o.expires.toUTCString():"",o.path?"; path="+o.path:"",o.domain?"; domain="+o.domain:"",o.secure?"; secure":""].join("")}for(var b=r.raw?i:a,c=t.cookie.split("; "),u=0,f=c.length;f>u;u++){var p=c[u].split("=");if(b(p.shift())===n){var h=b(p.join("="));return r.json?JSON.parse(h):h}}return null};r.defaults={},e.removeCookie=function(t,l){return null!==e.cookie(t)?(e.cookie(t,null,l),!0):!1}}(jQuery,document);