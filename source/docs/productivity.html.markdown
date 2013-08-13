---
title: Productivity Features
class_name: docs
full_width: true
---

We realize that productivity is a non-negotiable requirement of any Web IDE. We have been and will continue to work extremely hard to add productivity related features to Codio. 

Feel free to let us know what productivity related features you feel are missing by emailing us at support@codio.com or tweet to @codiohq.

##Productivity Feature Summary

###Keyboard Shortcuts
This is pretty fundamental to any IDE. We will very soon be introducing fully user-definable shortcuts as well.

[Read all about keyboard shortcuts](/docs/ide/code-editor/kb-shortcuts/)

###Emmet Functionality
Emmet offers a lot of HTML and CSS productivity functionality. You get special navigation features as well as powerful abbreviation->expansion features, which translate very terse commands such as `div>ul>li*5` into expanded HTML like this

	<div>
	    <ul>
	        <li></li>
	        <li></li>
	        <li></li>
	    </ul>
	</div>

[Read all about Emmet functionality](/docs/ide/emmet/)

###Snippets
You may be familiar with Snippets from Textmate. These let you enter abbreviated commands, hit the tab key and then you get a full expansion.

For example in an HTML file ...

`iframe` + tab, expands

	<iframe src="" frameborder="0"></iframe>

In a CSS file ...

`bdi` + tab, expands to 

    -webkit-border-image: url();
    -moz-border-image: url();
    -o-border-image: url();

In a JS file ...

`for` + tab expands to 

	for (var i = 0; i < Things.length; i++) {
	    Things[i]
	}

[Read all about Snippets](/docs/ide/emmet/snippets)

###Autocomplete
Autocomplete will arrive in September, 2013.


###Tern
Coming in September 2013, Tern is a stand-alone code-analysis engine for JavaScript. It greatly enhances the editor's support for intelligent JavaScript editing. Features provided are:

- Autocompletion on variables and properties
- Function argument hints
- Querying the type of an expression
- Finding the definition of something
- Automatic refactoring

There is a simple demo of Tern functionaily [here](http://ternjs.net/doc/demo.html) on the Tern site.
