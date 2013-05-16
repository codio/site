---
title: Creating a Target
class_name: docs
full_width: true
---

![targets create](/img/docs/deploy-top-bar.png)

The deployment options are all accessed via the **Deploy** dropdown in the top bar. If you have not yet created any deployment targets then you will be prompted to create one.

![targets create](/img/docs/deploy-details.png)

In the Deployment Targets dialog, you can:

- list all defined deployment targets.
- modify existing targets.
- create new targets.

## Specifying the Source location
Each target requires you to specify the **Source**. This allows you to specify which part of your project should be deployed. You have the following options:

- **Whole project**: the entire contents of your project.
- **App**: a specific app within your project.
- **Directory**: a specific directory.

This allows you to define multiple targets for each deployment which can then be deployed to with a single button press.

## Codio targets and URL's
When you create a Codio target type, the URL of your deployed app will depend on the Source location you specified:

- **Whole project**: `http://username.cod.io/projectname/app/` (assuming you have an app called `app`).
- **App...**: `http://username.cod.io/projectname/` (the app is not mentioned)

Once you have successfully deployed, the actual URL is shown in the popup dialog that appears when you click the Deploy link in the top bar.

There is also a button in the main Deployment Targets dialog that when clicked on, will launch the app at the target. This assumes that there is an index.html file present. If you have several app folders, then the URL suggested by Codio will be the first app folder and will assume the presence of an index.html. If you get a 404 error then you will need to locate the correct file yourself.

##Development, Staging, Production etc.
Another benefit of this approach is that you can define different targets for staging and production deployments. For development purposes, you can simply press Preview and the App will be available, so you don't need to set up a specific deployment target.
