---
title: Autocomplete
class_name: docs
full_width: true
---

Autocomplete is supported within HTML, CSS and Javascript files and is (by default) activated by pressing ctrl+space.

##HTML Tags
Auto complete is context sensitive, so you will only be shown Tags that are relevant to your location within the HTML file.

For example, if you are not within `<body></body>`, you will see a much reduced set of options in the auto complete popup. However, place your cursor inside the `<body></body>` tags and you will see the full list of standard HTML tags.

##HTML Attribtues
If you have entered `<a `, then invoke auto complete, you are presented with a list of relevant attributes for the `<a>` tag.

##Javascript
Javascript support currently is intelligent enough to display global objects and objects displayed within the current js file you are editing. 

We will soon be delivering a full TernJS implementation that will deliver much more elaborate support.

##CSS
Use ctrl+space within your CSS to invoke auto complete.