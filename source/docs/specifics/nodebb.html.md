---
title: "NodeBB"
class_name: docs
full_width: true
---

This tutorial explains how to install [NodeBB](https://nodebb.org/) onto a Codio Box.

##Create a Codio Project

1. From the Codio Dashboard, create a new project by selecting the 'Git' tab.
1. Copy this Git url to the clipboard `https://github.com/NodeBB/NodeBB.git` (taken from the [NodeBB GitHub page](https://github.com/NodeBB/NodeBB)).
1. Press the 'Create project' button.

##Install components
Once you're in the IDE, open up a Terminal window from 'Tools->Terminal'

1. Install the Node modules `npm install`. This will take a couple of minutes but you should notice it is a lot quicker than doing the same installation to a local machine for all but the fastest connections.
1. We now need to install Redis `parts install redis`.
1. Finally, lets start Redis using `parts start redis`.

When you exit your project, Codio will shut down your Box. To get Redis to start up automatically when you open your project, create a file `startup.sh` in the root of your project and add the following lines

    parts stop redis
    parts start redis

##Confgure Redis for Codio
We now need to make a modification to get things to run smoothly on your Codio Box. 

1. In the Terminal, enter `redis-server --port 16379 &` to run your redis server on port 16379. The `&` makes the command run in the background.

##Setup

1. Run `node app --setup`. You can accept all the defaults (other than where asked to define admin credentials).
1. When completed run `node app`.

##Preview Setup
You can now run NodeBB. From the Preview menu (the rightmost Codio menu, which initially says 'Project index (static)') select the dropdown list and click on 'Configure'. Then paste the following code into the file, replacing the existing contents. 

    {
			// Configure your Run and Preview buttons here.

			// Run button configuration
  	"commands": {
        "Node version": "node --version"
  	},

	// Preview button configuration
  	"preview": {
        "Project Index (static)": "https://{{domain}}/{{index}}",
        "Current File (static)": "https://{{domain}}/{{filepath}}",
        "Box URL": "http://{{domain}}:4567/",
        "Box URL SSL": "https://{{domain}}:9500/"
  	}
	}

The `commands` entries are shortcuts to Terminal commands and the `preview` entries are shortcuts to browser previews. You can [read more about this](/docs/boxes/run/) in our docs.

##Try it out
We're now ready to preview the application.

1. From the Preview menu (the right most Codio menu, which initially shows 'Project Index (static)') select 'Box URL' which will access your application over Port 4567.
1. You should now see the basic NodeBB application running and you can login (with the admin credentials you entered above) and and you now have NodeBB fully up and running.


