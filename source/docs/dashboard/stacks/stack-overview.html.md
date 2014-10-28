---
title: "What is a Stack?"
class_name: docs
full_width: true
---

Every Codio box comes with a clean Ubuntu server. However, Codio lets you configure your box by adding Stack components. A Stack component is software that can be installed using the 'Install Software' option and typically covers languages, databases, web servers and many other components as [described here](/docs/boxes/installsw).

Codio does not give you sudo access to your box. However, you will find that this rarely affects you. We still allow you access to all important commands without requiring the sudo prefix. Furthermore, you can still [install software components](/docs/boxes/installsw).

If you explore your box from the terminal window (Tools->Terminal menu) you will see that the normal files are all available in the root. However, these files are all read-only. 

The area where all software Stack components are installed is in the `/home/codio` folder. If you run `ls -al` you will see that various components are already present (Node, Ruby etc.). This folder is also writable but if you were to delete any of the preinstalled components, they would be automatically replaced after you restart your box.

So, in summary, a Stack is everything that is installed into the `/home/codio` folder but *excluding* the `/home/codio/workspace` folder, which is where your code is installed.

##Node Packages, Ruby Gems etc.
If you were to install a Node Package globally or a Ruby Gem, then these will get installed into the `/home/codio` folder and will form a part of your Stack. 

##Starter Packs
As explained above, a Stack does not include the `~/workspace` folder where your code lives. [Starter Packs](/docs/dashboard/packs) go one step beyond Stacks and allows you to combine both the Stack and any software you have installed in your project to form an even higher level template. 



