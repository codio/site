---
title: "Mean.io"
class_name: docs
full_width: true
---

This explains how to install [Mean.io](http://www.mean.io) onto a Codio Box.

##Create a Codio Project

1. From the Codio Dashboard, create a new project by selecting the 'Git' tab.
1. Copy and paste this Git link [https://github.com/linnovate/mean.git](https://github.com/linnovate/mean.git) (taken from the [Mean.io GitHub page](https://github.com/linnovate/mean)).
1. Press the 'Create project' button.

##Install components
Once you're in the IDE, open up a Terminal window from 'Tools->Terminal'

1. Firstly, we need to install the Grunt cli tool `npm install -g grunt-cli`
1. Install the Node modules `npm install`. This will take a couple of minutes but you should notice it is a lot quicker than doing the same installation to a local machine for all but the fastest connections.
1. We now need to install MongoDB `parts install mongodb`.
1. Finally, lets start Mongo using `parts start mongodb`.

When you exit your project, Codio will shut down your Box. So MongoDB starts up with your box, create a file `startup.sh` in the root of your project and add the following lines

    parts stop mongodb
    parts start mongodb

##Modify a couple of small things for Codio
We now need to make a couple of small modifications to make sure it runs smoothly on Codio Boxes. The main issue here is that Codio only allows access to Ports 1024 - 9999. The default Mean.io installation uses a port outside this range.

1. Open up `app/views/includes/foot.html`
1. Look for `<script type="text/javascript" src="{{'http://' + req.host + ':35729/livereload.js'}}"></script>`
1. Replace 35729 with 4000. It should now look like this

        <script type="text/javascript" src="{{'http://' + req.host + ':4000/livereload.js'}}"></script>

##Try it out
We're now ready to preview the application.

1. From the Terminal `grunt`
1. From the Preview menu (the right most Codio menu, which initially shows 'Project Index (static)') select 'Box URL' which will access your application over Port 3000.
1. You should now see the basic Mean.io application running and showing 'This is the home view' underneath the larg black bar.


