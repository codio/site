---
title: Collaborating on project units
class_name: docs
full_width: true
---

Controlling access to the editing of project units in a course is controlled from the module settings. Please note that the module permissions override the module permissions, so if a course is public and a module is private, then the units will be private.


[IAN / MAX - what is the inheritance rules if a course is owned by org but module not?]

<img alt="Module Edit" src="/img/docs/moduleedit.png" class="simple"/>


The rules for other users to edit a project unit in a course are as follows. 

- **Private** - only you can edit the project unit.
- **Private but organization is the owner** - any teacher in your organization can edit.
- **Public** - only you can edit.
- **Public but organization is the owner** - any teacher in your organization can edit. 


The ability to create public courses/modules can be enabled for the organisation. See [Public/Private setttings](/docs/dashboard/create/public_private) for more information.

<img alt="authtoken" src="/img/docs/manage_organization/public_private.png" class="simple"/>


If you want 2 or more people to collaborate on a project unit, you need to understand how Codio manages this process.

The key thing you need to realize is that unless you are familiar with Git, **only one user should make changes at a time**. If User A and User B want to collaborate, then they need to inform each other when they are working on the content. If they fail to do so, then one person will have to surrender their changes later on.

Let's say User A has authored a unit and has finished work. At this point, User A must publish the unit for others to be able to carry on from this point.


User B now makes changes to the unit. When done, User B should inform User A that the changes are complete and published. At this point, when User A opens the unit for editing, a dialog will appear showing that User B has published new changes. 

<img alt="publishedversion" src="/img/docs/publishedversion.png" class="simple"/>

<img alt="Book update" src="/img/docs/bookupdate.png" class="simple"/>


User A now wants User B to be able to collaborate. User A should inform User B that the unit is ready to edit. When User B accesses the unit, Codio will take a **snapshot** of the published unit and User B can start work on it. In other words, User B is **not** editing User A's unit, User B has a clone.

User B now makes changes to the unit. When done, User B should publish the changes in the same way that User A did. User B then informs User A that the changes are complete and published. At this point, when User A opens the unit for editing, a dialog will appear showing that User B has published new changes. A new snapshot is then taken and User A (or any other user for that matter) can editing.

The important point in this process is that any user who has made changes and wants other to see those changes should publish first.

Git offers a more flexible solution for collaboration but it requires familiarity with Git.
