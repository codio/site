---
title: Github and other remotes
class_name: docs
full_width: true
---

Most people will want to push to Github and other remote repos. There are various ways to manage this within Codio.

##I have a remote repo
If your starting point is a remote repo, then you should create a new project from the Codio dashboard. Create Project is an option above your project listings.

You should select the Import/Clone from Github option. This will then create your Codio project by cloning the remote repo you specify and that remote repo will automatically be logged within that project.

##I do not yet have a remote repo
If you have code within Codio and you want to configure it to synchronize with a remote repo, then you should to the following

1. Create a new, empty repo on Github or other provider
2. Within the IDE, go to Tools->Git->Remotes 
3. Specify the URL of the Github repo you have just created in the dialog

![git overview](/img/docs/git-remotes.png)

If you prefer, you can use the command line interface to achieve the same thing using `git remote`. Please check the [supported commands page](/docs/git/supported) for details.

Once you have set up your remotes, you can now perform sharing and updating commands (push, pull etc.) from Codio's git command line.
