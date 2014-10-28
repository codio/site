---
title: "Karma"
class_name: docs
full_width: true
---


This tutorial shows you how to implement [Karma](http://karma-runner.github.io/0.12/index.html) and work with it in a Codio project. 

The main goal for Karma is to bring a productive testing environment to developers. The environment being one where they don't have to set up loads of configurations, but rather a place where developers can just write the code and get instant feedback from their tests. Because getting quick feedback is what makes you productive and creative.

##Select your Project

1. From the Codio Dashboard, select your project.


##Customize your Codio Project

Next to the help menu you should see the "Configure" option, if you don't see it click the little arrow near the end and then select "Configure".
![](/img/docs/customisecodio.png)

This opens a .codio file which you can customize. Replace the existing text with the text below:

	{
	// Configure your Run and Preview buttons here.
	
	// Run button configuration
	  "commands": {
		"Install Karma": "npm install karma --save-dev",
		"Install Karam-cli": "npm install -g karma-cli",
		"Initialise Karma": "karma init",
		"Karma Start": "karma start --no-browsers"
		"Karam Run": "karma run"
	  },
	
	// Preview button configuration
	  "preview": {
	"Karma Preview": "http://{{domain}}:8080"
	  }
	}

*If you wish, you can change the port for the `Karma Preview` entry, but make a note of the change as you will need to include that port in the `karma.config js` file later.*

Now you're all set, you can install Karma from the Codio menu. 

*If you already have Karma installed you can skip the installation and setup steps*

##Install Karma

From the Codio Menu (the 2nd from right button):

1. Select `Install Karma`
1. When completed, select `Install Karma-cli`


##Setup Karma
1. Select `Initialise Karma` and proceed to complete the set up questions. 

This will then create the `karma.config.js` file. If you wish to change any settings entered in the set up, you can do so by editing this file.

##Modify a couple of small things for Codio

We now need to make a small modification to get things to run smoothly on your Codio Box.

1. Open up `karma.config.js` 
1. Around Line 40, add

		// hostname for the server
		hostname: require('os').hostname() + '.codio.io',

1. Look for `// web server port` (usually below the above entry) and change the port to `8080` (or the port defined earlier in your `.codio` file if different).

Your `karma.config.js` will then look something like this:

	// Karma configuration
	// Generated on Wed May 28 2014 15:47:17 GMT+0000 (UTC)
	
	module.exports = function(config) {
	  config.set({

	    // base path that will be used to resolve all patterns (eg. files, exclude)
	    basePath: '',
	
	    // frameworks to use
	    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
	    frameworks: ['mocha', 'chai'],
	
	    // list of files / patterns to load in the browser
	    files: [
	      './*.js',
	      'test/*.spec.js'
	    ],
	
	    // list of files to exclude
	    exclude: [
	       ],
	
	    // preprocess matching files before serving them to the browser
	    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
	    preprocessors: {
	        },
	
	    // test results reporter to use
	    // possible values: 'dots', 'progress'
	    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
	    reporters: ['progress'],
	
	    // hostname for the server
	    hostname: require('os').hostname() + '.codio.io',
	      
	    // web server port
	    port: 8080,
	
	    // enable / disable colors in the output (reporters and logs)
	    colors: true,
	
	    // level of logging
	    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
	    logLevel: config.LOG_INFO,
	
	    // enable / disable watching file and executing tests whenever any file changes
	    autoWatch: false,
	
	    // start these browsers
	    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
	    browsers: ['PhantomJS'],
	
	    // Continuous Integration mode
	    // if true, Karma captures browsers, runs the tests and exits
	    singleRun: false
	  });
	};


##Start and Run Karma

From the Codio Menu (the 2nd from right button):

1. Select `Karma Start`

From the Preview button (the right hand button):

1. Select `Karma Preview`

Switch back into your Codio project and from the Codio Menu (the 2nd from right button):

1. Select `Karma Run`

and your tests will now execute.