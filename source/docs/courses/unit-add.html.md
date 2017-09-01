---
title: Units
class_name: docs
full_width: true
---

## Important changes from July 2017

If you have worked with Courses before July 2017 then you should read this section as the behaviour has changed significantly. It used to be that you created a project in your projects list and then created a unit by referencing the project. With the new approach, you now always manage your units from the units list and **not** the projects list. New units are also created from this area without the need to create a project.

If you previously created a unit from a project then you now edit this from the unit within the unit listing by selecting the unit and then pressing **Edit in IDE**. You will now be editing a clone of the last published version of the unit. The original project can now be ignored or even deleted.

From this point on, you will always use the **Edit in IDE** option from within the unit to edit the project. As you will see below, changes are not finalized until you explicitly publish the unit.

You should also note that changes to a unit are not available to others until you explicitly publish them as described below.

## Working with units
A unit behaves like a Codio project except it will not appear in your projects list. This allows you to create and manage course based content solely within the Courses area.

If you have a project that you want to convert into a unit, then the process is described below.

### Adding a new unit
You add a new unit by pressing the **Add Unit** button. You can either create a brand new unit or import an existing project into the unit. If you choose to import a project then a snapshot of that project is taken and you then work on the unit exclusively from the unit itself and not the project from which it was created.


<img alt="UnitStart" src="/img/docs/unitstart.png" class="simple"/>

<img alt="UnitFork" src="/img/docs/unitfork.png" class="simple"/>

You can also import in from other sources if for example you have work stored at GitHub/BitBucket/Mecurial etc by selecting the **Import** option.

### Publishing
By default the unit is not available to others until you explicitly publish it. This ensures that you can make changes, even after publishing, without the published course content being affected.

Publishing the unit takes a snapshot of the underlying unit project (you will not see this project in your project listing) and assigns it a new version. Once published, you can make further edits to the unit itself but these changes will not be available until you publish it once more.

- Select the unit from the listing and then press **Publish**.

<img alt="publishnew" src="/img/docs/publishnew.png" class="simple"/>

- If you have previously published then you will see **Publish new version**

<img alt="versions" src="/img/docs/versions.png" class="simple"/>

#### Only workspace changes made
If, in your unit project, you have only made changes to the workspace (the workspace is the contents of the file tree in the IDE or /home/codio/workspace) then you only need to enter the changelog text, which is a description of the changes made since the last publish.

If you have switched your unit project to use a new stack then you should select the **Stack not modified** option described below.

[IAN : SS of screen with Stack not modified pressed]

Press the **Publish Unit** button when ready.

#### Stack modified
If you have made any changes to the stack then you should press the **Stack modified** button. Please be aware that changes to the stack can be made indirectly by applications as well as manual file changes. For example, if you modified a database's contents that is not configured to live in the workspace area then these count as stack changes.

[IAN : SS of sreen with Stack was modified pressed]

You should now decide whether you want to 

- create a new version of the stack used by the unit
- create a brand new stack for this unit. 

#### Stack modified : New Stack Version
Note that if the stack you are using is not owned by you or you don't have permissions to modify the stack, then you will not be able to select this option.

You should enter a description of the stack changes made and then press **Publish Unit**. The new stack version will appear in your stacks listing in the normal way.

[IAN : SS of screen where the user is able to create a new stack version]

#### Stack modified: New Stack
If you do not have permissions to create a new stack version or you want to create a new stack that this and potentially other units should use, then select this option.

This will create a new stack with the permissions you specify. To give access only to others within your organization, select **Private** and then select the owner organization from the drop down list below.

It will take a few minutes to prepare the stack, so please be patient. Once it is created, it will be visible your stacks listing. 

You should **not** create a new stack for each unit in your course without good reason. You should instead, create a stack and then point all other units that share this stack configuration to point to the new stack. 

If you have differing configurations then create one single stack for a given configuration and then point units that use that configuration to the new stack.

[IAN : SS of screen with new stack.]


#### IMPORTANT: Switching a unit's stack
Let's say you have one or more units and you decide to change the stack that they point to. You can switch the stack either from within the IDE (**Project->Stack settings**) or from the units listing (press the 3 blue dots and select **Change stack**).

Once this has been done, you need to publish your unit again to reflect this change. Having switched stack, you should select **Stack not modified** and then press **Publish Unit**.


### Editing units
Editing unit content is always done from the unit itself. This applies to the unit content, done in the IDE, and the unit properties.

Select the unit to open the unit.

If there is a later version of the unit that has been published, you can elect to open the latest published version or the last version you edited


<img alt="publishedversion" src="/img/docs/publishedversion.png" class="simple"/>



### Unit Settings

Additional actions for the unit are available by clicking on the 3 vertical blue dots 

### Edit settings

<img alt="editsettings" src="/img/docs/editsettings.png" class="simple"/>

Select **Edit settings** to change the unit properties - title, description and icon.

### Versions

<img alt="versionstab" src="/img/docs/versionstab.png" class="simple"/>
The versions tab will show details of:

- date/time when the unit was published,
- name of the person who published the unit,
- the name and version of the stack assigned to the unit.

<img alt="versions" src="/img/docs/versiondetails.png" class="simple"/>


### Deleting units

<img alt="deletetab" src="/img/docs/deletetab.png" class="simple"/>
Select **Delete** from the above screen to delete the unit. 

<img alt="deleteunit" src="/img/docs/deleteunit.png" class="simple"/>

You are required to enter a confirmation code to proceed and you can then do one of the following

- Select **Convert content to a project** to delete the unit and its content entirely. 
- Select **Delete content** to delete the unit and save the unit contents to your projects list. 

### Ordering units
You can change the order of the units within a module by dragging a unit into its desired position.

### Updating units assigned to a class
You may need to make changes to a unit that has already been assigned to a class. If this is the case then you should first publish a new version. This will in itself not change content that has already been started by students. To update the unit in the Class select **Update Unit** from the 3 blue vertical dots to the right of the unit listed in the class. See [Update Unit](/docs/classes/unitmanagement/updateunit) for more on this.

You should be aware that only the contents of the `.guides` folder will be updated in order to retain any student work that may have already started.

If you have made more substantial changes to the main code workspace and require that the students have their unit reset then, after publishing,  select the [Reset unit](/docs/classes/unitmanagement/reset-unit/) option from the class. You should be aware that any student work already started will be lost. 