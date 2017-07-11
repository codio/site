---
title: Units
class_name: docs
full_width: true
---

## Important changes from July 2017
If you have worked with Courses before July 2017 then you should read this section as the behaviour has changed significantly. It used to be that you created a project in your projects list and then created a unit by referencing the project. With the new approach, you now always manage your units from the units list and **not** the projects list. New units are also created from this area without the need to create a project.

If you previously created a unit from a project then you now edit this from the unit within the unit listing by selecting the unit and then pressing **Edit in IDE**. You will now be editing a clone of the last published version of the unit. The original project can now be ignored or even deleted.

From this point on, you will always use the Edit in IDE option from within the unit to edit the project. As you will see below, changes are not finalized until you explicitly publish the unit.

You should also note that changes to a unit are not available to others until you explicitly publish them as described below.

## Working with units
A unit behaves like a Codio project except it will not appear in your projects list. This allows you to create and manage course based content solely within the Courses area.

If you have a project that you want to convert into a unit, then the process is described below.

### Adding a new unit
You add a new unit by pressing the **Add Unit** button. You can either create a brand new unit or import an existing project into the unit. If you choose to import a project then a snapshot of that project is taken and you then work on the unit exclusively from the unit itself and not the project from which it was created.

** IAN - UPDATE AFTER NEW SCREENS FINALISED **

<img alt="UnitStart" src="/img/docs/unitstart.png" class="simple"/>

<img alt="UnitFork" src="/img/docs/unitfork.png" class="simple"/>

** IAN - ENDS **

You can also import in from other sources if for example you have work stored at GitHub/BitBucket/Mecurial etc by selecting the **Import** option.

### Publishing
By default the unit is not available to others until you explicitly publish it. This ensures that you can make changes, even after publishing, without the published course content being affected.

Publishing the unit takes a snapshot of the underlying unit project (you will not see this project in your project listing) and assigns it a new version. Once published, you can make further edits to the unit itself but these changes will not be available until you publish it once more.

You can publish in the following ways

- Within the IDE, go to **Education>Publish Unit** menu item
- Select the unit from the listing and then press **Publish**.

<img alt="publishnew" src="/img/docs/publishnew.png" class="simple"/>

- If you are on the Edit unit screen, press the **Publish new version** button.

<img alt="versions" src="/img/docs/versions.png" class="simple"/>

### Editing units

Editing unit content is always done from the unit itself. This applies to the unit content, done in the IDE, and the unit properties.

<img alt="editunit" src="/img/docs/editunit.png" class="simple"/>

- Select **Edit** to change the unit properties - title, description and icon.
- Select **Edit in IDE** to open the unit in the IDE. 

### Ordering units
You can change the order of the units within a module by dragging a unit into its desired position.

### Deleting units
Select **Delete** from the above screen to delete the unit. 

<img alt="deleteunit" src="/img/docs/deleteunit.png" class="simple"/>

You are required to enter a confirmation code to proceed and you can then do one of the following

- Select **Convert content to a project** to delete the unit and its content entirely. 
- Select **Delete content** to delete the unit and save the unit contents to your projects list. 

### Updating units assigned to a class
You may need to make changes to a unit that has already been assigned to a class. If this is the case then you should first publish a new version. This will in itself not change content that has already been started by students. To update the unit in the Class select **Update Unit** from the 3 blue vertical dots to the right of the unit listed in the class. See [Update Unit](/docs/teacher/classes/updateunit/) for more on this.

You should be aware that only the contents of the `.guides` folder will be updated in order to retain any student work that may have already started.

If you have made more substantial changes to the main code workspace and require that the students have their unit reset then, after publishing,  select the [Reset unit](/docs/teacher/classes/reset-unit) option from the class. You should be aware that any student work already started will be lost. 






