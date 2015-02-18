---
title: "Pack Guidelines"
class_name: docs
full_width: true
---

When creating a Starter Pack, here are some ideas on strategy and how to make them as useful as possible.

## Starting Stack
When you create a Pack, you should first create a new Project from the closest Stack that meets your requirements. You can also use the Base Stack and then [install your own components](/docs/boxes/installsw/box-parts/).

## .codio file
It is often helpful to create a `.codio` file in the root of your project so that running common terminal commands and previewing can be accessed quickly and easily. [Information on this can be found here](/docs/boxes/runmenu/).

To enable your project to preview inside a Codio tab, you will need to configure the preview to run over https. We recommend this as being the default behavior as it will run both inside Codio and in a new browser tab this way. This will require you to configure any services to run on any port between 9500 and 9000.

The following `.codio` file is typical:

```json
{
// Configure your Run and Preview buttons here.

// Run button configuration
  "commands": {
        "Start Express Server": "npm start"
  },

// Preview button configuration
  "preview": {
        "Preview": "https://{{domain}}:9500/"
  }
}
```

Configuring the correct port in the range of 9500 to 9999 depends on the server side technology you are using.

## Create a new Stack
If you have installed or configured any components that are not a part of the code workspace, then you may want to create a special Stack that your Starter Pack uses. If you don't do this, then Projects that are created from the Starter Pack will need to have these modifications performed after Project creation. This might be an `npm install` if you are using Node.


## Use GitHub
Although you can use Codio as the source for your Starter Pack, we recommend pushing your Project to a Git remote. This gives better version control over time. The creation process is also somewhat faster.

When you create the Starter Pack, you can specify the Git url.

## Long Description
You should include a full description of your Starter Pack that appears when someone clicks on it within the Starter Packs listing. Check out some of Codio Certified Pack long descriptions.


## Write a Codio Guide
[Codio Guides](/docs/ide/tools/guides/) is a very powerful content authoring feature that lets you write course content that is fully integrated into the IDE. So if you are creating a Starter Pack for tuition purposes, a Guide is extremely useful and easy to use.

##README.md file
You should create a `README.md` file in the root of your project that displays helpful information the user can see when they open the project.

Below is a template you could use. 

```markdown
# Title
Put the name of your Pack here containing the primary technology or technologies with a version number, along with a short description. 

## Using the Pack
Describe how the user should get started. Point to your `.codio` menu options if you have created any.

## How the Pack was prepared
It can be helpful to others or even to you later on to describe how you built the Pack. What we often do is to include a set of instructions that can be pasted into a Bash script to recreate the Pack with a single command.

**Example** : This Starter Pack was built on the Node+Grunt+MongoDB Stack. We than ran the following commands before creating the Pack.

npm install -g express
npm install -g express-generator
express .
npm install

## Useful Links

- [Express site](http://expressjs.com/)
- [Node](http://nodejs.org/)
- [npm](https://www.npmjs.org/)
- [Grunt](http://gruntjs.com/)
- [MongoDB](https://www.mongodb.org)

```


