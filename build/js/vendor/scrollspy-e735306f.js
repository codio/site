/* =============================================================
 * bootstrap-scrollspy.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#scrollspy
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================== */
!function(e){"use strict";function t(t,i){var a,l=e.proxy(this.process,this),n=e(t).is("body")?e(window):e(t);this.options=e.extend({},e.fn.scrollspy.defaults,i),this.$scrollElement=n.on("scroll.scroll-spy.data-api",l),this.selector=(this.options.target||(a=e(t).attr("href"))&&a.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=e("body"),this.refresh(),this.process()}t.prototype={constructor:t,refresh:function(){var t,i=this;this.offsets=e([]),this.targets=e([]),t=this.$body.find(this.selector).map(function(){var t=e(this),a=t.data("target")||t.attr("href"),l=/^#\w/.test(a)&&e(a);return l&&l.length&&[[l.position().top+(!e.isWindow(i.$scrollElement.get(0))&&i.$scrollElement.scrollTop()),a]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){i.offsets.push(this[0]),i.targets.push(this[1])})},process:function(){var e,t=this.$scrollElement.scrollTop()+this.options.offset,i=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,a=i-this.$scrollElement.height(),l=this.offsets,n=this.targets,r=this.activeTarget;if(t>=a)return r!=(e=n.last()[0])&&this.activate(e);for(e=l.length;e--;)r!=n[e]&&t>=l[e]&&(!l[e+1]||t<=l[e+1])&&this.activate(n[e])},activate:function(t){var i,a;this.activeTarget=t,e(this.selector).parent(".active").removeClass("active"),a=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',i=e(a).parent("li").addClass("active"),i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate")}};var i=e.fn.scrollspy;e.fn.scrollspy=function(i){return this.each(function(){var a=e(this),l=a.data("scrollspy"),n="object"==typeof i&&i;l||a.data("scrollspy",l=new t(this,n)),"string"==typeof i&&l[i]()})},e.fn.scrollspy.Constructor=t,e.fn.scrollspy.defaults={offset:10},e.fn.scrollspy.noConflict=function(){return e.fn.scrollspy=i,this},e(window).on("load",function(){e('[data-spy="scroll"]').each(function(){var t=e(this);t.scrollspy(t.data())})})}(window.jQuery);