---
title: Important points
class_name: docs
full_width: true
---

Codio's Git implementation is pretty standard but there are some important things to note. Codio is a Cloud based system and we do not use virtual machines for each project (although we will soon have an excellent solution to those who want a dedicated cloud server).

We also allow collaborative editing and so, provided permissions have been granted, it is possible for users to be working on the exact same code as another user. Not another branch, but the exact same files.

##Collaborative Development
Generally speaking, it is strongly recommended that where several developers are all working on the same codebase, each developer works in their own branch. We recommend that 2 or more developers working on the same branch should be used only for pair-programming, code discussions or on static projects where only very occasional changes are made.

This recommended approach is anyway standard practice for collaborative development.

##We implement a subset of Git
In order to give the majority of users then best possible experience, we do not run a dedicated virtual machine per user. We will soon be offering very flexible ways for users to have projects stored on a very wide variety of cloud or remote servers so those who want  a full git implementation will be able to have this.

Our Git support, however, is pretty comprehensive. We already support all the commonly used commands and we are adding new ones all the time. If you want us to add more commands or parameters for existing commands, just [contact us](/docs) and we'll get them added.

All supported Git commands are listed in the [Supported Commands](/docs/git/supported) sectio and we also indicate which commands are next up for inclusion in the [Coming Soon](/docs/git/coming) section.

##Unstaged changes are **not** get carried over when you switch branch
On a local development machine, when you switch branch, any unstaged changes will automatically appear in your new branch. Codio does not do this and you will receive a warning to that effect if there are any unstaged changes.

However, unstaged changes will be present when you switch back to the branch.

