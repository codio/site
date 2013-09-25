---
title: Removing Apps
author: Joel Moss
date: 2013-07-02
tags: changelog
class_name: blog
full_width: true
image: blog/apps.png
---

Codio is based upon projects, with a project having any number of files and directories. Codio also has a concept of app's within a project, and that is what you see when creating a new project.

But for a long time now, app's have become somewhat of a pain during development and usage of Codio. A project must first have at least one app before it can have a file or directory, and then those files and directories must only be contained within an app.

This is confusing to you, and as Codio has evolved over the last few months, it's also become unnecessary, and has actually caused us more problems that it solves.

So we will very shortly be removing the concept of app's within a project, applying the following changes:

 - Any existing project that has **only one app**, will have that app removed, and all it's files and directories moved into the root of the project.

 - Any existing project with **more than one app** will have those app's changed to plain old directories.

 - New projects will no longer be created with an app, and instead all files and directories will be located at the project root.

We feel that this change will make things much more flexible for you, and will allow you to structure your projects in any way you please. It will also make things much simpler for all.

If all goes well, this change will take place later this week. [Follow us on Twitter](https://twitter.com/codiohq) for updates as they happen.

If you have any questions or queries, please [get in touch](mailto:support@codio.com), or leave a comment below.