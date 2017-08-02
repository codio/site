---
title: "Creating and importing a project"
class_name: docs
full_width: true
---

Create a new project, or import one by, clicking on the New Project button on the Dashboard.

<img alt="Create Project" src="/img/docs/project_create.png" class="simple"/>

You can then choose which of the following Project creation methods you want to use.

### Creating an empty project

Select a commonly used Stack from the available list:

For example:

- **LAMP:** LAMP Stack containing PHP, Apache and MySql with no code workspace.
- **Python:** Python Stack with no code workspace.
- **Empty Stack:** an empty Ubuntu Box with no code workspace (suitable for HTML/CSS/JS projects).

Projects created from a Stack will include an explanatory README.md file providing useful information to help you get started and will open automatically for newly created projects.

The list of stacks is only starting point. You can take any stack and then customize it from the command line. Users have sudo level privileges and so can install and configure exactly as they please.

Refer to the [section on Stacks](/docs/project/stacks) to learn how to create and manage your own software configuration templates.

### Importing code into a project

Click on the **'Click here....'** link to import or select an alternative software configuration:

- **Empty with Stack** will create a new project with a stack you select from the full stack options, rather than the limited options available on the main **New Project** screen.
- **Fork project** lets you create a new project from another of your projects.
- **[Starter Pack](/docs/project/packs/)** which is the combination of a Stack and a pre-configured code workspace.
- **Import** lets you import from Git, BitBucket, Mercurial, FTP, SFTP or from a Zip file.


<img alt="Import Project" src="/img/docs/project_create_other.png" class="simple"/>


### Selecting a Stack
If you have clicked on the **click here** link, you can then specify the Stack your new Project will be assigned.

### Details
You should give your project a name and a description, which will appear in the projects listing.


### Visibility
Projects that are public can be found by any Codio user. If you have a personal subscription or you are a member of an Organisation, you can mark the Project as private. In 'My Projects' you will see a padlock icon for any Projects that are private.

Organisation owners can disable the ability for you to create public projects. See [Public/Private Settings](/docs/teacher/create/public_private). 

You can assign access read, write and full admin rights (ability for others to access the Box from the terminal) to other users for private projects from within the IDE from the `Project->Permissions` menu.

