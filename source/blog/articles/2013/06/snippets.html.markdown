---
title: Snippets Released
author: Freddy May
date: 2013-06-01
tags: changelog
class_name: blog
full_width: true
---

Hot on the heels of Inline Preview comes support for Textmate style Snippets.

Snippets are a great way of reducing typing by entering shorthand code, pressing the tab key and then seeing the shorthand expand into the longhand.

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

We've made it very easy to review and search for snippets by including it right in the IDE.

![snippets](/img/blog/snippets.png)

Find out more by [reading the documentation](/docs/ide/emmet/snippets/).


