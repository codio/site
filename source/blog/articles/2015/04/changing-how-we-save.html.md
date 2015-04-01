---
title: Changing How we Save in Codio
author: Joel Moss
date: 2015-04-01
tags: 'Lab & Updates'
class_name: blog
full_width: true
---

**This week we shipped an important but subtle change to the way Codio saves changes to your files.**

Up until now, you had two ways of saving; Auto and Manual. Saving automatically was and still is the default mode, while Manual save was a simple option you could turn on and off at any time.

Way back when Codio was just a baby, we only had Auto Save. Saving automatically is a huge time saver in terms of productivity, simply because you do not have to take any action to save your changes. This works great for most use cases, however it soon became apparent that in some use cases, Auto save was creating more problems than it solved, so we introduced Manual Save.

One example of this, is when you use any kind of automatic reload. There are tools that can watch your files for changes, and then automatically reload the preview, thus avoiding the need for you to manually reload the page you made changes to. This is great, but quickly becomes unusable while using auto save. This is because Auto save applies changes to the file on every key stroke, which in this case, would mean that your preview would be reloaded on each of those keystrokes.

There were also other issues with Auto Save that were rare, but potentially nasty, and Manual save had its own set of challenges internally.

So a few weeks ago, we sat down to figure out a real and permanent solution to all the issues you face and the technical challenges we face with saving in Codio. This week we shipped that change!

There are a couple of important things you should be aware of...

First, we dramatically changed how Auto save works. In particular, *when* it saves. Instead of saving back to the file system on every keystroke like we were doing before, now Codio only saves when it needs to, and is much more intelligent about that. The main thing you need to be aware of, is that losing focus on a file will save any changes back to the file system. There are other occasions when Codio saves, but this is the main one, and as you can imagine, is much more efficient.

You can still save manually using the `Ctrl+S|Cmd+S` keyboard shortcut, which most of you should be familiar with, but you don't need to.

The second thing to be aware of, is that Manual Saving is no longer an option. This is because auto save is now much more careful about when it saves. And this means that the reasons for Manual Save are no longer applicable, and therefore it is not needed.

We believe that these changes will truly improve your day-to-day experience using Codio, and also addresses several stability concerns.

Questions? Let me know in the comments below, or in the [forums](http://forum.codio.com).