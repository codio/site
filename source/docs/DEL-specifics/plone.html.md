---
title: "Plone"
class_name: docs
full_width: true
---


This tutorial shows you how to create a Plone project and work with it in Codio. Thanks to [David Bain](http://blog.dbain.com/2014/04/install-plone-in-under-5-minutes-on.html) for this tutorial.

[Plone](https://plone.org/) is a powerful, flexible Content Management Solution that is easy to install, use and extend.

##Create a Project

1. From the Codio Dashboard, create a new Empty template project.
1. Open a Terminal window from the Tools->Terminal window


##Install Plone

1. Run `curl -L http://goo.gl/5gwGgo | bash`

You will see output similar to this:
![](/img/docs/ploneoutput.png)

##Customize your Codio Project

Next to the help menu you should see the "Configure" option, if you don't see it click the little arrow near the end and then select "Configure".
![](/img/docs/customisecodio.png)

This opens a .codio file which you can customize. Replace the existing text with the text below:

`{
    // Configure your Run and Preview buttons here.
    // Run button configuration
    "commands": {
       "Start Plone":"plone-start.sh",
       "Stop Plone":"plone-stop.sh",
       "Debug Plone":"plone-debug.sh",
      "Admin Password": "cat $HOME/workspace/zeocluster/adminPassword.txt"
      },
    // Preview button configuration
     "preview": {
        "Dynamic Site": "http://{{domain}}:8080/",
        "Static Index (static)": "https://{{domain}}/{{index}}",
        "Current File (static)": "https://{{domain}}/{{filepath}}"
      }
    }`

Now you're all set, you can manage Plone from the Codio menu.

##Start and Set up of Plone
You can start Plone using the Codio menu. You should now see options such as:
Start Plone, Stop Plone, Debug Plone and Admin Password. 
![](/img/docs/codiomenu.png)

To setup your first site "Start Plone" and wait about 20 seconds, make a note of your "Admin Password" and then select the "Dynamic Site" menu entry and click "Create a new Plone site". 
![](/img/docs/plonesite.png)

You should be good from there.

