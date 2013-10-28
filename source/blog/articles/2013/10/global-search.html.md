---
title: Global Search and Replace
author: Freddy May
date: 2013-10-28
tags: Changelog
class_name: blog
full_width: true
---

One big omission from Codio so far has been powerful global search and replace functionality. Well, we've corrected this now.

![global search dialog](/img/docs/global-search.png)

###Globs and pattern matching
As well as being able to search on simple strings across the entire project, you can use glob pattern matching (and fully described in the [documentation](/docs/ide/code-editor/search-replace)).

The above image shows how you can look for matches of the word `step` in all `js` files across the whole project.

Or, you could look for all files ending in `.html` or `.coffee` in just the `lib` folder

  `lib/*{.html,.coffee}`

###Matches
Once the search operation has completed you will see all files listed in a Codio tab. You can double click on the highlighted match to open up that file in a tab.

![global search dialog](/img/docs/search-matches.png)

###Quick Open
If you want to look for and open files without searching within the files themselves, then you should at the [Quick Open](/docs/ide/ide-general/quick-open/) feature. This lets you very quickly locate files without having to use the file tree.

###We've open sourced some stuff
In doing this, we decided to open source the back-end search capabilities. SnR is a Node application and uses `ack` and `perl`.

[View it on GitHub](https://github.com/codio/snr)



