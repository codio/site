---
title: Very basic Git tutorial
class_name: docs
full_width: true
---

This is not supposed to be a proper Git tutorial in any sense. Its purpose is to show anyone who is new to Git or Codio how to use it to get all the basic things done.

For a proper, in-depth overview of Git, refer to the [resources](/docs/git/resources) page.

Please make sure you read this excellent overview if you are new to Git : [http://git-scm.com/book/en/Getting-Started-Git-Basics](http://git-scm.com/book/en/Getting-Started-Git-Basics)

##GitHub Keys
If you're using GitHub, it is recommended that you use the SSH remote url rather than HTTPS. In order to do this, however, you should first make sure that your Codio public key is loaded into your GitHub account or repo settings. This whole process is [described here](/docs/settings-prefs/account-settings/public-key).

##Experimentation
The best way to learn Git is to create a really simple project with a few text files in it and then experiment like crazy. You can play around with all the Git commands and sync with GitHub repos to your heart's content without worrying about doing any coding.

Once you have done this for a while, you will feel a lot more comfortable about using Git for your precious code.

##Your project's starting point

###You created a project by importing from a Git repo
If you have code that already exists in a remote repo, say GitHub, then you should create a new project by importing from that repo. That will automatically load the project and set up the correct association with the remote Git repo.

Creating a project is [fully described here](/docs/console/creating/).

###I do not yet have a remote repo
If you have code within Codio and you want to create a brand new GitHub (or other remote) repo, then follow these steps.

1. Create a new project in Codio or open up an existing one.
1. Create a new, empty repo on GitHub or other provider.
1. Copy the repo url to the clipboard. If you're using GitHub, use the SSH url rather than https and you should make sure that your Codio public key is loaded into your GitHub account or repo settings as [described here](/docs/settings-prefs/account-settings/public-key)
![github repo](/img/docs/github-new-repo.png)
1. Within the IDE, go to `Tools > Git > Remotes`
1. It is recommended you use `origin` as the name to confirm the normal standards. You do not need to specify a username or password if you are using SSH.
1. Paste the remote url into the URL field.
![git overview](/img/docs/git-remotes.png)

##Check the status with 'git status'
Whenever you want to see what the Git status of your project is enter `git status`. Initially, you will see that there is nothing to report

```bash
$ git status
# On branch master nothing to commit, working directory clean
```

##Tracking files
Codio uses Git by default and if you import a project from a Git repo, all the existing files will already be 'tracked' (explained in the next section). Any new files you add will need to be tracked using a Git command.

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

To tell GitHub to track the file, you can do one of the following

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


##Reverting
One of the nice things you can do is to revert your code back to an earlier commit. `git revert` is the command for rolling back like this. There are a number of ways to use this, simple uses are

- `git revert 'commit id'` reverts back to the SHA (uid) you can see when you type `git log`
- `git revert HEAD` will revert back to the last commit, throwing away any uncommitted changes
- `git revert HEAD~n` for example HEAD~3 will revert to the 4rd last commit.
- `git revert HEAD^^^` (count of ^ is like ~n) will also revert back to the 4th last commit

There are more advanced usages which you should read up on such as the `-n`. Try [looking here](http://git-scm.com/docs/git-revert.html).


##Pushing to a remote repository
If you want to send your committed changes to a remote repository, you will use the `git push` command. First, however, you need to make sure that you have a `remote` set up.

If you created your repository by importing from a Git repo, then the remote will have automatically been created.

If you want to create a new remote repository, then you will have already done this as described at the top of this page.

So all you need to do is enter `git push origin master'. Let's dissect this command

- `origin` is the name of the remote repo. In most cases, this will be called origin, but is not necessarily so.
- `master` is the name of the branch. When you create a new Codio project, a `master` branch is automatically created and appears in brackets at the top of the file tree next to the project name. Branches are beyond the scope of this topic but they are definitely worth investigating as they are a very powerful feature of Git.


If you now go to GitHub and look at the repository, you will see that your changes are pushed. You can also see the commits you made.

##Pulling from a remote repository
Now let's say that someone else is working remotely on the same code (let's assume they are not using Codio). They will push their code to the GitHub repo, too.

By running `git pull origin master`, we pull in changes from the remote repo and Git will automatically merge them.

##Resolving Conflicts
When you pull in from the remote, you may get a conflict warning. This will happen if someone else has modified code in a way that Git cannot automatically resolve, usually because you have been editing the same bit of code.

When this happens, you will need to resolve the conflict. If you open up the file, you will see something like this

	<<<<<<< HEAD:index.html
	<div id="footer">contact : email.support@github.com</div>
	=======
	<div id="footer">
	  please contact us at support@github.com
	</div>
	>>>>>>> iss53:index.html

You simply need to remove the code block that you want to dispose of. The top block is your code and the bottom comes from the code being merged. If you want to keep your code, you will want to end up with

	<div id="footer">contact : email.support@github.com</div>

if you want the merged code to remain, it will be

	<div id="footer">
	  please contact us at support@github.com
	</div>

To minimize conflicts, you should 1. Commit little and often and 2. Pull from the remote master often.

##Branches
Branches are important and worth mastering at an early stage. When you create a branch, you are creating a new area to code within. You then `merge` another branch, usually the `master` branch, into your new branch. From this point on, you can do whatever you want (add, commit, push etc) without impacting on the `master` branch on any other branch for that matter.

For a full overview on branching, please [read this](http://git-scm.com/book/en/Git-Branching-What-a-Branch-Is)

The commands you will need to master are

- `git branch` - creates a new branch
- `git checkout` - switches to that branch (be careful about doing this without committing the branch you are leaving as any unstaged files will be lost)
- `git merge from-branch` - merges code from `from-branch` into your current branch

Good practice is to switch over to your master branch and pull in changes from the remote (if you're using one). Then switch back to your working branch and merge in changes. Doing this ensures that conflicts are kept to a minimum.


