---
title: Adding annotations to source files
class_name: docs
full_width: true
---

To add an annotation to any file, you need to insert a pair of tokens (opening and closing) into any file. You will typically insert it as a comment. If you only want to highlight the line following the token, then you do not need a closing tag.

You place your @codio token above the start of the snippet as follows (this would be the syntax for Javascript, C, C++ etc. due to the `//`).

	// @codio:tour token-name


and immediately below the code snippet

	// @codio:/tour token-name

You then update******** your `codio.annotations` file with content that describes the code snippet.

#Tours
Tour Tokens denotes a code snippet annotated and appearing in a Codio Tour. A tour snippet will also appear in Explore Mode.

Below is an example of a code snippet within an HTML source file.

	<!-- @codio:tour intro-comment1-->
	<div id="bored" class="step slide" data-x="-1000" data-y="-1500">
	    <q>Aren't you just <b>bored</b> with all those slides-based presentations?</q>
	</div>
	<!-- @codio:/tour intro-comment1-->    

#Tour items that do not show any code
You will often want to include some tour explanations, usually as an introduction, that do not point to any code. In this case, you insert this in the annotations.codio file without any matching source file token.

Refer to the Annotations File************ topic for details.

#Referencing and displaying code snippets from any web page
Codio will soon be introducing a Javascript widget that lets you display code snippets from your Codio project directly within any web page. You can reference any @codio token from this widget, including @codio:tour snippets.

In some casesm though, you may want to reference a snippet that you do not want to be a prt of a tour. In this case, you use the `@codio:snippet` token.

An advantage of embedding code snippets in this way as opposed to copy and poasting your code is that if you change the source project in any way, so the snippet being displayed in your web page will be updated automatically.

	<!-- @codio:snippet intro-comment1-->
	<div id="bored" class="step slide" data-x="-1000" data-y="-1500">
	    <q>Aren't you just <b>bored</b> with all those slides-based presentations?</q>
	</div>
	<!-- @codio:/snippet intro-comment1-->    


#Explore Mode
All snippets, whether `tour` or `snippet` are available in Explore******** mode. 



