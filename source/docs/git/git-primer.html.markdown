---
title: Very basic Git tutorial
class_name: docs
full_width: true
---

This is not supposed to be a proper Git tutorial in any sense. Its purpose is to show anyone who is new to Git or Codio how to use it to get all the basic things done.

For a proper, in-depth overview of Git, refer to the [resources](/docs/git/resources) page.

##Your project's starting point

###You created a project by importing from a Git repo
If you have code that already exists in a remote repo, say GitHub, then you should create a new project by importing from that repo. That will automatically load the project and set up the correct association with the remote Git repo. 

Create Project is [fully described here](/docs/console/creating/).

If you're using GitHub, it is recommended that you use the SSH remote url rather than HTTPS. In order to do this, however, you should first make sure that your Codio public key is loaded into your GitHub account or repo settings. This whole process is [described here](/docs/settings-prefs/account-settings/public-key).

###I do not yet have a remote repo
If you have code within Codio and you want to create a brand new Github (or other remote) repo, then follow these steps.

1. Create a new project in Codio or open up an existing one.
1. Create a new, empty repo on Github or other provider. 
1. Copy the repo url to the clipboard. If you're using Github, use the SSH url rather than https and you should make sure that your Codio public key is loaded into your GitHub account or repo settings as [described here](/docs/settings-prefs/account-settings/public-key)
TODO GitHub images for SSH copy
1. Within the IDE, go to Tools->Git->Remotes
1. It is recommended you use `origin` as the name to confirm the normal standards. You do not need to specify a username or password if you are using SSH. 
1. Paste the remote url into the URL field.

![git overview](/img/docs/git-remotes.png)

##Check the status with 'git status'
Whenever you want to see what the Git status of your project is enter 

  `git status'

Initially, you will see that there is nothing to report

	# On branch master nothing to commit, working directory clean

##Tracking files
Codio uses Git by default and when if you import a project from a Git repo, all the existing files will be already 'tracked' (explained in the next section). Any new files you add will  need to be tracked using a Git command.

Tracking means that Git knows about them. If you add a new file, Git will not know about it and needs to be explicitly told.

1. Add a new file (`test.txt`) and add a few random characters to it.
1. Open any other existing file (I chose humans.txt) and make a small, harmless change to it.
1. Run `git status` again and you should see 

		# On branch master `
		# Changes not staged for commit:`
		# (use "git add ..." to update what will be committed) 
		# (use "git checkout -- ..." to discard changes in working directory) 
		# 
		#	modified: humans.txt 
		# 
		# Untracked files: 
		# (use "git add ..." to include in what will be committed) 
		# 
		#	test.txt no changes added to commit (use "git add" and/or "git commit -a")

This shows you the modified and the new (untracked) files.

To tell Github to track the file, you can do one of the following

- `git add .` which tells Git to track all files in the project that are not yet tracked. This is the quickest and simplest way to track any new files.
- `git add FILENAME` explicitly tracks a single file

##Staged Files
A staged file is one that is tracked and is ready to commit into the repository. Once you run `git add` you are tracking and staging that file. But if you modify a tracked file, the modifications are not staged. To correctly stage them, you need to rerun `git add`.

##Committing your changes
Committing means that you want to add your staged, files into the repository. There are two ways to do this...

- `git commit -m 'commit message'` will take all staged files and commit them to the repo. 
- `git commit -a -m 'commit message'` will do the same but the `-a` switch tells Git to automatically stage any tracked files before committing them. This means that you don't have to use `git add` at all (unless you want to add new, untracked files).

The commit message is important as it allows you to see what general changes were involved in the commit. This can be useful when you want to look back a few days later and no longer remember what was in the commit.

So I entered `git commit -a -m "added test.txt and modified some stuff"` and get

	[master d3e6bb1] added test.txt and modified some stuff 
	2 files changed, 2 insertions(+) 
	create mode 100644 test.txt`

and if I run a `git status` afterwards, I will see that everything is clean and up-to-date.

	# On branch master nothing to commit, working directory clean


TODO reverting back

##Pushing to a remote repository
If you want to send your committed changes to a remote repository, you will use the `git push` command. First, however, you need to make sure that you have a `remote` set up.

If you created your repository by importing from a Git repo, then the remote will have automatically been created. 

If you want to create a new remote repository, then you will have already done this as described at the top of this page.

So all you need to do is enter `git push origin master'. Let's dissect this command

- `origin` is the name of the remote repo. In most cases, this will be called origin, but is not necessarily so. 
- `master` is the name of the branch. When you create a new Codio project, a `master` branch is automatically created and appears in brackets at the top of the file tree next to the project name. Branches are beyond the scope of this topic but they are definitely worth investigating as they are a very powerful feature of Git.







