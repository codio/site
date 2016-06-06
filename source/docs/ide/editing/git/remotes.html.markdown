---
title: GitHub and other remotes
class_name: docs
full_width: true
---

Most people will want to push to Github and other remote repos. There are various ways to manage this within Codio.

##Remotes and Github
To work with Github, you need to set up your SSH keys properly as [described here](/docs/account/publickey).

##I have a remote repo
If your starting point is a remote repo, then you should create a new project from the Codio dashboard. Create Project is an option above your project listings.

You should select the Git tab and enter in the ssh url. This will then create your Codio project by cloning the remote repo you specify and that remote repo will automatically be logged within that project.

##I do not yet have a remote repo
If you have code within Codio and you want to configure it to synchronize with a remote repo, then you should to the following

1. Create a new, empty repo on Github or other provider. 
2. Copy the repo url to the clipboard. If you're using Github, then use the SSH url rather than https.
2. Within the IDE, go to Tools->Git->Remotes
3. Complete the dialog as shown below. It is recommended you use `origin` as the name to confirm the normal standards. You do not need to specify a username or password if you are using SSH. 

![git overview](/img/docs/git-remotes.png)

If you prefer, you can use the command line interface to achieve the same thing using `git remote`.

Once you have set up your remotes, you can now perform sharing and updating commands (push, pull etc.) from Codio's git command line.

Try pushing your code to the remote using `git push --set-upstream origin master`. From now on you can use simply `git push` as the set-upstream command ensure `origin master` is used by default.

##Simplified Git Steps
We will not attempt any sort of tutorial here, but the following steps cover the absolute basics of Git usage with a remote. If you are new to Git, then you should refer to the [resources page](/docs/ide/editing/git/resources).

- `git status` gives you the status of your current branch
- `git add .` adds all files, tracked or not, to the staged files
- `git commit -a -m` stages and commits all files to the snapshot
- The first time you push, run the following command to track the new remote `git push --set-upstream origin master`
- Subsequent pushes can be done with `git push`, which pushes all committed changes of the `master` branch to the tracked remote (origin).


