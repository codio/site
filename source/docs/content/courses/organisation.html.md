---
title: How are courses organised?
class_name: docs
full_width: true
---


Codio offers a 3 level hierarchy for organising and publishing course materials. 

- A **Course** is the top level and consists of a collection of Modules.
<img alt="authtoken" src="/img/docs/courses_small.png" class="simple"/>
- A **Module** will typically incorporate all the course materials to cover a logical area of a curriculum or coursework. It in turn consists of a collection of Units.
<img alt="authtoken" src="/img/docs/module_browser_small.png" class="simple"/>
- A **Unit** is the lowest level item of coursework. It will typically contain enough material to cover a particular topic or area of a curriculum or coursework. A Unit is taken directly from a Codio project.
<img alt="authtoken" src="/img/docs/units_small.png" class="simple"/>

Take a look at the '[Schools Computing Curriculum](https://codio.com/home/courses/557540466201adf25c93ccec/?tab=modules)' Course and you can see its associated Modules and, within each Module, the Units.


![Courses](/img/docs/courses.png)

![Units](/img/docs/units.png)

## Authoring your own content

Please read the [Authoring Strategies](/docs/content/authoring/strategies) section first. Ideally, you should also have read the full [Authoring](/docs/content/authoring) section and created your first project with Codio Guides, ready to be turned into a Unit.

## Course Visibility
When you create Courses, they are private by default and you are the owner, which means that only you can see them. In order for others to view them, you will need to grant permissions to others to access them. The following permissions can be granted.

1. **Private** - only you can see your Course/Modules.
1. **Public** - all Codio users can see your Course/Modules.

In addition to this, by changing the owner of the Course/Module to your Organisation:

1. A **Private** Course/Module will be visible to, and usable only by members of that Organisation. Additionally, owners of the Organization will be able to edit and administer the course/module.
1. A **Public** Course/Module will be visible to and usable by all, both inside and outside of your Organization, and it will be shown as belonging to the Organization. Additionally, owners of the Organization will be able to edit and administer the course/module.


## Direct Access vs. Classes
Having set your permissions, you should be aware of the two main ways others can then access the content.

1. A student can access the Courses/Modules from the dashboard and press the 'Start Unit' button having selected a Module.
1. A teacher can create a [Class](/docs/teacher/classes/create-class) and then assign a Module to that Class. Students can then access the Class from the Dashboard and access assigned Modules and their Units from there.

Generally speaking, class based scenarios should use the Class feature to save the student from having to search for the Course/Module. 

## Finding Courses
Select **Courses** from the dashboard. You will see that there are several tabs you can select.

1. **My Courses** lists only course created by you.
1. **Shared** lists courses that have been explicitly shared with you or any Organization you belong to.
1. **Recommended** lists courses that are created or recommended by Codio.
1. **All** lists courses that are Public or shared with you. This list will contain a lot of items, so you will usually want to know the name of the course you are trying to find and then use the search field. It will also search on tags (such as programming languages or topics).

If you then select a course, you are shown a list of modules. You can create new modules and add also add modules belonging to other courses to your course by selecting the **Edit Courses** slider.

## Modules
A module is a collection of units (the actual teaching content). Courses have at least one module and most have several modules.

If you select a modules, you will be shown all the units that make up that module. You can add new units to a module from this screen.

## Units
A unit is the actual teaching content. You can edit the descriptions as well as refresh the unit from its original source project.

## How Units are published and updated
When an author publishes a Unit, a copy of the source project is made and stored separately in the Codio platform. Any subsequent changes to the source project will not be seen, so it is safe to make changes without concern for how these changes will affect students who are already working on a Unit.

When you have finished updating the source project and are ready to update the Unit, you should find your Unit in its parent Module, press the Edit Units slider and then press Refresh Source. 

It could happen that a student starts on a Unit and afterwards the Unit's author updates the content. You should be aware that the student will not see any changes 

- while the author is updating the source project from which the Unit was taken
- if the Unit is subsequently updated from its source project. In order for the student to see the modified unit, the student's Unit project should first be deleted and then the Unit restarted. The drawback to this is that any assessments taken and the associated data is lost.




