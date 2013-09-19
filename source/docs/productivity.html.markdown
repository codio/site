---
title: Productivity Features
class_name: docs
full_width: true
---

We realize that productivity is a non-negotiable requirement of any Web IDE. We have and will continue to work extremely hard to add productivity related features to Codio. 

Feel free to let us know what productivity related features you feel are missing by emailing us at support@codio.com or tweet to [@codiohq](https://twitter.com/intent/tweet?source=webclient&text=Hey @CodioHQ, add this ...).

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

[Read all about Emmet functionality](/docs/emmet)


###Auto Complete
Auto Complete is currently supported and is activated (by default) using ctrl+space. [Click here](/docs/autocomplete) for details on supported capabilities ahead of the full Tern implementation, which is described below.


###Tern
Coming in 2013, Tern is a stand-alone code-analysis engine for JavaScript. It greatly enhances the editor's support for intelligent JavaScript editing. Features provided are:

- Auto completion on variables and properties
- Function argument hints
- Querying the type of an expression
- Finding the definition of something
- Automatic refactoring

There is a simple demo of Tern functionality [here](http://ternjs.net/doc/demo.html) on the Tern site.
