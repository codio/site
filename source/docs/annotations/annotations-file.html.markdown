---
title: The Annotations file
class_name: docs
full_width: true
---

The `annotations.codio` file is where you write your annotations. Each token in a source file expects to find a matching token in the `annotations.codio` file.

The annotations are written in Markdown format. Click here******* for an overview of markdown syntax.

#Tour Mode
If you want to set up a guided tour of your project, then the order in which your annotations are listed within the `annotations.codio` file determines the order that the tour items are displayed. You can also include tour items that do not point to code snippets.

The following example shows a tour token with a very short piece of annotation copy.

	@codio:tour fallback
	For example this fallback message is only visible when there is `impress-not-supported` class on body.

When you enter tour mode, which you can do manually******** and automatically*******, the `annotations.codio` file is examined by Codio and each tour item is displayed in a popup window. You can then navigate backwards and forwards using the arrow buttons.

[The annotations popup screenshot]*******

#Explore Mode
If you want the viewer to be able to view an annotation relating to a specific file in the project of a section of code and you do not want that annotation to appear within the tour, then you should use the `@codio:snippet' token rather then `@codio:tour'.

These tokens are explained in more detail in the [Adding annotations to source files]()********* topic.

#Collapsing the annotation content
When the annotation popup appears, you will often find that the popup window covers the code snippet being highlighted. 

In this situation, the viewer can collapse the actual content up into the header by clicking on the minimize icon in the top right of the window and then click again to expand it.

![collapsing annotations]()**********

#Exploring the Project File Structure
When in Explore Mode, the viewer can also explore the structure of the project. This can be very useful for more complex projects.

To add an annotation for a file, you would use the following syntax

	@codio:file /css/impress-demo.css

with your actual markdown annotation immediately below.
