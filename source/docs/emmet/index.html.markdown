---
title: "Productivity Shortcuts"
class_name: docs
full_width: true
---

We have implemented lots of productivity shortcuts into the Codio IDE thanks to [Emmet](http://www.emmet.io). These features let you saves considerable time when working with HTML, CSS and Javascript files.

##Standard Code Editor Keyboard Shortcuts
General code editor shortcuts can be [found here](/docs/ide/code-editor/kb-shortcuts/). All other productivty shortcuts are found in this chapter.

##Emmet Keyboard Shortcuts
An set of powerful [productivity shortcuts](/docs/emmet/emmet-actions) for HTML5, CSS and Javascript.

##Abbreviations
Thanks to our Emmet support, you get a large number of [HTML and CSS abbreviations](/docs/emmet/emmet-abbreviations/) that expand to code, a bit like this

	div>ul>li*3

which expands to 

	<div>
	    <ul>
	        <li></li>
	        <li></li>
	        <li></li>
	    </ul>
	</div>

Be sure to check out the [complete reference](/docs/emmet/emmet-ref/) as there are an awful lot of abbreviations for you to take advantage of.


##Snippet Support
[Snippets](/docs/emmet/snippets/) save you lots of typing and often save you having to look up detailed syntax for HTML, CSS and Javascript. You type abbreviated commands directly in the editor then, when you press the tab key, they expand into full HTML and CSS.

	for

then tab expands to 

	for (var i = 0; i < Things.length; i++) {
	    Things[i]
	}

