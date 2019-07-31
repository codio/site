---
title: Viewing GitHub Repos
class_name: docs
full_width: true
---

GitHub let's you browse around a repo but it's not the same as using an IDE. Codio gives you a great way of viewing any GitHub (or Git) repo. For web apps, you can even run and [preview](/docs/ide/features/inline-preview) within Codio.

## Offering link/button in the repo readme.md file

This is great for anyone wanting to offer a link into a GitHub README page and then, when clicked, it initiates the creation of a project, importing in from the repo for the user in their Codio account.

The advantage of this approach is that changes you make to your repo will be automatically shown in Codio as it creates a brand new Codio project whenever clicked on. If a project of that name already exists, users can change the name on the project creation page.

<img alt="create from GitHub" src="/img/docs/github-readme.png" class="simple"/>


You just use the following link format in your GitHub README file (or anywhere else for that matter).

```
https://codio.com/home/projects/new?importType=git&activeTab=3&name=your_codio_project_name&importGitUrl=git@github.com:your_github_name/your_repo_name&stackVersion=stack_version_id

```

In some cases, you may want to specify a specific branch. The common usage for this is if you have a demo or GitHub Pages site that you want to load into Codio. In this case you do the following

```
https://codio.com/home/projects/new?importType=git&activeTab=3&name=your_codio_project_name&importGitUrl=git@github.com:your_github_name/your_repo_name&branch=other_branch&stackVersion=stack_version_id

```

### Finding the stack version ID

Go to the **Stacks** area and find the appropriate stack you wish to be used with your repo. Select **Use Stack** and from the address bar you will see the stack version ID to add to your link

Example showing the **Empty Stack** stack version ID

<img alt="Empty Stack Version ID" src="/img/docs/stackversionid.png" class="simple"/>



You are free to use any way of linking to Codio but we would recommend using the following images

<img alt="show" src="https://codio-public.s3.amazonaws.com/sharing/open-in-ide.png" class="simple"/>
<img alt="show" src="https://codio-public.s3.amazonaws.com/sharing/demo-in-ide.png" class="simple"/>




### How get manually import a Git repo into Codio

<img alt="create from GitHub" src="/img/docs/github-clone-url.png" class="simple"/>


- If you are on the GitHub site and looking at a repo, you will see the **Clone URL** link (circled above).
- Click to copy the link to the clipboard; if you clone using SSH, you must have added the Codio SSH public key first as [described here](/docs/dashboard/account/publickey)
- Login to Codio
- Click on **New Project** and then the **Click here** for more options
- Select **Import** and then from the **Source** drop-down, select **Git**
- Paste in the Git URL (see below) and add any additional details you require
- Press **Create** and Codio will load the repo and then display it

<img alt="create from GitHub" src="/img/docs/github-create.png" class="simple"/>




