---
title: Consuming a component
class_name: docs
full_width: true
---

Once you have installed a Bower component, your project will include whatever extra code Bower decided should go in there. The screenshot below shows an example of a couple of components loaded into your project. All Bower components get loaded into the `bower_components` folder off the root of your project.

[TODO:screenshot on bower_components folde rin file tree]

Bower is unopinionated, so it does not help you actually load the modules. This is completely up to you. You could use require.js (and yes, there is a Bower component for this) or you could simply do

	<script src="bower_components/jquery/jquery.js"></script>

##Finding the component file I need
If you have not yet installed a component then read the earlier section [Finding a component](../finding) first.

###Shim/Nicely supported Components
If you have added a Shim component or one that is nicely packaged for Bower, then finding your component is easy. Take a look at the image at the top of the page. It is pretty clear where the .js files you want are located.

###Messily supported Components
A Bower component is responsible for telling Bower what files get loaded into your project. Bower simply does what it is told by the component's bower.json file.

As a result, some components load a lot of junk that seems (and often is) completely unnecessary for your project. This sometimes means you have to sort the wheat from the chaffe to find your script file.

There are two ways to find the files you need to reference within your project

- search laboriously through the folders - if the component has been nicely properly prepared, then there will not be too much stuff installed and it should be obvious
- open up the bower.json file and look for the `main` key where you will find one or more files listed.

Below is the `bower.json` file for handlebars.js. the `main` key contains the name of the main file(s) that your project will need to reference. In this example You can see that there is a source and runtime version you can load.

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

###Ask the Component owner to add Bower support
If you come across a component that install a lot of stuff you don't want, then raise a Github issue with that project and ask them to add a Shim Component as described in the [Finding a Component](../finding)  section.












