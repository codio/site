---
title: Deploy & Preview
author: Freddy May
date: 2013-11-13
tags: Watercooler
class_name: blog
full_width: true
published: false
---

We are constantly looking to streamline the development process and this time we focused on the ease with which you can deploy and preview back-end stuff, like PHP, Node, Ruby etc.

##Deploying & Previewing Changes
Let's say that you make a small modification to a Node or PHP file or two and you then want to preview it. All you need to do is to press the new Preview / Deploy & Preview button in the menu bar and changes get deployed and previewed in a second.

![deploy-preview](blog/deploy-preview-1.png)

You can see the various options you can set that are triggered when you press the button.

- **Deploy before Preview** : execute a deploy before the preview. This should only really be used with the RSYNC deployment type so only modified files will get deployed.
- **Deploy in a Codio tab** : this will run the preview inside a Codio tab.
- **Default Deployment Target** : if you are using the deploy before preview option, it specifies which server to deploy to.

##Working with Remote Servers
The approach we take at Codio is to **NOT** have your own server running on the Codio infrastructure. There a lot of good reasons for this

- there are now fantastic (and fantastic value-for-money) cloud based development servers available from providers like DigitalOcean that let you configure them exactly how you need them
- You have complete freedom of configuration and can create as many development, staging, production environments as you need, all linked to your Codio project.
- you can use AWS, Rackspace or absolutely any servers you want to use, so you are not restricted by Codio in any way at all
- We stay focused on the IDE side of things and make that experience as perfect as we can while leaving the back-end to the experts

##The Joy of RSYNC
Most remote servers will come with RSYNC enabled. Codio supports an RSYNC deployment target type so that only modified files get deployed. This makes the whole experience really fast. And because Codio is cloud based and your target server is also, deploying is very quick.

##Docs and Tutorials
If you want to see a really complete example the entire process from creating a remote cloud server right through to deployment, take a look at our [Start to Finish Tutorial](/docs/back-end/do-server).

