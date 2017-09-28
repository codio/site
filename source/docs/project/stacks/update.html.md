---
title: "Updating a Stack / Versions"
class_name: docs
full_width: true
---

Having created a new stack, you may later want to update the Stack properties or take another stack snapshot from a Codio project.

You can update your stack 

- from the **Stacks** area of the Codio dashboard
- from the IDE

### Updating from the dashboard

<img alt="Stacks Dashboard" src="/img/docs/stackdetails.png" class="simple"/>

To update the Stack, first select it from the stack list. You can then update the stack name or description fields by pressing the **Edit** button.

To create a new version of a stack, press the **New Version** button. Then choose the project from which the stack should be generated from the **Source** field. Add a comment describing what has changed since the last version. At that point, a new version will be generated. This can take a few minutes.

<a name="stackide"></a>
### Updating from the IDE
It is often simpler to update a stack from within the IDE and the project that you are currently working on. After you have finished making changes to your box (installing new components etc.) you can create a new stack version from the **Projects->Stack->Create New** menu.

<img alt="Stacks New Version" src="/img/docs/stacknewversion.png" class="simple"/>

You should now press the **New Version** button and enter some text to describe the stack changes since the last version.

It will take a few minutes to build the new version. If your stack is pointing to the latest version then you need not do anything more. If it is pointing to a specific stack version, then you will need to change the stack to point to either the 'latest version' or to the version of the stack that was just built. You do this from the the **Project->Stack->Settings** menu item.

## Viewing version history
You can view the version history of a stack by from the **Stacks** area of the Codio dashbaord. Select the stack from the listing and then click on the **Versions** link at the top of the page.

<img alt="Stacks Versions" src="/img/docs/stacks_versions.png" class="simple"/>