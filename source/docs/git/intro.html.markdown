---
title: Important points
class_name: docs
full_width: true
---

##Git inside Codio and Outside
Codio has implemented Git on our servers. This means you can use Git out of the box. There is nothing special to setup (no SSH keys or special authentication). All Git activities take place on our servers.

However, you can also work with external Git platforms such as Github, simply by setting up a remote. If you created your Codio project by cloning a Github repo then your remote will be automatically created. Please refer to the [Github and other remotes](/docs/git/remotes/) section for details. 

If you are using Github, then you will need to setup your SSH keys properly. This is [described here](/docs/settings-prefs/account-settings/public-key/).


##Real Time Collaboration
Codio allows collaborative editing and so, provided permissions have been granted, it is possible for users to be working on the exact same code as another user. Not another branch, but the exact same files.

This can lead to certain conflicts and so for regular development the best approach is to follow standard collaborative development practices.


##Collaborative Development
Generally speaking, it is strongly recommended that where several developers are all working on the same codebase, each developer works in their own branch. We recommend that 2 or more developers working on the same branch should be used only for pair-programming, code discussions or on static projects where only very occasional changes are made.

This recommended approach is anyway standard practice for collaborative development.

##We implement a subset of Git
In order to give the majority of users then best possible experience, we do not run a dedicated virtual machine per user. We will soon be offering very flexible ways for users to have projects stored on a very wide variety of cloud or remote servers so those who want  a full git implementation will be able to have this.

Our Git support, however, is pretty comprehensive. We already support all the commonly used commands and we are adding new ones all the time. If you want us to add more commands or parameters for existing commands, just [contact us](/docs) and we'll get them added.

All supported Git commands are listed in the [Supported Commands](/docs/git/supported) section and we also indicate which commands are next up for inclusion in the [Coming Soon](/docs/git/coming) section.

##Unstaged changes are **not** carried over when you switch branch
On a local development machine, when you switch branch, any unstaged changes will automatically appear in your new branch. Codio does not do this and you will receive a warning to that effect if there are any unstaged changes.

Unstaged changes will be present when you switch back to the branch.

