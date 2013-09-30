---
title: Multiple Panels, New Editor, Git, Custom keybindings &amp; Preferences
author: Joel Moss
date: 2013-09-23
tags: Changelog
class_name: blog
full_width: true
---

Last week was the culmination of several months of hard graft by the entire Codio team, and is the start of the next phase of our path to global domination! We released a plethora of new and improved features that we think are exciting and - in some cases - ground-breaking.

[Watch the all new intro video](//player.vimeo.com/video/74220594?autoplay=1&hd=1), and then allow me to summarise all that is new and shiny...

## Multi-Panel Layouts

Codio is now the *only* browser based IDE to boast full support for [multi-panel layouts](/#panels). You can customise the layout of Codio into almost any arrangement of panels and tabs, in both a vertical and horizontal manner. Edit a file in one panel, while previewing it in another panel right alongside it; or use one of the predefined layouts as a great way to demo your code.

The introduction of multiple panels, also brings with it a new change to the way you access almost anything in Codio. Everything is opened within a tab! This makes the UI much more unobtrusive, and takes multi-tasking to a whole new level - Bower in one tab, code in one, Deployment in the other, etc. etc.

## All New Editor

Codio was originally based on the popular [ACE Code Editor](http://ace.c9.io/), and it served us fairly well, But it soon became apparent that it was lacking in a few areas. [CodeMirror](http://codemirror.net/) is the new kid on the block, but has quickly gained momentum. It's code is clean and documented, and has great performance. So we made the highly debated decision to replace ACE with CodeMirror.

Watch this space for some awesome new features and improvements based around the new Editor.

## Git Support

This is been a long time coming... [Codio now supports Git](/#sourcecontrol). This means you can clone, commit, push, pull, branch, merge and a whole load more, right within Codio, and without ever leaving the IDE. We created a simple command line interface (CLI) that is opened in a new tab, and accepts the most common Git commands. So everything you do in Codio now sits on top of Git. Of course, you don't have to use Git at all, but if you do, just commit away to your hearts content.

## Custom Keybindings

This release signals the beginning of our efforts to make Codio the most customisable and extendible browser-based IDE around. We know how much developers like their keyboard shortcuts, because they can improve and speed coding and development hugely. We've introduced a load of new keyboard shortcuts to Codio. But not only that, we've also made almost every one of them customisable.

This is available as part of the new preferences system (mentioned below), and is extremely simple to use. Just redefine any keybinding with the keyboard combination of your choice.

## New Preferences System

We've completely rebuilt the way you customise Codio. Almost everything that you can customise is now done via an INI based text file, which you can access via your dashboard and IDE. We show you our defaults, and allow you to simply redefine any of these with the value of your choice. It even applies your changes as you type.

## Sharing Your Code

And finally, we added a new menu item to allow you to quickly and easily [share your projects and code with the world](/share-your-code). Accessed from `Project > Share...` menu item, it will give you a few images you can use to place on your site or Github README, which will link back to your Codio project.

We also provide a URL that contains the precise panel and tab layout of your project. This is a great way to share your project exactly as you see it, as it will maintain your current layout, and even the files you have open.

---

We'll be blogging in more detail over the next few weeks about each of the above, so watch this space and follow us [@CodioHQ](https://twitter.com/CodioHQ). In the meantime, head on over to the updated [homepage](/) and [docs](/docs).