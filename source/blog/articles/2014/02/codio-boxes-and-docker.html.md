---
title: Codio Boxes + Docker
author: Joel Moss
date: 2014-02-12
tags: 'Product News'
class_name: blog
full_width: true
image: https://www.docker.io/static/img/homepage-docker-logo.png
---

We're getting extremely close to publicly releasing Codio Boxes to you all. In this post, I want to explain how Codio Boxes work and how the amazing [Docker](https://www.docker.io/) is behind it all.

*Please note, that Codio Boxes are not yet publicly available, but are in private beta.*

## What's a Codio Box?

A Codio Box is created when you create a new project in Codio, and is started every time you open that project. This Box provides a 100% cloud-based, full-stack, server-side development environment. That's a mouthful, so lets break that down a little.

Each Box is an isolated development environment, running Ubuntu 12.04 and with full terminal access via a secure SSH connection - all right within Codio. Your project's code is mounted to this Box, which means you can manage your files and folders from the Terminal, or continue using the Codio IDE. So if you create a file from the Terminal, it will immediately show up in the file tree of the IDE, and vice versa.

And because the Box is isolated, you also have access to all the familiarity of your local or remote servers, and can install software, databases, programming languages and almost everything else you can do from any Linux based development machine.

Some examples of what you can do include:

- Running any [Node](http://nodejs.org/) based application
- Installing and running [Wordpress](https://wordpress.org/)
- Running [Grunt](http://gruntjs.com/) tasks
- Installing [Ruby on Rails](http://rubyonrails.org/) and running the Rails development server
- Creating a [MongoDB](http://www.mongodb.org/) or [MySQL](http://www.mysql.com/) database
- Build and compile [Go](http://golang.org/) applications
- Run your PHP application via Apache or Nginx
- Run a [RabbitMQ](http://www.rabbitmq.com/) queue
- Run a [MeteorJS](https://www.meteor.com/) application
- Develop and run code in C, Node, Ruby, Python, PHP, Go, Haskell, Java, Lua, Pascal, Rust, and Scala
- Run any and all Git or Mercurial commands
- *Plus loads more...*

The best thing about all this, is that every Codio project will have all this ready and waiting for you to use. You won't have to choose your stack or the type of Box you want. Just create a Codio project and you have access to it all.

**Instant gratification!**

![Codio Boxes](blog/todomvc.png)


## How is this Possible?

Most of this is only possible thanks to the amazing [Docker](https://www.docker.io/) project.

> Docker is an open-source engine that automates the deployment of any application as a lightweight, portable, self-sufficient container that will run virtually anywhere.

A Codio Box is simply a Docker container, built from a base image that we put together just for you, and just for Codio. And it's fast, very, VERY fast! The time it takes to create a new project is a matter of a few seconds. At which point, you can fire up the Terminal from your project and you have an SSH connection to your Box.

In fact, we reckon you won't notice the time difference between opening a project on Codio right now, and opening a project that has a Box attached to it. Using Docker allows us to provide an almost seamless experience to you, which is as close to your current development environment as we can possibly get, while taking full advantage of developing in the Cloud and the browser.

We can provide all this because we're being very intelligent about how we use Docker, and when your Boxes are running. Simply put, we only run your Box when you need it, which avoids wasting resources and keeps costs down. The savings of which we can pass straight on to you.

## I wanna' see!

We'll be launching Codio Boxes very, very soon, but until then, we've created a couple of tiny screencasts to show you how easy and fast Codio Boxes are.

- [Running a NodeJS app](https://player.vimeo.com/video/85953159?autoplay=1&hd=1)
- [Installing and running Ruby on Rails](https://player.vimeo.com/video/85998845?autoplay=1&hd=1)
- [Installing and running Wordpress](https://player.vimeo.com/video/86028855?autoplay=1&hd=1)