---
title: Global Search and Replace
author: Freddy May
date: 2013-11-11
tags: 'Product News'
class_name: blog
full_width: true
---

One big omission from Codio so far has been powerful search and replace functionality across your entire project. We've had search and replace in files, but up until now it's not been possible to search across all files within your project. Well, we've corrected this now.

![global search dialog](blog/global-search.png)

###Globs and pattern matching
As well as being able to search on simple strings across the entire project, you can use [glob pattern matching](/docs/ide/code-editor/search-replace).

The above image shows how you can look for matches of the word `step` in all `js` files across the whole project. Or, you could look for all files ending in `.html` or `.coffee` in just the `lib` folder:

  `lib/*{.html,.coffee}`

###Matches
Once the search operation has completed, you will see all files listed in a Codio tab. Simply double click on the highlighted match to open up that file in a new tab.

![global search dialog](blog/search-matches.png)

###We've open sourced some stuff
In doing this, we decided to [open source the back-end](/blog/2013/11/snr/) search capabilities. SnR is a Node application and uses `ack` and `perl` to provide a powerful way to search within code.