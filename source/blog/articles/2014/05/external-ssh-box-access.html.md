---
title: External SSH Box Access
author: Joel Moss
date: 2014-05-08
tags: Changelog
class_name: blog
full_width: true
---

We are excited to tell you that we have opened up Codio even more, and we now allow external SSH access directly to your Codio Boxes!

This means you can fire up any terminal client, from any computer, and connect securely via SSH to your Box.

![External SSH Box Access](blog/ssh.png)

Right now, we only allow authentication via good old SSH keys - which you should be using anyway to ensure high security. You will therefore need to upload your public SSH key to your Box. You can do this via the new `Project > Upload Public Key to the Box...` menu item. Just paste in your public key, and hit upload in the dialog that pops up.

You can now connect via SSH to your Codio Box using the unique SSH URL that your project has been assigned. You can find this in the welcome message of your Codio Terminal, or from the new Project Info dialog. This new dialog can be accessed via the `Project > Box Info` menu item.

Any questions? [Drop us a line](mailto:help@codio.com).

Documentation can be found [here](/docs/boxes/ssh-access)