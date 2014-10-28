---
title: Overview
class_name: docs
full_width: true
---

The approach is really simple. Take a look at the project shown below (click to enlarge).

![](/img/docs/compiled-files.png)

You can see we have an index.html that is using 'Less' for styling and calls the `square()` CoffeeScript function.

##Referencing compiled files
Codio makes it really easy to get things working as long as you reference the files in the correct way.


In our example, we have a .less file and a .coffee file. These must be referenced like this 

	<link rel="stylesheet" href="style.less.css">
	<script src="example.coffee.js"></script>

... in other words, we have to append the appropriate extension

- `.css` in the case of Less, SCSS and Sass
- `.js` for CoffeeScript

That's all you have to do. Codio takes care of the compilation for you.

##Try it out with Preview
To try this out, just press the Preview button and you'll see that everything works straight away. There's nothing to compile, it gets done automatically for you by Codio.
