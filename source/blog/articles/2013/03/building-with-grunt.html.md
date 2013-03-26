---
title: Building with Grunt
author: Joel Moss
date: 2013-03-26
tags: engineering
class_name: blog
full_width: true
image: http://gruntjs.com/img/grunt-logo.png
---

Grunt is an extremely useful tool that any self-respecting front-end developer should have in his/her arsenal. At Codio, we use it to concatenate, minify, lint, compile and build our client side code ready for deployment.

As part of last Friday's [weekly hack day](/blog/2013/03/our-twenty-percent-time/), I spent the day upgrading our Grunt installation and our custom tasks to the latest 0.4 version. So I thought I'd write a short article on what Grunt is and how we use it at Codio.

### What is Grunt?

It's a Javascript task runner, which simply means you can use it to automate your most mundane and common development and build tasks. The less work you have to do when performing repetitive tasks like minification, compilation, unit testing, linting, etc, the easier your job becomes.

Since version 0.4, Grunt has really matured and come out of its shell, and now boasts a large ecosystem of plugins that can help you automate pretty much anything you want. And if you don't find a plugin that does what you want, it's extremely easy to write one yourself.

### How to install Grunt?

Grunt runs on [NodeJS](http://nodejs.org/), and is installed and managed via [NPM](https://npmjs.org/). So if you haven't already, make sure you have both those installed.

To install Grunt, just use NPM:

    npm install -g grunt-cli

This will give you a handy little `grunt` command, which you will use to run your Grunt tasks.

### Preparing your Project for Grunt

A typical setup will require two files:

 - **package.json** - This file is used by NPM to manage your projects dependencies, and is also used by Grunt to manage its dependencies.
 - **Gruntfile.js** - This is where you define and configure your tasks.

Create a new file in the root of your project called `package.json`:

    {
      "name": "my-project-name",
      "version": "0.1.0",
      "devDependencies": {
        "grunt": "~0.4.1",
        "grunt-contrib-uglify": "~0.2.0"
      }
    }

This tells NPM that we depend on the `grunt` and `grunt-contrib-uglify` packages. Running the following will install these dependencies:

    npm install

Now create your `Gruntfile.js`, which also belongs in the root of your project alongside `package.json`. Fill the file with the following:

    module.exports = function(grunt) {

      // Project configuration.
      grunt.initConfig({
        uglify: {
          build: {
            src: 'src/script.js',
            dest: 'build/script.min.js'
          }
        }
      });

      // Load the plugin that provides the "uglify" task.
      grunt.loadNpmTasks('grunt-contrib-uglify');

      // Default task(s).
      grunt.registerTask('default', ['uglify']);

    };

Lets run through this file from top to bottom...

__Line 4__ is where we set define our configuration for the tasks we want to use. Each top level element defines a task. In our example, we have just one task `uglify`, which simply takes the value of `build.src`, runs it through the Uglify lib and places its output in a new file as specified with the value of `buil.dest`.

    grunt.initConfig({
      uglify: {
        build: {
          src: 'src/script.js',
          dest: 'build/script.min.js'
        }
      }
    });

__Line 14__ tells Grunt to load the `grunt-contrib-uglify` task from the NPM package specified in our `package.json`.

Then finally on __line 17__, we create a new `default` task, which is simply an alias for the `uglify` task. The `default` task will be run if you don't specify any task on the command line. So the following three commands are now identical:

    grunt uglify
    grunt default
    grunt

### Summary

Grunt has a great ecosystem of open source plugins, and a place to [find and search for the plugin you want](http://gruntjs.com/plugins). I strongly recommend that you take a look through them.

Hopefully from this simple example, you can see how easy and powerful Grunt can be. It's also worth noting that we have plans to implement a similar task based system directly into Codio. So watch this space!