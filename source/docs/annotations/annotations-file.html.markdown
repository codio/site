---
title: Annotating project files
class_name: docs
full_width: true
---

If there are file annotations present, the viewer can explore the structure of the project. This can be very useful for more complex projects. Below is an example tree structure with some blue icons that can be clicked on in Default and Explore modes to show the popup annotations window.

![file annotations](/img/docs/ca-files.png)

Just add  `@annotation:file` into `annotations.md`

	@annotation:file README.md


Here is an example that adds a file annotation. Folders work too.

	@annotation:file README.md
	#The readme.md file
	The `readme.md` file is a great place to place a large intro to the project as a whole. It displays as soon as the project is loaded and you can provide clear instructions to the user.

