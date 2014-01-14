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
!function(e){"use strict";function t(t,n){var i,o=e.proxy(this.process,this),a=e(t).is("body")?e(window):e(t);this.options=e.extend({},e.fn.scrollspy.defaults,n),this.$scrollElement=a.on("scroll.scroll-spy.data-api",o),this.selector=(this.options.target||(i=e(t).attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=e("body"),this.refresh(),this.process()}t.prototype={constructor:t,refresh:function(){var t,n=this;this.offsets=e([]),this.targets=e([]),t=this.$body.find(this.selector).map(function(){var t=e(this),i=t.data("target")||t.attr("href"),o=/^#\w/.test(i)&&e(i);return o&&o.length&&[[o.position().top+(!e.isWindow(n.$scrollElement.get(0))&&n.$scrollElement.scrollTop()),i]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){n.offsets.push(this[0]),n.targets.push(this[1])})},process:function(){var e,t=this.$scrollElement.scrollTop()+this.options.offset,n=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,i=n-this.$scrollElement.height(),o=this.offsets,a=this.targets,r=this.activeTarget;if(t>=i)return r!=(e=a.last()[0])&&this.activate(e);for(e=o.length;e--;)r!=a[e]&&t>=o[e]&&(!o[e+1]||t<=o[e+1])&&this.activate(a[e])},activate:function(t){var n,i;this.activeTarget=t,e(this.selector).parent(".active").removeClass("active"),i=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',n=e(i).parent("li").addClass("active"),n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate")}};var n=e.fn.scrollspy;e.fn.scrollspy=function(n){return this.each(function(){var i=e(this),o=i.data("scrollspy"),a="object"==typeof n&&n;o||i.data("scrollspy",o=new t(this,a)),"string"==typeof n&&o[n]()})},e.fn.scrollspy.Constructor=t,e.fn.scrollspy.defaults={offset:10},e.fn.scrollspy.noConflict=function(){return e.fn.scrollspy=n,this},e(window).on("load",function(){e('[data-spy="scroll"]').each(function(){var t=e(this);t.scrollspy(t.data())})})}(window.jQuery);