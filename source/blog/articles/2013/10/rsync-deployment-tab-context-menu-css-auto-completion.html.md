---
title: Rsync Deployment, Tab Context Menu &amp; CSS Auto-Completion
author: Joel Moss
date: 2013-10-10
tags: Changelog
class_name: blog
full_width: true
---

## Rsync Deployment

Earlier this week, we added yet another option to our deployment feature, but one that we think will really make a difference when developing in Codio. You can now deploy to almost any server via Rsync, which makes it even faster to get your code from Codio and onto your development environment, or even into production. And because it is Rsync, it will selectively deploy *only* your changes, making it even faster.

We want to make it easier and faster to write and deploy your code, and we're still working to take that even further, but for now you can write code, and get it onto your development environment extremely quickly via the new Rsync deployment option.

## Tab Context Menu

![Tab Context Menu](blog/tab-context-menu.png) You can now right click any tab and get a new context menu. This menu will allow you to quickly do the following:

- Close the current file
- Close all other files
- Close all files
- Close files to the right
- Close files to the left

And of course, these have keyboard shortcuts which you can customise via your [user preferences](https://codio.com/s/docs/settings-prefs/codio-prefs/).

## ![CSS Auto Completion](blog/css-auto-complete.png) CSS Auto-Completion

And finally, we just shipped support for auto-completion in CSS code.

Start typing any CSS rule name and hit your auto-complete keyboard shortcut (`Ctrl+Space`), and you'll be shown a list of all matching CSS rules. Scroll through the list for the one you want, hit `tab`, and it will be auto-completed for you.


<style>
  img[alt="Tab Context Menu"],
  img[alt="CSS Auto Completion"] {
    float:left;
    margin-right:50px;
    margin-bottom:20px;
  }
</style>
