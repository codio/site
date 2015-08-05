---
title: "Creating a Pack"
class_name: docs
full_width: true
---

You can create a new Starter Pack by pressing the 'New Pack' button in the top right of the screen. Please refer to the [Pack Guidelines](/docs/dashboard/packs/guidelines) for details in how to approach Starter Pack creation.


##Selecting the Source
You need to tell Codio where to get its source code from. There are two options

- **Codio** : you have a Codio project where your code is located
- **Git/Mercurial** : you can specify a Git or Mercurial repo that gets pulled in afresh each time someone creates a new Project based on your Starter Pack.  **Please Note**: We strongly advise that you use the HTTPS URL to the repository. If you use the SSH URL any users that do not have their Codio SSH Key uploaded to the remote will not be able to create a project from this Starter Pack.

##Selecting a Stack
Each Starter Pack requires a [Stack](/docs/dashboard/stacks/). If you only need a base Ubuntu Box, then you do not need to specify a Stack.

Please be aware that a Starter Pack is simply a Codio Stack plus a code workspace. If you based your Starter Pack on a Project that has had the Box modified (aditional Box components installed, npn global install etc.), then these will not be present in a Project created from the Starter Pack.

##Description Details
You can add short and long descriptions as well as an image and tags. Tags are important and will allow you and others to find Packs in a more targeted fashion.

##Visibilty
By default, Starter Packs are kept private to your account until you make them public, at which point they will appear in the **Popular** and **All** Packs listings for all Codio Users. 

If you want to keep your Starter Pack private to your Organization, you can select the Private option and set the Owner option to your Organization.

**Important** : please do not make your Packs public unless they are tried, tested and fit for public consumption so as not to fill the **All** listing with junk.

##Ownership
You can specify whether other Codio Users within your Organization are able to access and Administer your Packs. If you are not a member of an Organization, this cannot be used.

##Write a Guide
[Codio Guides](/docs/tuts/author/) is a very powerful content authoring feature that lets you write course content that is fully integrated into the IDE. So if you are creating a Starter Pack for tuition purposes, a Guide is extremely useful and easy to use.