---
title: Grunt Tutorial
author: Freddy May
date: 2014-02-16
tags: Watercooler
class_name: blog
full_width: true
published: false
---

Grunt will be known to many developers but if you have not used it before, we've put together a detailed Grunt tutorial that shows a typical use case.

Grunt is a task runner that runs operations on your files. Grunt tasks can be applied to all of your front and back end code. Here are just a few of the many tasks that have been built by the Grunt community.

##About the Tutorial
The tutorial can be viewed instantly in Codio. You can go straight to it here

[http://codio.com/codio/grunt-tutorial](http://codio.com/codio/grunt-tutorial)

To actually run it (as opposed to reading about it), you should do the following

1. Signup for a free Codio account : 
1. Visit this link to view the project :
1. Goto `Project->Fork` to fork the project into your own account.

Full instructions are provided in the `README.md` file in the project.

##The Use Case
We take a very simple HTML5 web site and perform the following tasks to prepare it for production. 

1. [clean](https://npmjs.org/package/grunt-contrib-clean) - this cleans the contents of the `dist` folder where our production content is written to by Grunt
1. [copy](https://npmjs.org/package/grunt-contrib-copy) - we copy the entire contents of the `src` folder into the `dist` folder ready for processing
1. [concat](https://npmjs.org/package/grunt-contrib-concat) - we want to concatenate all `.js` and `.css` files into 2 individual files so that the site loads faster.
1. [uglify]() - minifies `.js` files
1. [cssmin](https://npmjs.org/package/grunt-contrib-cssmin) - minifies `.css` files
1. [rev](https://npmjs.org/package/grunt-rev) - cache busting of images, js and css file by prefixing file names with a hash to make them unique so nothing gets served up out of the browser cache when we deploy our new site release.
1. [usemin (html)](https://npmjs.org/package/grunt-usemin) - we need to fix up references to all concatenated & cache-busted files, which will have resulted in new files names.

Once these steps run, the `dist` folder will contain our production ready content ready for deployment.







