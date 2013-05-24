---
title: "HTML Abbreviations Examples"
class_name: docs
full_width: true
---

This is a way of generating HTML using a CSS selector inspired approach. Take a look at the following examples. In each case you should press the TAB key to generate the output. 

HTML abbreviations will only work in an HTML file.
##Basic Example

	div>ul>li*3

results in 

	<div>
	    <ul>
	        <li></li>
	        <li></li>
	        <li></li>
	    </ul>
	</div>



##Juicier Example

	#page>div.logo+ul#navigation>li*5>a{Item $}

results in

	<div id="page">
	    <div class="logo"></div>
	    <ul id="navigation">
	        <li><a href="">Item 1</a></li>
	        <li><a href="">Item 2</a></li>
	        <li><a href="">Item 3</a></li>
	        <li><a href="">Item 4</a></li>
	        <li><a href="">Item 5</a></li>
	    </ul>
	</div>

##More Examples
Be sure to check out the [HTML Abbreviations](http://docs.emmet.io/abbreviations/).

And also take a look at the [cheat sheet](/docs/ide/emmet/emmet-ref/) as there are an awful lot of abbreviations for you to take advantage of.

