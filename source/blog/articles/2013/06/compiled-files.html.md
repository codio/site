---
title: Support added for CoffeeScript, Sass, SCSS etc.
author: Freddy May
date: 2013-06-29
tags: Changelog
class_name: blog
full_width: true
---

We're pretty pleased with the latest addition to the Codio IDE. This time, we've added support for the following compiled language types (or whatever the correct collective description is)

- CoffeeScript
- Sass
- SCSS
- Less
- Markdown

We're also ready to add more file types, so tweet [@codioHQ](http://twitter.com/CodioHQ) if you think we should add something.

##Take a look
What you see below is a real IDE, so play with it to see how we support compiled file types.

- Press the Preview menu option to run it and see how things are compiled on the fly
- Open up the example files (Less and CoffeeScript represented here)
- If you want it full size, <a href="https://codio.com/codio/CompilingExample/tree/app/example.coffee" target="_blank">click here</a> to see it in its own browser tab.

<div class="video">
  <div class="video-wrapper">
    <iframe width="950" height="600" src="https://codio.com/codio/CompilingExample/tree/app/example.coffee" style="margin:20px 0;"></iframe>
  </div>
</div>

##How it works
Its jolly simple! No build tasks, no separate processes to think about. Just code and run.

- You write your code in CoffeeScript, Less or whatever
- You reference anything that results in javascript by appending `.js` like this `<script src="example.coffee.js"></script>`
- You reference anything that results in CSS by appending `.css`like this `<link rel="stylesheet" href="style.less.css">`

Codio then compiles the files automatically on demand.

It really is jolly simple. Take a quick look at [User Guide](/docs/compiling/one-file/), too.

##What about production deployment?
Currently, all this only works in development mode. However, in a few weeks we'll have baked Grunt into Codio, so you will be able to configure build tasks really easily.

##Seeing compiled output
Its also really easy to see compiled JS or CSS output for one of your files. The [User Guide](/docs/compiling/one-file/) is the best place to get an explanation.
