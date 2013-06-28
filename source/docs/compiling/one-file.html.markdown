---
title: Compiled output for any file
class_name: docs
full_width: true
---

##Preview 
If you want to take a quick look at the compiled output for a file, just right-click it in the file tree and select Preview.

Next, expand the Inline Preview window into its own browser tab by pressing the icon on the top right. What you'll see is the uncompiled file initially. For a CoffeeScript file, you'll see something like this in the URL

	https://codio.io/yourUserName/CompilingExample/app/example.coffee

and the CoffeeScript is shown in the browser tab, for example

	@square = (x) -> x * x
	@cube   = (x) -> square(x) * x

##Add the extension
Now, just add the extension appropriate to the compiled output (we've added `.js` in below, but you'd add `.css` if it was Less/Sass/SCSS or `.txt` for Markdown)

	https://codio.io/yourUserName/CompilingExample/app/example.coffee.js	

and you'll see

	(function() {
	  this.square = function(x) {
	    return x * x;
	  };
	  this.cube = function(x) {
	    return square(x) * x;
	  };
	}).call(this);

