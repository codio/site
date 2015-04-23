---
title: Developing Back End Code
author: Freddy May
date: 2013-11-16
tags: Product News
class_name: blog
full_width: true
published: false
---

Codio has everything you need to develop great front-end applications. But when it came to back-end stuff like Node, PHP, Ruby etc. there was a major decision about how to provide support for the back end.

We didn't want to get involved with managing our own back-end platform as doing this is a highly complex business in itself and beyond the scope of what we want to achieve with Codio.

As a result, we decided that the best solution was to allow our users to connect to any cloud-based back-end server they choose and to make working with them as seamless as possible.

##SSH Terminal
Codio recently introduced an [SSH Connection Manager](/docs/ssh/ssh-manager/) that let's you maintain a list of remote servers you want to work with. You can then connect to any of these with a button click and within Codio you can create any number of ssh terminal sessions with your remotes.

![ssh tab](/img/blog/ssh-tab.png) ![ssh tab](/img/blog/ssh-connection-list.png)

##Deployment Targets
Codio always had [deployment targets]() but we also added an RSYNC deployment target type. The beauty of RSYNC is that Codio only deploys files that have been modified rather than the entire project. 

And given that Codio is in the Cloud and your remote servers probably are too, the deployment is almost instantaneous.

In fact, even a complete prooject deployment is very fast indeed thanks to it being cloud->cloud.

##Preview and Deploy
The final piece we added was Preview and Deploy. This allows you to press a single button in the main menu bar which then does an RSYNC deploy immediately followed by a Preview. This means you can make quick code edits, press the Deploy & Preview button and you will see your preview - all within a second.

![ssh tab](/img/blog/deploy-preview-1.png)

##Managing Servers from Codio
Before the end of this year, we will be adding a very exciting option that lets you manage remote servers directly within Codio.

You will be able to

- create a server (with a variety of preconfigured stacks)
- destroy a server
- start, stop, reboot
- auto upload
- SSH
- etc.

We will be working with a 3rd party provider on all this and as soon as it is ready we'll make a full announcement.




