---
title: "Git Improvements: checkout and revert"
author: Joel Moss
date: 2013-11-12
tags: 'Lab & Updates'
class_name: blog
full_width: true
---

As part of our mission to make working with Git in Codio as natural as working on your desktop, we've added full support for the `checkout` and `revert` commands.

## Improved `checkout`

You have always been able to use the `checkout` command in Codio to switch and create branches, but up until now it's not been possible to use `checkout`'s other uses. Now you can...

`git checkout [<tree-ish>] [--] <pathspec>...`

## Support for `revert`

Revert is almost an complete implementation. Parameters supported:

- `-m|--mainline parent-number`
- `-n|--no-commit`
- `<commit>...`

---

Plenty more to come, but post your wanted git commands and options/flags on the [forum](http://forum.codio.com).