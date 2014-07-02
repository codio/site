---
title: Clonable Boxes
author: Freddy May
date: 2014-07-02
tags: Changelog
class_name: blog
full_width: true
---

We are excited to announce a feature that many have been asking for over the last couple of months. Clonable Boxes, which requires a Codio subscription, lets users configure a Codio Box in any way they like and then allow that Box to be cloned by other users so a complete environment is ready to run without any installations or configurations whatsoever.

##How to make a Box clonable
To mark a Box as being clonable, you simply access your projects settings from the Dashboard (clicking the gear icon) or from the `Project > Settings` menu item. Simply check the "Allow Box Cloning" checkbox. If you do not have a Codio subscription you will be prompted to create one.

Anything that you may have created in your home folder, including Box Parts installations and configurations will be copied in the new fork. You can exclude files and folders by creating and editing a `.forkignore` file in the root of your project. Your SSH keys (the `.ssh` folder) are automatically excluded.

![clone](blog/clonable-boxes.png)

##Creating a cloned project
Cloning a Box does not require a subscription. To create a project based on a Clonable Box, open up the project you wish to fork, and then select the `Project > Fork` menu item.

The time taken to fork the project depends on the amount of components installed on that Box. It can range from a couple of seconds to 30 or 40 seconds for really large Boxes.

##Finding Clonable Projects
To make it easy to find which of your projects are clonable, we have added a column in the projects listing on the Dashboard. You can search on or sort by this column.
