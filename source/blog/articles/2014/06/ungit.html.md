---
title: Ungit - a Git Graphical UI
author: Freddy May
date: 2014-06-04
tags: Guides
class_name: blog
full_width: true
published: true
---

When Matthieu Riffault, a Codio user, posted a tutorial on our forum on how to run Ungit, we added it immediately to our 'How To' section.

[Ungit](https://github.com/FredrikNoren/ungit) is a really cool GUI for git. It is installed as a Node app and then accessed as a web page.

As Node is preinstalled on all Codio Boxes, getting Ungit installed and running is as simple as 

    npm install -g ungit
    ungit
    
Then you can access the Ungit UI by accessing it on your Codio Box like this

    http://{box-id}.codio.io:8448/#/repository?path=/home/codio/workspace

![ungit](/img/blog/ungit-1.png)

![ungit](/img/blog/ungit-2.png)

##Full Tutorial
For full details on getting it up and running nicely in Codio, check out Matthieu's [tutorial here](/docs/specifics/ungit).

You might also want to check out this video (skip to [1:00] for the more interesting bits) :  [Ungit video](http://www.youtube.com/embed/hkBVAi3oKvo?autoplay=1)

