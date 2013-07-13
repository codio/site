---
title: Consuming a component
class_name: docs
full_width: true
---

Once you have installed a Bower component, your project will include whatever extra code Bower decided should go in there. The screenshot below shows an example of a couple of components loaded into your project. All Bower components get loaded into the `components` folder off the root of your project.

![]()

Bower is unopinionated, so it does not help you actually load the modules. This is completely up to you. You could use require.js (and yes, there is a Bower component for this) or you could simply do

	<script src="components/jquery/jquery.js"></script>

##Finding the component file I need
A Bower component is responsible for telling Bower what should get loaded. Bower simply does what it is told by the component's bower.json file.

As a result, some components load a lot of junk that seems (and often is) completely unnecessary for your project. This sometimes means you have to sort the wheat from the chaffe to find your script file.

There are two ways to find it

- search laboriously through the folders
- open up the bower.json file and look for the `main` key where you will find one or more files listed.

Below is the `bower.json` file for handlebars.js. You can see that there is a source and runtime version you can load.

	{
	  "name": "handlebars",
	  "version": "1.0.0",
	  "main": [
	    "handlebars.js",
	    "handlebars.runtime.js"
	  ],
	  "dependencies": {},
	  "gitHead": "872051b449e3f052dc763753a56752559df3bcf0",
	  "_id": "handlebars@1.0.0",
	  "readme": "ERROR: No README.md file found!",
	  "description": "ERROR: No README.md file found!",
	  "repository": {
	    "type": "git",
	    "url": "git://github.com/components/handlebars.js"
	  }
	}
