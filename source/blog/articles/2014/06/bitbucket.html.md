---
title: BitBucket Integration
author: Freddy May
date: 2014-06-16
tags: Changelog
class_name: blog
full_width: true
published: false
---

We are very pleased to announce a special type of integration with Atlassian's BitBucket. If you want see rather than read, then take a [look at this video]() that shows it in action.

##BitBucket vs. GitHub
Everyone knows that GitHub is the clear leader in the world of Open Source but what you may not know is that for corporate development, BitBucket is the market leader. The main reason for this is that [BitBucket's pricing](https://bitbucket.org/plans) is far more attractive for private repos than [GitHub pricing](https://github.com/pricing).

##Integration Details
We've added BitBucket authentication for Codio users, but the really sweet thing about this integration is what BitBucket have done at their end.

In BitBucket, a user can browse repos and immediately press a button to launch that repo in the Codio Web IDE. No git commands, just a single button press.

If the user has already done this before then that's it. As you can see from the video below, the project is loaded and the user can start editing the Codio immediately. If the user has not done this before then there a couple of quick steps to get the user account set up before the code is opened up.

##Other goodies
Once your repo is in Codio, we automatically provision your Git (or Mercurial) repo so that it is ready to work with. You can modify your code and then simply push it back to your BitBucket repo. So yes, you've got an instant code editor (and much more as I explain below) at your disposal that only needs a browser with nothing to install.

##Nothing to pay
Codio has now modified its pricing to accomodate the private nature of most BitBucket repos. This means that BitBucket users who have never used Codio before don't have to pay anything. Beyond one free private repo, a Codio subscription is required but this is only $8 for unlimited private repos.

##Much more than an online code editor
Anyone new to Codio should note that Codio is much more than an online code editor. Each and every project gets its own 'Box', which is an Ubuntu server and is automatically (and nearly instantly) spun up. A Box comes with Node, Ruby, Python, C and Java preinstalled but thanks for [Codio Box Parts](/docs/boxes/box-parts), you can install and configure other components with a single command.

