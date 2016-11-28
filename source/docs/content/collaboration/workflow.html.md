---
title: "Typical workflow"
class_name: docs
full_width: true
---

If you are new to using Git, the steps below may seem a little mystifying at first. However, they will become second nature after a while and equip you with valuable skills that you can use in any collaborative coding project.

Even if you are not actively collaborating, as a source control management system for snapshotting and remotely backing up your code, it is second to none.

### Forking
Forking is the process of cloning a repo into your own GitHub account.

In the open source world, unless you are its owner, you never work directly on the main repository. You fork the repo into your own account and then work on that.

<div class="video">
<div class="video-wrapper">
<iframe src="https://player.vimeo.com/video/172915285" width="640" height="435" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>
</div>

### Creating a Codio project from the forked project
Next, you start editing your code and content. As you will likely use Codio for this, you will have created a Codio project directly from your own forked repo.

**Important**: you should note the correct stack to use. For Codio content, our [Wiki](https://github.com/codio-content/Information/wiki) contains information about the stack to use for each course. Please see the video for details.

Go to the Codio projects page and press the New Project button. You then select the import button and enter the url of the GitHub repo. 

<div class="video">
<div class="video-wrapper">
<iframe src="https://player.vimeo.com/video/172915407" width="640" height="435" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>
</div>


### Work
You now start editing your project in normal way. 

- `git add -A` to track new files
- `git commit -am 'commit message'` to commit changes to your local repo on the Codio box

Once all your work is committed to your local repo on the Codio box, you need to push them back to your own GitHub repo, the one you forked from the authoritative repo.

- `git push` uploads all the changes back to **your** GitHub repo, not Codio's content.

<div class="video">
<div class="video-wrapper">
<iframe src="https://player.vimeo.com/video/172915611" width="640" height="435" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>
</div>

If you have some Git experience then we request that you make your modifications in a different branch to the master branch. If you are brand new to Git then learning about branches is worthwhile. It is not essential to use branches but it is good practice and appreciated by repo owners.

### Pull request
Now your code is back on GitHub, you want to merge your changes back into the owner's project. To do this you send the owner a pull request. This is saying "I have made changes and would like you to pull these changes into your project".

The important thing about a pull request is that the owner can review the changes before accepting them.

<div class="video">
<div class="video-wrapper">
<iframe src="https://player.vimeo.com/video/172915808" width="640" height="435" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>
</div>

### Weeks later - syncing your fork
After you have made and submitted your changes, weeks can elapse before you find yourself wanting to work on that same project again. During this time, the owner project may well have changed. In this case, you should definitely not carry on with your project where you left off. 

It is important that you pull in all changes from the owner's repo before carrying on work yourself. 

Firstly, you need to create a *remote* that tells your Codio repo the name of the authoritative repository from which your working copy was forked. The video explains how to retrieve the `<special url>`. Please make sure that you use the *https* link and not the GitHub link. The video explains this i more depth.

- `git remote add upstream <special url>`

Next, you need to *pull* any changes from that repo and merge them into your project. 

- `git pull upstream master`

Once you have done this it is a good idea to push your changes to your personal GitHub repo with 

- `git push`

<div class="video">
<div class="video-wrapper">
<iframe src="https://player.vimeo.com/video/173328971" width="640" height="435" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>
</div>

### Conflicts
If you have made changes and left it a while without synchronizing, you run the risk of conflicts. As a result, it is important that you regularly pull from the authoritative remote so you are not left with a deluge of conflicts to sort out.

Conflicts and their resolution are explained [here](/docs/content/collaboration/conflicts/).

