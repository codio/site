---
title: Git and a Tease of what is to Come!
author: Joel Moss
date: 2013-12-09
tags: 'Lab & Updates'
class_name: blog
full_width: true
image: blog/full-stack.jpg
---

This morning we rolled out a large and quite a significant change to the underlying infrastructure of Codio. For most of you, you won't notice anything different, but it is worth mentioning to you what we changed, how this may affect you, and why we did it.

## A Little Background...

Codio is quite a unique beast from your familiar desktop based IDE, and the reason for that is down to the open and collaborative nature of the web.

A desktop IDE is designed to be used in a single-user environment. You open a project and code away without any other users seeing what you are doing, or being able to affect what you are doing. Until you pull or push via source control, you are working in isolation.

A browser-based IDE like Codio is almost the complete opposite of the above, especially for public projects. A public project is open and readable by anyone, at any time. You could be coding away while several others are reading your code, and if those other users have write access, they will also be editing code. This is great for open source, as it allows a level of collaboration not previously possible on the desktop.

But this introduces some unique challenges for us, especially in the way Git is used. Git is not designed for a multi-user environment. Committing, branching, merging; these are all actions that you run in isolation, safely away from your collaborators. Only when you push, pull or work with remotes do you start to interact with others.

We initially built in Git support for Codio based on a system of multiple working copies. This meant that each branch used a separate working copy or set of files, and allowed you to work on any branch without affecting or being affected by others. This worked great, but meant we had to wrap some Git commands to allow them to work with these multiple working copies, and that meant we couldn't provide full Git support without considerable work.

## So what changed?

We came to a realization that we probably over-thought this issue a little, and perhaps even created problems that were not real-word problems in the first place. We listened to you telling us you wanted access to all your favourite Git commands and options. So this morning we removed multiple working copies, and changed all projects to use Git in the way it was designed to be used.

## How does this affect me?

Right now, probably very little. But it is important to know one simple thing... that now all Git commands will affect all users equally.

For example, when you checkout a different branch, others on that project will also be switched to use that branch. Which is actually what you would expect to happen anyway.

The important thing here, is that Git now works in a way that you are familiar with, and will allow us to provide full Git support.

## Why have you done this?

This leads me on to the juicy part of this post, and the tease...

Codio is awesome when working on front-end development, but we recognise that when it comes to server-side development, there are a few hoops you have to jump through. We always knew that this would be the case, and that we would need to build out a solution for working on server-side dev. So now that time has come, and this Git change is the first step toward the goal of full-stack development using Codio.

Early next year, you will be able to use Codio to build almost any kind of project, from the simplest static site, to the complex; and using almost any language you wish, including NodeJS, PHP, Python and Ruby. Every single Codio project will have its own full-stack development environment in the cloud, meaning that all you need is your browser and Codio!

And once that is in place, the entire Git tool-set will be available without ever having to leave Codio. You will be able to use Git the way you want, and without any restrictions.

Enjoy!