---
title: Overview
class_name: docs
full_width: true
---

Assuming you have a Codio project ready to publish, you should first understand Codio's 3 level publishing framework.

- A [Course](/docs/dashboard/courses/) is the top level and consists of a collection of Modules.
- A [Module](/docs/dashboard/modules/) will typically incorporate all the course materials to cover a logical area of a curriculum or coursework. It in turn consists of a collection of Units.
- A [Unit](/dashboard/modules/module-add/) is the lowest level item of coursework. It will typically contain enough material to cover a particular topic or area of a curriculum or coursework.

Before we start, you should understand that your Codio project needs to be pusblished as a Unit. In turn, your Unit will need to be a part of a Module.

So, the first thing you should do is to create a Module to contain your Units. You do not need to create a Course as well and it fact you only need to do so if your Course is large enough to warrant having more than one Module.

It is always a good idea to create a Course & Module outline document before you write too much content. This ensures your teaching materials have a balanced structure without too much content being in any one Unit or too many Units in one Module.

## Course & Module Visibility
When you create Courses and Modules, they are private by default, which means that only you can in fact see them. In order for others to view them, you will need to grant permissions to others to access them. The following permissions can be granted.

1. Private - only you can see your Course/Modules.
1. Private to Organization - only members of your Organization can see your Course/Modules.
1. Public - all Codio users can see your Course/Modules.

## Direct Access vs. Classes
Having set your permissions, you should be aware of the two main ways others can then access the content.

1. A student can access the Courses/Modules from the dashboard and press the 'Start Unit' button.
1. A teacher can create a [Class]() and then assign a Module to that Class. Students can then access the Class from the Dashboard and access assigned Modules and Units from there.

Generally speaking, class based scenarios should use the Class feature to save the student from having to search for the Course/Module. 

## Finding Courses/Modules
Select either Courses or Modules from the dashbaord. You will see that there are several tabs you can select.

1. **My Courses/Modules** lists only Courses/Modules created by you.
1. **Shared** lists Courses/Modules that have been explicitly shared with you or any Organization you belong to.
1. **Recommended** lists Courses/Modules that have been flagged by Codio as generally recommended.
1. **All** lists Courses/Modules that are Public or shared with you. This list will contain a lot of items, so you will usually want to know the name of the Course of Module you are trying to find and then use the search field. It will also search on tags (such as programming languages or topics).

## How Units are published
When an author publishes a Unit, a copy of the source project is made and stored separately on our systems. Any subsequent changes to the source project will not be seen, so it is safe to make changes without concern for how these changes will affect students who are already working on a Unit.

When you have finished updating the source project and are ready to update the Unit, you should find your Unit in its parent Module, press the Edit Units slider and then press Refresh Source.

## Updating Units
It could happen that a student starts on a Unit and during that time the Unit's author updates the content. You should be aware that the student will not see any changes a) while the author is updating the project that the Unit was taken from or b) if the Unit is updated from its source project. In order for the student to see the modified unit, the student's Unit project should first be deleted and then the Unit restarted.






