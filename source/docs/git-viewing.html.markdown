---
title: Viewing GitHub Repos
class_name: docs
full_width: true
---

GitHub let's you browse around a repo but let's face it, it's not an IDE. Codio gives you a great way of viewing any GitHub (or Git) repo. For web apps, you can even run and [preview](/docs/inline-preview) within Codio.

##Simple Approach
The first approach is great for anyone wanting to put a simple button into a GitHub README page and then, when clicked, it creates a Codio fork in an anonymous account. 

The advantage of this approach is that changes you make to your repo will be automatically shown in Codio as it creates a brand new Codio project whenever clicked on.

![create from GitHub](/img/docs/github-readme.png)

You just use the following link in your GitHub README file (or anywhere else for that matter).

`https://codio.com/p/create/?from_github=your_github_name/your_repo_name`

In some cases, you may want to specify a specific branch. The common usage for this is if you have a demo or GitHub Pages site that you want to load into Codio. In this case you do the following 

`https://codio.com/p/create/?from_github=your_github_name/your_repo_name&branch=other_branch`

You are free to use any way of linking to Codio but we would recommend using the following images

![show](https://codio-public.s3.amazonaws.com/sharing/open-in-ide.png)
![demo](https://codio-public.s3.amazonaws.com/sharing/demo-in-ide.png)


##Advanced Approach
This method uses the Project->Share menu option to allow people to link to a Codio project that you created. The advantages over the simple approach are speed and layout. 

As you are creating the project and may want to retain the Panel and Tab layout, you can use this option to provide a link that loads quickly and with the desired layout.

The drawback with this approach is that any changes you make to the GitHub repo outside of Codio will need to be pulled into Codio to ensure it is up to date.

![create from GitHub](/img/docs/panel-overview.png)


###How get a Git repo into Codio

![create from GitHub](/img/docs/github-clone-url.png)

- If you are on the GitHub site and looking at a repo, you will see the 'Clone URL' link (circled above).
- Click to copy the link to the clipboard; if you clone using SSH, you must have added the Codio SSH public key first as [described here](/docs/settings-prefs/account-settings/public-key/)
- Login to Codio
- Click on 'Create Project'
- Enter a project name, select the 'Clone a Git repo' and paste in the Git URL (see below)
- Press 'Create Project' and Codio will load the repo and then display it

![create from GitHub](/img/docs/github-create.png)

###Repo owners - provide an even better experience
If you are a repo maintainer and you want to offer a super fast way for people to see, in an IDE, your repo code or maybe a demo then...

- follow the steps, described in the above section, to create a Codio project in your own account
- now select the Project->Share menu item ([explained in detail here](/docs/sharing))
- Now select the Markdown option (circled below)
- Copy and paste one of the button options into your README.md file and you'll get a nice button your users can click

![create from GitHub](/img/docs/github-share.png)

Now, anyone viewing the README.md can click on the button and they'll be instantly taken to the project.

![create from GitHub](/img/docs/github-readme.png)


And don't forget that Codio is [Git integrated](/docs/git), so you can update your project at any time simply by pulling from GitHub.

###Planned for later
To make all this easier, we plan to add the following pretty soon

- A Chrome App that let's you simply press a button to view a repo in Codio based on the current GitHub page you're looking at
- A trigger so that whenever you update your GitHub repo, Codio will automatically perform a pull so the Codio version stays nicely in sync.