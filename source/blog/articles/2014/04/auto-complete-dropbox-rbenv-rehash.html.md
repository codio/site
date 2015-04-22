---
title: Automatic Auto-Complete, Dropbox & rbenv Rehash
author: Joel Moss
date: 2014-04-02
tags: 'Product News'
class_name: blog
full_width: true
---

A couple more goodies have been shipped this week...

## Automatic Auto-Complete

No that's not a typo. Codio has had auto-complete for a while now, but this would only appear by manually hitting the hot key (`Cmd-Space`). We got lots of you asking to remove that unnecessary step. So we did just that. Just type away and we will automatically show you matches for what you are typing. These matches are currently taken from the document that you are editing, but plans are in the works to make this much more intelligent and project-wide.

If you don't like your auto-complete auto-completing, just set the preference `automatic_completions = false`.

![](blog/auto-complete.png)

## Dropbox Syncing

Another feature that we've been asked for, is support for syncing your code with your Dropbox account. This is actually a lot harder than it sounds, and is frought with plenty of troublesome edge cases. But thanks to [Codio Box Parts](https://codio.com/docs/boxes/box-parts/) - our built-in package manager - syncing with Dropbox is now easy!

```bash
$ parts install dropbox
```

While we have made this possible and easy, there are still a few warnings to heed. We strongly advise that you read the [docs on the Dropbox Box Part](/docs/specifics/dropbox).

## rbenv Rehash

All Codio Boxes come with [rbenv](https://github.com/sstephenson/rbenv) pre-installed to allow you to use any Ruby version you wish. But there is a little gotcha when installing Ruby Gems under rbenv. If you install a Gem that includes a binary, that binary will not available in your path. To make this available, you have to run `rbenv rehash` which will tell rbenv to reload all installed binaries and make them available in your path.

This morning we pushed out an update which now does this automatically for you. So you now no longer need to run `rbenv rehash`. Just Gem install and you're off!
