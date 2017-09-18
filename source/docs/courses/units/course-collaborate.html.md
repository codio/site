---
title: Collaborating on project units
class_name: docs
full_width: true
---

Controlling access to the editing of project units in a course is controlled from the course or module settings.

[IAN - screenshot.]
[IAN / MAX - what is the inheritance rules if a course is owned by org but module not?]

The rules for other users to edit a project unit in a course are as follows. 

- **Private** - only you can edit the project unit.
- **Private but organization is the owner** - any teacher in your organization can edit.
- **Public** - only you can edit.
- **Public but organization is the owner** - any teacher in your organization can edit. 


If you want 2 or more people to collaborate on a project unit, you need to understand how Codio manages this process.

The key thing you need to realize is that unless you are familiar with Git, **only one user should make changes at a time**. If User A and User B want to collaborate, then they need to inform the other that they are working on the content. If they fail to do so, then one person will have to surrender their changes later on.

Let's say User A has authored a unit. User A now wants User B to be able to collaborate. User A should first inform User B that the unit is ready to edit. When User B accesses the unit, Codio will take a snapshot of the published unit and User B can start work on it. In other words, User B is **not** editing User A's unit, User B has a clone.

User B now makes changes to the unit. When done, User B should inform User A that the changes are complete and published. At this point, when User A opens the unit for editing, a dialog will appear showing that User B has published new changes. 
COMPLETE

You can do this with as many users as you like, provided that only one user is making changes at a time.

Git offers a more comprehensive solution but it requires familiarity with Git.
