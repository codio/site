---
title: "Pack Guidelines"
class_name: docs
full_width: true
---

When creating a Starter Pack, here are some ideas on how to make them as useful as possible.

##Long Description
You should include a full description of your Starter Pack that appears when someone clicks on it within the Starter Packs listing. Check out some of Codio Certified Pack long descriptions.

##.codio file
It is often helpful to create a `.codio` file in the root of your project so that running common terminal commands and previewing can be accessed quickly and easily. [Information on this can be found here](/docs/boxes/runmenu/)

##Write a Codio Guide
[Codio Guides](/docs/ide/tools/guides/) is a very powerful content authoring feature that lets you write tutorial content that is fully integrated into the IDE. So if you are creating a Starter Pack for tuition purposes, a Guide is extremely useful and easy to use.

##README.md file
You should create a `README.md` file in the root of your project that displays helpful information the user can see when they open the project.

Below is a template you could use. 

```markdown
#Title
Put the name of your Pack here containing the primary technology or technologies with a version number, along with a short description. 

##Using the Pack
Describe how the user should get started. Point to your `.codio` menu options if you have created any.

##How the Pack was prepared
It can be helpful to others or even to you later on to describe how you built the Pack. What we often do is to include a set of instructions that can be pasted into a Bash script to recreate the Pack with a single command.

**Example** : This Starter Pack was built on the Node+Gunr+MongoDB Stack. We than ran the following commands before creating the Pack.

npm install -g express
npm install -g express-generator
express .
npm install

##Useful Links

- [Express site](http://expressjs.com/)
- [Node](http://nodejs.org/)
- [npm](https://www.npmjs.org/)
- [Grunt](http://gruntjs.com/)
- [MongoDB](https://www.mongodb.org)

```


