---
title: Publish
class_name: docs
full_width: true
---

The publish process is slightly different for books and project units. As you can see from the screenshot below, a book unit can be identified in the unit listing by the book icon that appears next to the unit name.

## Updating book units
Book units are published from the books area. 

Let's say you have already published a book and created a unit from a part of that book. If you then make changes to the book and republish the book, those published changes are not automatically reflected in the course. If you want to update the unit, then need to press the **Update to latest version** button that appears on the right side of the unit.

<img alt="Book update" src="/img/docs/bookupdate.png" class="simple"/>

After pressing this, the books changes will be reflected in the unit. If you want these changes to be passed through to a class where the unit was previously added, then please [click here](/docs/classes/unitmanagement/upgradecourse) for details.

## Publishing project units

By default a project unit is not available to others until you explicitly publish it. This ensures that you can make changes, even after publishing, without the published course content being affected.

Publishing the unit takes a snapshot of the underlying project unit and assigns it a new version. Once published, you can make further edits to the unit without changes being visible in the published unit until you publish it again.

- Select the unit from the listing and then press **Publish**.

<img alt="publishnew" src="/img/docs/publishnew.png" class="simple"/>

- If you have previously published then you will see **Publish new version**

<img alt="versions" src="/img/docs/versions.png" class="simple"/>

### Describe changes
You should enter a brief description of the changes you made since the last publish of the unit. You can see the version history on the  [versions screen](/docs/courses/units/settings/).

### No stack modifications or you switched stack
If, in your project unit, you have 

- only made changes to the code workspace (the workspace is the contents of the file tree in the IDE or `/home/codio/workspace`)
- or you switched stack but did not make any stack modifications since switching, 

then you should

1. Enter the changelog text, which is a description of the changes made since the last publish.
1. Press the **Stack unchanged** button.
1. Press the **Publish Unit** button when ready.

<img alt="versions" src="/img/docs/stack_notmodified.png" class="simple"/>

### Stack modifications
If you have made any changes to the project's stack then you should press the **Stack modified** button. Please be aware that changes to the stack can be made indirectly by applications as well as manual file changes. For example, if you modified a database's contents that is not configured to live in the workspace area then these count as stack changes.

<img alt="versions" src="/img/docs/stack_modified.png" class="simple"/>

You should now decide whether you want to 

- create a new version of the stack used by the unit
- create a brand new stack for this unit. 

### Stack modified : New Stack Version
Note that if the stack you are using is not owned by you or you don't have permissions to modify the stack, then you will not be able to select this option.

You should enter a description of the stack changes made and then press **Publish Unit**. The new stack version will appear in your stacks listing in the normal way.

<img alt="versions" src="/img/docs/stack_newversion.png" class="simple"/>

### Stack modified: New Stack
If you do not have permissions to create a new stack version or you want to create a new stack that this and potentially other units should use, then select this option.

This will create a new stack with the permissions you specify. To give access only to others within your organization, select **Private** and then select the owner organization from the drop down list below.

It will take a few minutes to prepare the stack, so please be patient. Once it is created, it will be visible your stacks listing. 

You should **not** create a new stack for each unit in your course without good reason. You should instead, create a stack and then point all other units that share this stack configuration to point to the new stack. 

If you have differing configurations then create one single stack for a given configuration and then point units that use that configuration to the new stack.

<img alt="versions" src="/img/docs/stack_newstack.png" class="simple"/>

### IMPORTANT: Switching a unit's stack
Let's say you have one or more units and you decide to change the stack that they point to. You can switch the stack either from within the IDE (**Project->Stack settings**) or from the units listing (press the 3 blue dots and select **Change stack**).

Once this has been done, you need to publish your unit again to reflect this change. Having switched stack, you should select **Stack not modified** and then press **Publish Unit**.
