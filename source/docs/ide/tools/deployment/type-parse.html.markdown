---
title: Parse.com Target Type
class_name: docs
full_width: true
---

[Parse.com](http://parse.com/products) is a third party platform that provides a range of very powerful but easy to use back end features such as 

- NoSQL Database
- Push Notifications
- Server Side Javascript (Node.js)
- Social Integration

Please refer to the [Parse.com documentation](https://parse.com/docs/cloud_code_guide) for details on how to create a Cloud Code application. 

##Creating a sample project
If you want to create a test Parse.com Cloud project, we've set up a couple of Parse.com templates. When you go to create a new project from the Codio Dashboard, select "From a template" from the Create Project option dropdown. You'll find "Parse Anyimg" and "Parse ToDo" templates waiting for you.

Open the README.md file and follow the instructions to get it running in 5 minutes.

##Target Type Parameters
When setting up the deployment target, select "Parse.com ..." from the **Destination** drop down. 

There are no parameters to enter as all relevant information is taken from the `config/global.json' file.

##Base Path
We recommend you set the base path field for remote servers as [described here](/docs/ide/tools/deployment/basepath). This will be useful when using the [Preview](/docs/ide/features/inline-preview) feature.

##Parse.com Folder Structure
Here is a very simple Parse.com app in Codio.

![parse.comproject](/img/docs/parse-app.png)

Parse requires that you structure your project into three main folders

- `cloud` - this is your Parse Cloud Code (Node.js javascript files) and Parse.com convention is to start off with a `main.js` file
- `config` - your global.json file goes here which is shown in the above screenshot; note how this contains your Application ID and Master Key ID
- `public` - your static client side files go here, so your web site or web application front end

##global.json file
This file contains the necessary connection information for Codio to talk to Parse.com. You must have this file in the `config` folder and it should contain the following key fields

	{
    "applications": {
      "AppName": {
          "applicationId": "fUjNJlrS9JGkOEPyQBRjUix2xxxxxxxxxxxxxx", 
          "masterKey": "D0NbBAFPl5oUDslP3Pxxxxxxxxxxxx"
      }, 
      "_default": {
          "link": "AppName"
      }
    }, 
    "global": {
      "parseVersion": "1.2.7"
    }
	}

You will need to retrieve `applicationId` and `masterKey` from your Parse.com console. 

It is **important** that the application name ("AppName" in the above example) are the same.

