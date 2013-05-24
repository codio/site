---
title: "CSS Abbreviations"
class_name: docs
full_width: true
---

This is a way of generating HTML using a CSS selector inspired approach. Take a look at the following examples. In each case you should press the TAB key to generate the output. 

CSS abbreviations will only work in a CSS file.


##Examples

`w100p` results in `width: 100%`
`m10p30e5x` results in `margin: 10% 30em 5ex`

and 

	p100+m10e

results in

	padding: 100px;
	margin: 10em;	

and how about this for gradients

	lg(left, #fc0, 30%, red)

results in

	background-image: -webkit-gradient(linear, 0 0, 100% 0, from(#fc0), color-stop(0.5, 30%), to(red));
	background-image: -webkit-linear-gradient(left, #fc0, 30%, red);
	background-image: -moz-linear-gradient(left, #fc0, 30%, red);
	background-image: -o-linear-gradient(left, #fc0, 30%, red);
	background-image: linear-gradient(left, #fc0, 30%, red);

##Fuzzy Search
If you take a look at [cheat sheet](/docs/ide/emmet/emmet-ref/), you’ll find that there are too many CSS snippets to remember. Also, some of them might be a bit lengthy for sake of logical separation.

To make CSS writing a bit easier, Emmet implements fuzzy search logic for CSS snippets: every time you enter an unknown abbreviation, Emmet will try to find the closest snippet definition.

For example, instead of writing ov:h (overflow: hidden;) abbreviation, you can write ov-h, ovh or even oh. You can play around with the fuzzy search in text editor below. Try to find as many variations as possible (use Tab key to expand abbreviations) for bxz:cb, ovx:h and pos:a snippets.

##More Examples
For more details on CSS abbreviations, please go to the [Emmet documentation](http://docs.emmet.io/css-abbreviations/) and be sure to look at the sub-chapters.

But also be sure to check out the [cheat sheet](/docs/ide/emmet/emmet-ref/).