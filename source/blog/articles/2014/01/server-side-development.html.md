---
title: Server Side Development in Codio
author: Joel Moss
date: 2014-01-29
tags: Changelog
class_name: blog
full_width: true
---

Codio is the best web based IDE for client-side development. However, when it comes to server-side development, things start to get a little tricky. We currently provide no server-side environment where you can run your server code. Over the last few months we've been working hard to solve this problem, and this week we started opening up Codio Boxes to a select few beta testers.

We will be adding more beta users over the next few weeks. If you want in, drop [Ian](mailto:ijobling@codio.com) an email.

The solution has been far from easy, and has made an already complex infrastructure that little bit more complex. But we spent a lot of time thinking and planning the best solution we could possibly provide you. In this post, I want to briefly explain what the new Codio Boxes are and what benefits they will give you when they launch in February 2014.

## New and Shiny

First of all, the following new shiny stuff that will be available to you very soon...

### Docker

At the heart of every Codio project is the amazing [Docker](https://www.docker.io). We wanted every single project to have its own isolated server environment, with terminal access and the ability to do as much as you want without restriction. Docker lets us do just that.

When you create or open up a project, we spin up a Docker container at the same time. Open up the Codio Terminal and you now have a full-stack server-side development environment in the cloud. We provide a load of languages pre-installed for you, including NodeJS (via [NVM](https://github.com/creationix/nvm)) and Ruby (via [rbenv](https://github.com/sstephenson/rbenv)).

### Box Parts

Box Parts is a simple package manager that we provide, and gives you command line access to quickly install the most popular packages, including MongoDB, PostGreSQL, PHP, Redis and MySQL, [and loads more](https://github.com/codio/boxparts/tree/master/lib/autoparts/packages). There will be loads more available with more added over time.

Installing any of these packages is extremely fast, as we do all the time-consuming compilation steps for you. All you gotta do is install the binaries that we've created for you.

It's as easy as `parts install mysql`!

Box Parts is built with Ruby and is open source. Head on over to the [Github repo](https://github.com/codio/boxparts) to check it out. This is the place to request missing packages, or - even better - contribute!

### Runtime

Every project will also allow you to access your running processes via a public facing domain name. For example, if you want to run a Ruby on Rails server over port 3000, just install Rails and start the Rails server. Then point your browser to `YOURPROJECT.USERNAME.codio.com:3000`.

We will allow the port range `1024-4096` for your own services.

---

A future blog post will go into further detail about how we are achieving all this, and what technology we are using.
