---
title: More Project Creation Options
author: Joel Moss
date: 2013-10-30
tags: 'Lab & Updates'
class_name: blog
full_width: true
image: blog/project-create.png
---

[Yesterday](/blog/2013/10/automatic-upload-ssh-key/) we added automatic upload of your Codio public key to any server of your choosing, and today we've added even more options to the project creation process. We want to make it faster and easier for you to get your code into Codio and begin coding as fast as possible.

So we now have six different ways to create a project in Codio:

1. **Template** - Create a project based on a selection of templates, which include HTML5 Boilerplate and a simple empty skeleton. We also have a special [Template account](https://codio.com/codio-templates), which include boilerplate code for some of the most popular open source frameworks, including EmberJS, FirefoxOS and Backbone. To use any of these, simply open the project and fork it via the `Project > Fork...` menu item.

2. **Git** - You can create a new project by cloning any Git repository - public or private. We support cloning over SSH and HTTP(S). This will also setup an `origin` Git remote so you can continue to push and pull between your new Codio project and it's Git repository.

3. **Mercurial** - Import code from any Mercurial repository.

4. **Zip** - Upload any zip file and we'll unzip it and create a new project with its contents.

5. **FTP and SFTP** - The newest option is to import from any FTP server. Just specify the server you wish to import from, and we'll do the rest. We even support SFTP, which means that you can connect securely using your Codio SSH public key.

