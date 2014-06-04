---
title: "Ungit - a Git GUI"
class_name: docs
full_width: true
---

Many thanks to Codio user Matthieu Riffault for writing this tutorial.

[Ungit2](https://github.com/FredrikNoren/ungit) is a web-based Git GUI, written in Javascript and running under Node.js. 

![ungit](/img/docs/ungit-1.png)

![ungit](/img/docs/ungit-2.png)

Ungit works great with Codio. Node.js is provided by Codio, so you don't need root access to your Boxes to install and run Ungit.

To install and use Ungit on Codio, just run through these few steps.

##Installation
Install it using npm (no sudo access required on Codio) :

    npm install -g ungit

##Usage
After that, it works out of the box! Open up the terminal from the Tools-Terminal menu then run it with

    ungit

Ungit will provide the full URL you have to visit, to access to the Ungit GUI but you should make a couple of tweaks to get it running in Codio. By default, it will have this format

    http://sullow-calean.codio.io:8448/#/repository?path=/home/codio/workspace
    
where `sullow-calean` needs to be replaced with your own Box name, which can be found in the Project->Box Info menu. 

Read on for to find out how to get it working really smoothly in Codio.

##Codio Tweaks

###Single Click Access
To start the Ungit UI easily, you can add it to your `.codio` file. To allow Ungit to run inside a Codio tab, we will need to access it over https. To do this, we need to use a port between 9500 and 10000 as [described here](/docs/boxes/ext-access).

The easiest way to do this is to use the following command when you start ungit

    ungit --port=9501

Now you just need to open up the `.codio` file by selecting the Configure option in the preview menu.

![ungit](/img/docs/preview-deploy.png)

Now add the following line to the Preview section

    "Visit Ungit": "https://{{domain}}:9501/#/repository?path=/home/codio/workspace"

You will now find 'Visit Ungit' available in the Preview menu.

###Autostarting Ungit
If you want to have Ungit start automatically when your Box starts, then add the command `ungit --port=9501` to the startup.sh file in the root of your project. [More on startup.sh here](/docs/boxes/startup).

##Ungit parameters file
Create a .ungitrc file in your home folder:

    cd ~
    touch .ungitrc
    nano .ungitrc

then, past the following lines to avoid unnecessary logging:

    {
        "bugtracking": false,
        "logRESTRequests": false
    }

You can find the full details of available parameters in the Ungit source code.

##Authentication
Ungit provides simple authentication if you would like to limit the access to the GUI. Add the following parameters to your .ungitrc file to add authentication:

    {
      "authentication": true,
      "users": {
        "username": "password"
      }
    }
    
Replace username and password with your credentials. 

Your .ungitrc file should look something like 

    {
      "bugtracking": false,
      "logRESTRequests": false,
      "authentication": true,
      "users": {
        "username1": "password1",
        "username2": "password2",
        "username3": "password3"
      }
    }

You have to restart Ungit to apply parameters (close Terminal, and launch Ungit again).