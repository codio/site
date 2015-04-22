---
title: The Journey from Mercurial to Git
author: Friedel Ziegelmayer
date: 2013-06-10
tags: 'Product News'
class_name: blog
full_width: true
---


## The Problem
*In which we see all the issues that come with great version control.*

As [already mentioned in the last post](/blog/2013/06/moving-from-mercurial-to-git/) we are using Mercurial right now but want to switch to Git. So the question in the room was how to convert a large Mercurial repository to Git, without losing any history and converting the named Mercurial branches to Git branches.

There were a few tools that I tried, mainly [fast-export] and [Kiln].

The first one was fast-export and the main problem was that after I got it installed it always crashed with some cryptic errors. Some of them could be resolved as explained in this [post](http://www.mehdi-khalili.com/migrating-from-mercurial-to-git). But even then after fixing these there were more errors, so I eventually gave up.

The next one was [Kiln], a service that claims to allow you to work on a single repository using Git *and* Mercurial. After setting up an account and waiting forty minutes to push from the command line, I was excited to see what happened, but was pretty bummed to see that the repo was completely empty in the web interface. After the command line, I tried their importer, which took about the same amount of time again only to give me just a partial history in the web interface. After this I was quite fed up with Kiln and moved on.


## The Meeting

*In which we meet a creature much more powerful than we had ever imagined.*

I was about to give up my search when I found [Gitifyhg]. [Gitifyhg] is not intended as a way of converting Mercurial repositories to Git, but rather to give people who have to work on those, an easy way
to interact with them using Git.

> This git remote allows you to do local development in a git repository and push changes to an upstream mercurial repository. It does this seamlessly and allows pushing and pulling to named branches in the upstream repository.

But because it needs to be able to do much more, e.g. converting back and forth from Mercurial to Git, it is able to do exactly what we need: convert a complete Mercurial repository into a Git repository without losing any history or a single branch.


## The Great Conversion

*In which Mercurial branches become Git branches.*

### The Installation

As we're already using Mercurial, Python is set up and hopefully `pip` or `easy_install`. If this is the case then installation is as simple as typing:

    $ pip install gitifyhg
    # or
    $ easy_install gitifyhg

For more information on installation procedures check out the [readme](https://github.com/buchuki/gitifyhg#install).


### The Ceremony

Now that gitifyhg is installed we can harness its powers by simply cloning a Mercurial repository with this command:

    $ git clone gitifyhg::<mercurial repository>

One thing to note here, is that the easiest way - for conversion at least - is to clone a local repository instead of one that is on a server. The main issue here is that I couldn't figure out how to sign in to [Bitbucket] using this approach.

When this command has finished running the conversion is finished. What we now need to do is set up remote tracking branches for all our git branches so we can check them out. This is easy enough for a single branch by doing:

    $ git --track <name of the remote branch>

But if you have many branches and want to add them all at once we can use the power of the shell to do it:

    $ for remote in `git branch -r `; do git branch --track $remote; done

We can now take a look at all our Mercurial branches in Git:

    $ git branch -r
      origin/HEAD -> origin/master
      origin/branches/#7345_tabs_reopening
      origin/branches/#7528_context-no-longer-needed
      origin/branches/#7610_md5_cache
      origin/branches/#7633_file_tree_icons
      origin/branches/#7663_deployment_UI
      origin/branches/#7777_sharejs
      origin/branches/#7797_first_app_selection
      origin/branches/#7800_ace_themes
      origin/branches/#7897_annotations_menuitem_visibility
      origin/branches/#7973_preview_hotkeys
      origin/branches/#7981_tour_closing
      origin/branches/#8011_inline_preview
      origin/branches/#8013_shortcuts
      origin/branches/#8062_error_on_init_during_close
      origin/branches/#8128_css_color_preview
      origin/branches/#8130_emmet_hotkeys


### The Cleaning

Gitifyhg uses the convention `master = default` for the main branch and `<git branch name> = branches/<mercurial branch name>` for all other branches. We don't want this. Instead we want to rename our local branches so that the prefix `branches/` is removed. This is easily done by doing:

    $ git branch -m <old name> <new name>

So we can rename those branches that we want to keep around and remove those that are not needed anymore by calling:

    $ git branch -D <branch name>


## The Epilogue

Now that we've converted the repository itself, the real work begins. We need to change our development cycle around version control and educate everyone about how to use Git in a safe and productive way. Even if these two are similar there is still a lot to learn and the raw power of Git can sometimes be a little bit scary, but personally I much prefer having all the power rather than jumping through hoops all the time.

[fast-export]: https://github.com/frej/fast-export
[Kiln]: http://www.fogcreek.com/kiln/
[Hg-Git]: http://hg-git.github.io/
[gitifyhg]: https://github.com/buchuki/gitifyhg
[Bitbucket]: https://bitbucket.org/
