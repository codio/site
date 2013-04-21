---
title: Embedding a complete tutorial IDE in a page
class_name: docs
full_width: true
---

If you have a web page (a blog post, for example) with a good amount of available width, you can very easily embed the complete Codio IDE within it using an `<iframe>`.

This is a great approach if you want to keep everything within your page and illustrate code examples. You can see this action a little way down on the [codio.com homepage](http://codio.com).

![codio hp](/img/docs/ca-embed-ide.png)

Below is some sample HTML showing the Impress project in the fmay account being loaded with the impress.js file opened by default.

    <iframe src="https://codio.com/fmay/Impress/tree/Impress/js/impress.js" width="100%" height="500" frameborder="0" marginheight="20" marginwidth="35" scrolling="auto"></iframe>

To make sure the embedded IDE is loaded at the right place, there are a number of options.
	
##Open in Tour or Explore mode
You can open the IDE with your project running in Tour or Explore mode by specifying the url as described in the [Auto-starting from a URL](/docs/annotations/auto-start) page.

##Open a specific file
Go the a specific file within the Codio IDE and then copy and paste the url into the `<iframe>` element.

