---
title: "Creating a Stack"
class_name: docs
full_width: true
---

If you can't find an existing Stack that is ready to use, then you can configure Stack components within a Codio project and then add it to your Stack library.

To do this you will first need to

- Either create a new project and [install the software components](/docs/ide/boxes/installsw) into it.
- Or use an existing project. Once you have the [software components](/docs/ide/boxes/installsw) correctly configured, you are ready to add that project's Stack to the Stack library.

To create your new Stack, click the `New Stack` button at the top right of the Stack listing screen.

![Stacks Create](/img/docs/stacks_create.png)

When you have completed the required fields and pressed the `Create` button, we will generate a Stack image for you. This can take a minute or longer, depending on the size of the Stack image. You  do not need to wait on this screen while the Stack is created, so feel free to continue to other parts of Codio.

##Stack Blueprint
The first thing you will need to specify is the Codio project that you want to use for your Stack blueprint. Enter any part of your Project name and you will see them listed in a dropdown.

##Details, Image and Tags
Next, add a short name for your Stack and a longer description. You can also add a more detailed overview of your Stack by selecting the "add a long description" link. You can write this long description in Markdown and it can contain as much information about your Stack as you like.

You can also add an image to make your Stacks listing more instantly recognizable. This should be a square image, which will be reduced in size and will appear in a circle as shown below.

<img alt="authtoken" src="/img/docs/stacks_image.png" class="simple"/>

You can also add tags to your Stack. The tags should be component names ideally. There is an autocomplete function that will help you to use already defined tags to avoid tag duplication and ensure maximum efficiency when searching.

##Visibility
By default, Stacks are kept private to your account until you make them public, at which point they will appear in the **Popular** and **All** Stacks listings for all Codio Users.

If you want to keep your Stack private to your Organization, you can select the Private option and set the Owner option to your Organization.

**Important** : please do not make your Stacks public unless they are tried, tested and fit for public consumption so as not to fill the **All** listing with junk.


##Owner
By default, you will be the owner of this Stack and only you can edit it and [create new versions](/docs/dashboard/stacks/update) of the Stack.

If you want to allow others to see and administer your Stack, you can assign it to another user or to an Organization.
