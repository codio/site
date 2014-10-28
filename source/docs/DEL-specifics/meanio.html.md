---
title: "Mean.io"
class_name: docs
full_width: true
---

This tutorial explains how to install [Mean.io](http://www.mean.io) onto a Codio Box.

##Video
There is a video of this process here : [https://vimeo.com/88764221](https://player.vimeo.com/video/88764221?autoplay=1&hd=1).

##Create a Codio Project

1. From the Codio Dashboard, create a new project by selecting the 'Git' tab.
1. Copy this Git url to the clipboard `https://github.com/linnovate/mean.git` (taken from the [Mean.io GitHub page](https://github.com/linnovate/mean)).
1. Press the 'Create project' button.

##Install components
Once you're in the IDE, open up a Terminal window from 'Tools->Terminal'

1. Firstly, we need to install the Grunt cli tool `npm install -g grunt-cli`
1. Install the Node modules `npm install`. This will take a couple of minutes but you should notice it is a lot quicker than doing the same installation to a local machine for all but the fastest connections.
1. We now need to install MongoDB `parts install mongodb`.
1. Finally, lets start Mongo using `parts start mongodb`.

When you exit your project, Codio will shut down your Box. To get MongoDB to start up automatically when you open your project, create a file `startup.sh` in the root of your project and add the following lines

    parts stop mongodb
    parts start mongodb

##Modify a couple of small things for Codio
We now need to make a small modification to get things to run smoothly on your Codio Box. The main issue here is that Codio only allows access to Ports 1024 - 9999. The default Mean.io installation uses a port outside this range inside one file.

1. Open up `packages/system/server/views/includes/foot.html`
1. Look for `<script type="text/javascript" src="{{'http://' + req.host + ':35729/livereload.js'}}"></script>`
1. Replace 35729 with 4000. It should now look like this

        <script type="text/javascript" src="{{'http://' + req.host + ':4000/livereload.js'}}"></script>

##Try it out
We're now ready to preview the application.

1. From the Terminal `grunt`
1. From the Preview menu (the right most Codio menu, which initially shows 'Project Index (static)') select 'Box URL' which will access your application over Port 3000.
1. You should now see the basic Mean.io application running and showing 'This is the home view' underneath the large black bar.


