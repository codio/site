---
title: "What is a Stack?"
class_name: docs
full_width: true
---


Every Codio box comes with a clean Ubuntu server. However, Codio lets you configure your box by adding Stack components. A Stack component is software that can be installed using the 'Install Software' option and typically covers languages, databases, web servers and many other components as [described here](/docs/ide/boxes/installsw).

If you explore your box from the terminal window (Tools->Terminal menu) you will see that the operating system files are all available in the root. However, these files are all read-only.

So, in summary, a Stack is everything that is installed into the `/home/codio` folder but *excluding* the `/home/codio/workspace` folder, which is where your code is installed.

##Node Packages, Ruby Gems etc.
If you were to install a Node Package globally or a Ruby Gem, then these will get installed into the `/home/codio` folder and will form a part of your Stack.

##Starter Packs
As explained above, a Stack does not include the `~/workspace` folder where your code lives. [Starter Packs](/docs/project/packs/) go one step beyond Stacks and allows you to combine both the Stack and a code workspace. This gives you the ability to define any number of Stack + Code templates.
