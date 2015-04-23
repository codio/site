---
title: Deploy & Preview
author: Freddy May
date: 2013-11-13
tags: 'Product News'
class_name: blog
full_width: true
---

We are constantly looking to streamline your development process when working in Codio, and this time we focused on the ease with which you can deploy and preview code, and in particular back-end code, such as PHP, NodeJS and Python. We've made some changes to the way to preview your code.

##Deploying & Previewing Changes
Let's say that you make a small modification to a Node or PHP file, and you then want to preview it. All you now need to do is to press the new `Preview` or `Deploy & Preview` (`Shift-F9`) button in the menu bar and changes get deployed and previewed in seconds.

![deploy-preview](blog/deploy-preview-1.png)

We've added a few extra options to this new button that can be accessed vis the buttons dropdown menu. These options can change the behaviour of the button to help create a workflow suited to your needs:

- **Deploy before Preview** - Deploys your project immediately before previewing. This works perfectly with the Rsync deployment type, as only modified files will get deployed.
- **Deploy in a Codio tab** - Opens the preview inside a Codio tab.
- **Default Deployment Target** - If you're using the deploy before preview option, this default deployment target specifies which server will be deployed to.

##Working with Remote Servers
The approach we take at Codio is to **NOT** provide the back-end on the Codio infrastructure. So we provide the tools to allow you to integrate as closely and as quickly as possible with your own servers and environments. Whether that be for development or production use. There a lot of good reasons why we don't provide the back-end:

- There are now fantastic (and fantastic value-for-money) cloud based development servers available from providers like [DigitalOcean](https://www.digitalocean.com/) that allow you to configure them exactly as you need.
- You have complete freedom of configuration and can create as many development, staging, production environments as you need - all linked to your Codio project.
- You can use AWS, Rackspace or absolutely any provider you wish, so you are not restricted in any way at all.
- We stay focused on the IDE side of things, so we can make that experience as perfect as we can, while leaving the back-end to the experts.

##The Joy of RSYNC
Most remote servers will come with RSYNC enabled. Codio supports an RSYNC deployment target type so that only modified files get deployed. This makes the whole experience really fast. And because Codio is cloud based and your target server is also, deploying is extremely fast.

##Docs and Tutorials
If you want to see a complete example of the entire process from creating a remote cloud server, right through to deployment, take a look at our [Start to Finish Tutorial](/docs/back-end/do-server).

