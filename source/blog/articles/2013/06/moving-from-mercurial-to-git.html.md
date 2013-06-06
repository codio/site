---
title: Moving from Mercurial to Git
author: Joel Moss
date: 2013-06-06
tags: development
class_name: blog
full_width: true
---

Since I began with Codio almost a year ago, I've wanted to move to Git - it's what I'm used to and I think it is simply superior to Mercurial. Right now we use Mercurial, and while it is very similar to Git in concept, there are some differences which are starting to hold us back a little. So I made an executive decision to migrate away from Mercurial to Git, and from BitBucket to Github.

This post will attempt to explain the high level differences between Mercurial and Git, and will also compare the commands and workflow of each. It will also explain a few best practises and tips when using Git. Hopefully by the end, you will understand why we're moving.


## What’s the Difference?

Here’s a technical summary of the major differences between Mercurial and Git, taken from an answer to [this StackOverlow question](http://stackoverflow.com/questions/1598759/git-and-mercurial-compare-and-contrast):

 - **Repository structure**: Mercurial doesn’t allow octopus merges (with more than two parents), nor tagging non-commit objects.
 - **Tags**: Mercurial uses versioned `.hgtags` file with special rules for per-repository tags, and has also support for local tags in `.hg/localtags`; in Git, tags are refs residing in `refs/tags/namespace`, and by default are auto-followed on fetching and require explicit pushing.
 - **Branches**: In Mercurial basic workflow is based on anonymous heads; Git uses lightweight named branches, and has special kind of branches (remote-tracking branches) that follow branches in remote repository.
 - **Revision naming and ranges**: Mercurial provides revision numbers, local to repository, and bases relative revisions (counting from tip, i.e. current branch) and revision ranges on this local numbering; Git provides a way to refer to revision relative to branch tip, and revision ranges are topological (based on graph of revisions).
 - Mercurial uses rename **tracking**, while Git uses rename detection to deal with file renames
 - **Network**: Mercurial supports SSH and HTTP “smart” protocols; modern Git supports SSH, HTTP and GIT “smart” protocols, and HTTP(S) “dumb” protocol. Both have support for bundles files for off-line transport.
 - Mercurial uses **extensions** (plugins) and established API; Git has scriptability and established formats.

Most of the differences between Mercurial and Git are very subtle, and most people wouldn’t even notice them, however, there’s a fundamental difference that I’ll tackle next.


## Branches

The way Git deals with branches is incredibly simple, and yet very powerful.

**hg branch != git branch**

In Git, a branch is merely one of the many kinds of ‘refs’, and a ‘ref’ is simply a pointer to a commit. This means that there’s nothing fundamentally different between ‘branch1’ or ‘branch2’ or even ‘master’. They're all pointers to commits, and these pointers can be easily be deleted, renamed, fetched, pushed, etc. You can do pretty much whatever you want with them.

In Mercurial, a branch is embedded in a commit; a commit in ‘branch1’ will always remain in that branch. This means you cannot delete, or rename branches, because you would be changing the history of the commits on those branches. You can 'close' branches however. These "named branches" can be better thought of as "commit labels".


## Git Commands

Let's go through and compare the most used commands.

**clone**, **status**, **diff**, **add**, **rm**, **push** and **pull** are functionally the same. In fact, most commands are very similar. However there are a few exceptions and things to note.

| **General**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|                                                          |
|--------|----------------------------------------------------------|
| commit | Passing the `-a` flag will automatically stage files that have been modified or deleted, so it is good practice to always use  this |
| add | Using the `-A` flag adds, modifies, and index entries to match the working tree. Use this instead of `hg addremove`. |
| push | Git will try to figure out which branch you want to push and which remote to push to. But setting the following configuration, Git will push to the current branch, thus avoiding pushing all your branches, which Mercurial does: `git config --global push.default current` |
| pull | Rebasing on pull is good practice and will make everyone’s lives easier. You should always pull with the `--rebase` flag to avoid merge commits that result from pulling. Make it the default behaviour with: `git config --global --bool pull.rebase true` |
| checkout | Use this to switch between branches instead of `hg up branch_name`. |

| **Branching**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|                                                          |
|----------|--------------------------------------------------------|
| Creating | `git branch BRANCH-NAME` will create a new branch, but `git checkout -b BRANCH-NAME` will create and then switch to the new branch. |
| Switching | `git checkout BRANCH-NAME` |
| Deleting | `git branch -d BRANCH-NAME` |
| Listing | `git branch` will list all local branches. `git branch -a` will list all branches including those on the remote. |


## Best Practices

[This great article](http://mislav.uniqpath.com/2013/02/merge-vs-rebase/) by Mislav Marohnić can be summarised as follows:

 - `git pull --rebase` instead of `git pull`

 - `git rebase -i @{u}` before git push

 - (on “feature”) `git merge master` to make feature compatible with latest master

 - (on “master”) `git merge -no-ff feature` to ship a feature

 - However if “feature” contains only 1 commit, avoid the merge commit: (on “master”) `git cherry-pick feature`

Rebasing is a much debated subject in Git-land, but [this article](http://blog.izs.me/post/37650663670/git-rebase) explains it very well.


## Tips

The following are a collection of useful tips and tricks that I recommend that you implement. They will make your life so much easier.

**Branch name in your bash prompt**
This one is must-have for me, as I can always see at any time, what branch I am on. Check out these links: http://code-worrier.com/blog/git-branch-in-bash-prompt/ and 
https://github.com/magicmonty/bash-git-prompt.

**Setup Aliases**
Open up your ~/.gitconfig file and you should find an [alias] section. If not, just create one, using the following:

    [alias]
      co = checkout
      ci = commit
      br = branch

      # friendly statuses
      st = status -sb

      # Add all unstaged changes/removals and commit. All you gotta do here is pass the commit message.
      # Example: git ac 'My commit message'
      ac = !git add -A && git commit -m

      # Pretty looking log
      lg = log --decorate --stat --graph --pretty=format:'%C(yellow)%h%Creset (%ar - %Cred%an%Creset), %s%n'

**Love Stash**
There’s plenty of occasions when I’ve been in the middle of some changes, but have been interrupted by a need to work on something else - maybe an urgent bug, or to see something in a different branch. However, I have not yet finished what I am working on and do not want to commit it yet. `git stash` to the rescue!

Just run `git stash` and git will take your uncommitted changes, and set them aside in a safe place. You are then back to a clean working copy and can switch branches, and hack away on anything else your heart desires.

When you are ready to return back, simply run `git stash pop` to apply your last stash and remove it from the stash.

**Hub with Github**
We will be using Github, so [hub](http://defunkt.io/hub/) is extremely helpful.

**Looking at Pull Requests**
On Github you can download patch files and apply them to your project immediately to have a look at them, for example:

    curl https://github.com/karma-runner/karma/pull/559.patch | git am

This downloads the patch and pipes it into `git am` which simply applies the patch to your working directory. And after you are finished you can simply do:

    git reset --hard HEAD~i

where `i` is the number of commits you want to discard. A word of warning should be added here. Doing a hard reset will DELETE stuff permanently from your repo, so be sure you know what you are deleting.

## Other Resources

 - Offical Git Page http://git-scm.com/ and http://git-scm.com/book
 - https://sandofsky.com/blog/git-workflow.html
 - http://blog.izs.me/post/37650663670/git-rebase
 - http://training.github.com/web/free-classes/
 - https://help.github.com/
 - Best Video Training: https://peepcode.com/screencasts/git ( $12 each but worth every cent)
