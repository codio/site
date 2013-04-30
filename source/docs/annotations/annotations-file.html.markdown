---
title: Annotating project files
class_name: docs
full_width: true
---

When in Explore Mode, the viewer can also explore the structure of the project. This can be very useful for more complex projects. Below is an example tree structure with some blue icons that can be clicked on in Default and Explore modes to show the popup annotations window.

![file annotations](/img/docs/ca-files.png)

Just add  `@annotation:file` into `annotations.codio`

	@annotation:file impress/README.md

Note that you must specify the root application name in the file path (in this case, the application name is 'impress').

Here is an example that adds a file annotation. Folders work too.

	@annotation:file impress/README.md
	#The readme.md file
	The `readme.md` file is a great place to place a large intro to the project as a whole. It displays as soon as the project is loaded and you can provide clear instructions to the user.

