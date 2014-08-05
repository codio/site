---
title: "OpenShift"
class_name: docs
full_width: true
---


This tutorial shows you how to work with [OpenShift](https://www.openshift.com/) in Codio. 

[OpenShift](https://www.openshift.com/) is an Open Hybrid Cloud Application Platform by [Red Hat](https://www.redhat.com/),

##Add your Codio Public Key to your OpenShift Account

1. From Codio>Account>SSH Key obtain your [Public SSH Key](/docs/settings-prefs/account-settings/public-key) and copy to your clipboard.
1. Log into your Openshift account and go to 'Settings' to paste in your Codio key.


##Create your project at OpenShift

1. Go to 'Applications' and create your project in the usual way.
1. When the project is created, identify the GIT repo ssh URL and copy to your clipboard.


##Create your Codio Project

1. From the Codio Dashboard, select the 'Git' tab.
1. Paste in the Git ssh URL and your project will be created in Codio.

You are now ready to start working on your project in Codio.

##Pushing your updates to OpenShift

Full Git support is available in Codio so to send your changes to [OpenShift](https://www.openshift.com/), just commit and push as usual (if you prefer a GUI interface, check out [Ungit](/docs/specifics/ungit))
		
    $ git commit -a -m 'Some commit message'
    $ git push
    
*Note: You may need to initially identify your Git details using:*

	$ git config user.email "your_email@example.com"
	$ git config user.name "your name"
    
##Preview Setup

Each project created in [OpenShift](https://www.openshift.com/) has a unique URL based on your domain. To view your project at any time after you have pushed changes back you can load this URL in your browser. The Codio Preview button lets you preview one or more web pages with a simple button press.

Next to the help menu you should see the "Configure" option, if you don't see it click the little arrow near the end and then select "Configure".
![](/img/docs/customisecodio.png)

This opens a .codio file which you can customize. Identify the URL of your project and replace the existing preview content with that. You will end up with something like:

    {
    // Configure your Run and Preview buttons here.

    // Run button configuration
      "commands": {
            "Node version": "node --version"
      },

    // Preview button configuration
      "preview": {
            "OpenShift": "http://projectname-domainname.rhcloud.com"
       }
    }

You can now access your project on [OpenShift](https://www.openshift.com/) by simply clicking the button.



