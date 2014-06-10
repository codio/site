---
title: "Cloning Boxes"
class_name: docs
full_width: true
---

Subscribers can allow their box to be clonable when users Fork their Project.

The default Forking behaviour is to only fork and clone the project data - the files and directories within the `workspace` directory. As a project owner, you can allow the entire Box to be cloned aswell. This provides even more power to collaborate and a great way to share, and allow others to get started quickly without needing to install Box Parts and configure the Box.

##How to enable your box for cloning

To allow your box to be clonable, go to `Project > Settings` and check the `Allow Box Cloning` checkbox.

![Clone Settings](/img/docs/clone-settings.png)

**Be aware that allowing your Box to be cloned during forking may mean that sensitive data is made available to others.**

If you enable this option:

- All data within your Box will be cloned on every fork.
- The `.ssh` directory will **NOT** be cloned and will remain private.

## Ignoring files/directories

If you have data that you do not wish to be cloned, just create a `.forkignore` file in your project workspace, with the paths of files and directories that you wish to exclude from cloning. All paths are relative to the Box home `~/`, and each path should be on a line on its own.
