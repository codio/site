---
title: "Textmate like Snippets"
class_name: docs
full_width: true
---

Snippets are a great way of reducing typing by entering shorthand code, pressing **shift+tab** and then seeing the shorthand expand into the longhand.

For example in an HTML file ...

`iframe` then shift+tab, expands

	<iframe src="" frameborder="0"></iframe>

In a CSS file ...

`bdi` then shift+tab, expands to 

    -webkit-border-image: url();
    -moz-border-image: url();
    -o-border-image: url();

In a JS file ...

`for` then shift+tab expands to 

	for (var i = 0; i < Things.length; i++) {
	    Things[i]
	}

##Expanding and collapsing the Snippets helper
To show/hide a list of all snippets, click on the Snippets panel at the bottom of the file tree pane. It will then expand so you can see a few snippets. You can drag the panel divider to give you more room.

![snippet closed](/img/docs/snippets-closed.png)

Each snippet can be expanded by clicking on it so you see what lurks behind it.

![snippet open](/img/docs/snippets-open.png)

##Searching
You can also search for the longhand text by entering text into the search box. You will be shown matches based on a match with the longhand result, not the snippet shorthand.

##Tabbing between parameters
Some snippets have multiple parameters that can be quickly tabbed between to save even more editing time. In the example below you will see how you can first change `i`. then `things` and finally the loop body. Play with it - it is easier tried than explained.

![snippet parms](/img/docs/snippet-parms.png)



