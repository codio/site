---
title: Creating a Target
class_name: docs
full_width: true
---

![targets create](/img/docs/deploy-top-bar.png)

The deployment options are all accessed via the Deploy dropdown in the top bar. If you have not yet created any deployment targets then you will be prompted to create one.

![targets create](/img/docs/deploy-details.png)

The Deployment Targets dialog 

- lists all defined deployment targets
- lets you modify existing ones
- create new targets

##Specifying the Source location
Each target requires you to specify the **Source**. This allows you to specify which part of your project should be deployed. You have the following options

- **While project** : the entire project
- **App...** : a specific App within your project
- **Directory...** : a specific directory/folder within an App

This allows you to define multiple targets for each deployment which can then be deployed to with a single button press.

##Codio targets and URLs
When you create a Codio target type, the url of your deployed app will depend on the Source location you specified

- **While project** : `http://username.cod.io/projname/app/` (assuming you have an app called `app`).
- **App...** : `http://username.cod.io/projname/` (the app is not mentioned)

Once you have successfully deployed, the actual URL is shown in the popup dialog that appears when you click the Deploy link in the top bar. 

There is also a button in the main Deployment Targets dialog that when clicked on will launch the app at the target. This assumes that there is an index.html file present. If you have several app folders, then the url suggested by Codio will be the first app folder and will assume the presence of an index.html. If you get a 404 error then you will need to locate the correct file yourself.


##Development, Staging, Production etc.
Another benefit of this approach is that you can define different targets for staging and production deployments. For development purposes, you can simply press Preview and the App will be available, so you don't need to set up a specific deployment target.



