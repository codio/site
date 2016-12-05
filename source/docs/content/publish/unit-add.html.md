---
title: Adding a unit
class_name: docs
full_width: true
---

Select a module and then enable the **Edit Units** slider. You can then add a new unit by pressing the **Add Unit** button.

## Specifying the Stack
The only thing that is not self-explanatory when adding a Unit is the Stack information. When you publish a Unit, Codio needs to know 

- which project is the source for the Unit
- and what Stack it uses.

<img alt="authtoken" src="/img/docs/stacks_list.png" class="simple"/>

It is important that you understand the concept of [Stacks](/docs/project/stacks/). In some cases, your project can use the default Codio Stack. However, if you have installed any software or components on your Box or have modified any files on the project's Box outside the `~/workspace` folder, you will need to create a Stack.

In most cases, you will use the same Stack for all projects in a Course and so you only need set up a single Stack. 

When you specify the Stack when adding a Unit, you simply locate this Stack by clicking on the Browse button and then selecting a Stack version.

## Stack Versions
You may have published Units that use a Stack configuration at some point in time. Later, you may decide you want to update the Box in a way that is not configurable with those earlier Units. 

In this case, you can create a new version of the Stack from your source Project without invalidating those earlier Units. You can then point the new Units to the newer version of the Stack.

