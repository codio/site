---
title: Selective File Deployment
author: Freddy May
date: 2013-11-21
tags: Changelog
class_name: blog
full_width: true
---

Although we like to push RSYNC as the fastest way of working with Codio, there are many users who want to work with hosting providers that only provide FTP access.

As a result, we have added a new feature that lets you choose what files or folders to deploy.

There are two ways to deploy selectively

- select any files or folders in the file tree and then right-click and select the Deploy option
- right click in the tab above the file you are editing and do the same.

![specific files](/img/blog/deploy-specific.png)

Because Codio is cloud based and your target FTP server probably is, too, this deployment will be very fast, so developing like this is perfectly possible.

