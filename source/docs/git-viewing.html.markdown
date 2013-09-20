---
title: Viewing Github Repos
class_name: docs
full_width: true
---

Github let's you browse around a repo but let's face it, it's not an IDE. Codio gives you a great way of viewing any Github (or Git) repo. For web apps, you can even run and [preview](/docs/inline-preview) within Codio.

So now people can explore and run your code in a full-powered Web IDE, as shown below, in seconds.

![create from Github](/img/docs/panel-overview.png)


##How get a Git repo into Codio

![create from Github](/img/docs/github-clone-url.png)

- If you are on the Github site and looking at a repo, you will see the 'Clone URL' link (circled above).
- Click to copy the link to the clipboard; if you clone using SSH, you must have added the Codio SSH public key first as [described here](/docs/settings-prefs/account-settings/public-key/)
- Login to Codio
- Click on 'Create Project'
- Enter a project name, select the 'Clone a Git repo' and paste in the Git URL (see below)
- Press 'Create Project' and Codio will load the repo and then display it

![create from Github](/img/docs/github-create.png)

##Repo owners - provide an even better experience
If you are a repo maintainer and you want to offer a super fast way for people to see, in an IDE, your repo code or maybe a demo then...

- follow the steps, described in the above section, to create a Codio project in your own account
- now select the Project->Share menu item ([explained in detail here](/docs/sharing))
- Now select the Markdown option (circled below)
- Copy and paste one of the button options into your README.md file and you'll get a nice button your users can click

![create from Github](/img/docs/github-share.png)

Now, anyone viewing the README.md can click on the button and they'll be instantly taken to the project.

![create from Github](/img/docs/github-readme.png)


And don't forget that Codio is [Git integrated](/docs/git), so you can update your project at any time simply by pulling from Github.

##Coming Soon
To make all this easier, we plan to add the following pretty soon

- A Chrome App that let's you simply press a button to view a repo in Codio based on the current Github page you're looking at
- A trigger so that whenever you update your Github repo, Codio will automatically perform a pull so the Codio version stays nicely in sync.