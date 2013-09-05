---
title: Create/manage a target
class_name: docs
full_width: true
---

The Manage Targets options are accessed via Tools->Deployment->Manage Targets menu. All Deployment dialogs will be displayed in the currently active [Panel](/docs/panels).

If you have not yet created any deployment targets then you will be prompted to create one.

![Deployment List](/img/docs/deploy-details.png)

In the Deployment Targets dialog, you can:

- list all defined deployment targets
- modify existing targets
- create new targets

## Specifying the Source location
Each target requires you to specify the **Source**. This allows you to specify which part of your project should be deployed. You have the following options:

- **Whole project**: the entire contents of your project.
- **Directory**: a specific directory.

This allows you to define multiple sources and targets for each deployment which can then be deployed to with a single button press.

##Destination
The Destination drop down specifies the type of the target you are deploying to. Currently we support the following destinations (click on each one to find out about its associated parameters)

- [Codio](/docs/deployment/type-codio/)
- [FTP](/docs/deployment/type-ftp/)
- [SFTP](/docs/deployment/type-sftp/)
- [Nodejitsu](/docs/deployment/type-nj/)
- [Parse.com](/docs/deployment/type-parse/)

## Codio targets and URL's
When you create a Codio target type, the URL of your deployed app will be

- `http://username.cod.io/projectname`

If you selected a folder as the source location, then that folder will become the root folder once deployed.


Once you have successfully deployed, the actual URL is shown in the popup dialog that appears when you click the Deploy link in the top bar.

There is also a button in the main Deployment Targets dialog that when clicked on, will launch the app at the target. This assumes that there is an index.html file present. If you have several app folders, then the URL suggested by Codio will be the first app folder and will assume the presence of an index.html. If you get a 404 error then you will need to locate the correct file yourself.

