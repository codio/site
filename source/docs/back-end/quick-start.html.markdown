---
title: Quick Start
class_name: docs
full_width: true
---

This section describes the steps you should take to get going with any back-end type development. So if you're into PHP, Node, Ruby, Python, Wordpress, Drupal, Joomla etc. this should help you get up and running quickly.

##Create a Project
You can, of course, start off with a blank project and code from scratch. However, if you already have a project then you have the following ways of loading it.

- ZIP file
- Git or Mercurial
- FTP or SFTP import

As described in the [Create Project](/docs/console/creating) section, the import process will create a project for you and take you straight to your code.

The image below shows a typical import from an existing remote SFTP server.

![create sftp](/img/docs/create-sftp.png)

##Start Coding
This is largely self-explanatory and you will find the IDE very intuitive.

##Terminal Access
If you need to access your remote server from your project, we recommend you set up an [SSH Connection](/docs/ssh). You can then SSH directly into your server from Codio.

Be sure to read about our [Panel Management](/docs/panels) features so you can configure the layout of your code and SSH windows exactly as you need them.

![ssh](/img/docs/ssh-tab.png)

##Deployment Targets
Your project can have any number of [deployment targets](/docs/deployment). If you imported from FTP or SFTP, you will see that one was already created for you.

You can create any number of deployment targets for development, production and staging.

![ssh](/img/docs/deploy-details.png)

If your server supports it (and most, including Digital Ocean do), then we recommend choosing the [RSYNC deployment type](/docs/deployment/type-rsync). This ensures that only modified files get deployed, so it is very fast indeed and comes close to the experience you have working on a local machine.

##Previewing your application
You will want preview your application as you code. The [Preview & Deploy](/docs/inline-preview) capability lets you make a code change and then press a single button to deploy your changes - again, RSYNC will only deploy changed files - and automatically preview them.





