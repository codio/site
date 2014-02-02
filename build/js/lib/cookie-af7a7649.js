/*!
 * jQuery Cookie Plugin v1.3
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
!function(e,t,i){function a(e){return e}function n(e){return decodeURIComponent(e.replace(l," "))}var l=/\+/g,r=e.cookie=function(l,o,s){if(o!==i){if(s=e.extend({},r.defaults,s),null===o&&(s.expires=-1),"number"==typeof s.expires){var d=s.expires,c=s.expires=new Date;c.setDate(c.getDate()+d)}return o=r.json?JSON.stringify(o):String(o),t.cookie=[encodeURIComponent(l),"=",r.raw?o:encodeURIComponent(o),s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("")}for(var u=r.raw?a:n,f=t.cookie.split("; "),y=0,p=f.length;p>y;y++){var b=f[y].split("=");if(u(b.shift())===l){var h=u(b.join("="));return r.json?JSON.parse(h):h}}return null};r.defaults={},e.removeCookie=function(t,i){return null!==e.cookie(t)?(e.cookie(t,null,i),!0):!1}}(jQuery,document);