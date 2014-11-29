---
title: "Creating and importing a project"
class_name: docs
full_width: true
---

Create a new project, or import one by, clicking on the Create Project button on the Dashboard as shown below.

![Create Project](/img/docs/project_create.png)

You can then choose which of the following Project creation methods you want to use

- **Empty Project** with no code workspace
- **Starter Pack** allows you to choose a Starter Pack to base your project on
- **Import** from Git, Mercurial, FTP or SFTP

##Selecting a Stack
If you have chosen either the Empty Project or Import options, you can specify a default Stack for your new Project. If you don't select one, you''ll get an empty Ubuntu Box.

##Details
You need to give your project a name and a description.

##Manual Save
By default, Codio auto saves your files as you type. However, there are two reasons why you would want to use manual save

1. You simply prefer manual save
2. If your project uses any watch process or compiles when a file is changes, then it is very important to enable manual save to prevent compilations occurring on each keystroke.

You can change to manual save with the IDE from the `Project->Settings` menu or from the Dashboard Projects listing by clicking the gear icon of the Project on the right hand side of the listing.

##Visibility
By default, your Project will be public, meaning it is findable by any Codio user. If you have a subscription, you can mark the Project as private. You can assign access read, write and full admin rights (ability for others to access the Box from the terminal) to other users for the Project from within the IDE from the `Project->Permissions` menu.
