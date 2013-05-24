---
title: Emmet support added for hi-speed HTML and CSS coding
author: Freddy May
date: 2013-05-24
tags: new feature
class_name: blog
full_width: true
---

We have just added Emmet support for a whole range of features that really boost productivity when working with HTML and CSS. These features include expanding abbreviations into full HTML or CSS as well as some very powerful keyboard shortcuts.

Be sure to check out the [Codio documentation](/docs/ide/emmet/).

Here's a short video of it in action in the Codio IDE.

  <a href="http://www.youtube.com/v/suFLTxYDJz8?autoplay=1" class="fancybox fancybox.iframe" id="video">
    <img src="//i3.ytimg.com/vi/suFLTxYDJz8/mqdefault.jpg">
  </a>

##Basic Example
Let's say you want to generate the following HTML

	<div>
	    <ul>
	        <li></li>
	        <li></li>
	        <li></li>
	    </ul>
	</div>

Just type the following and press tab

	div>ul>li*3


##Juicier Example
This is more involved but shows how you can generate pretty well anything once you understand its simple language.

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

And here is what you enter (then press tab)

	#page>div.logo+ul#navigation>li*5>a{Item $}

##CSS Example
There's CSS support, too.

`w100p` results in `width: 100%`
`m10p30e5x` results in `margin: 10% 30em 5ex`

and how about this for gradients

	lg(left, #fc0, 30%, red)

result in

	background-image: -webkit-gradient(linear, 0 0, 100% 0, from(#fc0), color-stop(0.5, 30%), to(red));
	background-image: -webkit-linear-gradient(left, #fc0, 30%, red);
	background-image: -moz-linear-gradient(left, #fc0, 30%, red);
	background-image: -o-linear-gradient(left, #fc0, 30%, red);
	background-image: linear-gradient(left, #fc0, 30%, red);


##Lorem Ipsum
There are other things you can do as well, like generating standard text

	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis expedita numquam suscipit hic molestias tenetur neque facilis et aliquam consectetur sapiente aperiam non recusandae ad minima quod saepe laborum tempora.

Just use 

	lorem

##Power Keyboard Shortcuts
As well as abbreviations, we also offer some really powerful productivity features behind kayboard shortcuts. 

- Matching tag pairs
- Jump to matching tag
- Wrap HTML with anotehr abbreviation
- Traverse between important editing points
- Selects important editing blocks and then traverses to the next one
- Add remove comment toggle for the current line or block
- Remove the current tag and its closing tag and adjust indentation
- Merge selected lines into a single line
- Add width and height properties to an img tag
- Inline calculator that lets you enter arithmetic formulae and then press tab to perform the calculation
- Increment and decrement CSS values by 0.1, 1 and 10

Check out the [Codio documentation](/docs/ide/emmet/) for an overview.

