---
title: "What is a Stack?"
class_name: docs
full_width: true
---

It is very important to understand how Stacks work in Codio, especially when working with classes and courses. Incorrect usage can result in a project working when being edited but failing when assigned to a class.

A stack refers to the software configuration of a project server (Box). This incorporates everything on the server outside the code workspace (`/home/codio/workspace`) that you see in the IDE's file tree. 

You can [snapshot a box's stack](/docs/project/stacks/new) at any point and add it to the **Stacks** template library as we explain later.


### How a Codio project works.
When you create a new Codio project, course unit or book, you always specify a stack. The specified stack will contain the operating system (always) and other components such as languages, databases and tools.

[DIAGRAM WORKSPACE + STACK]


### Stack modifications
You will often want to make changes to the software on your server. Any such changes you, or an application, makes outside the workspace folder represents a stack change. Whether such changes are made using `sudo apt-get install`, manually editing a config file, changes to a database due to application usage etc., these changes all represent stack modifications.

[DIAGRAM ]

Any modifications you make will work fine on the project you are working on as the owner, but as soon as you assign that project or unit to a class of students, the modifications will not be transferred.

In order to address this, you need to ensure that any project with a modified stack first has a clean stack created that includes your modifications and that the project points to that clean stack.

The process for [creating a stack](/docs/project/stacks/new) and [switching the project to point to the new stack](/docs/project/stacks/switch) is straightforward.

### Use Case 
Let’s consider a MySQL database use case. If the database data location is in the usual place within the stack (`/var/lib/mysql/`) then when the project is assigned to the class, each student gets their own database, independent of others students, as you would expect. 

However, if the stack is changed for any reason (you, as project owner, change the stack or stack version or your change the stack for an already assigned unit) then all database data would be reset to the state of the new stack as the database data folder is not a part of the workspace.

If you want to keep the database independent of the stack, then you would need to locate the database file in the workspace folder itself (by editing `/etc/mysql/mysql.conf.d/mysqld.cnf`. This way, you could update the database software via a stack change but the database data remains intact when you switch stacks.

In summary, you should remember the following …

- Project = Selected Stack + Stack Changes + Workspace Folder
- When projects or units are assigned to a class then at the point of the assignment: Unit = Select Stack + Workspace (no stack modifications)
- Stack modifications in the source project or unit are **not transferred** when assigned to a class

Once the project or unit has been assigned to students, if they happen to make changes to their stacks, then each one is individually handled so there are no issues unless you or they select a new stack from **Project->Stacks->Stack settings**.

### Stacks and Stack Versions
When you create a brand new stack or a new stack version, in both cases you are creating a new stack internally. The only difference between a stack and a stack version is that the stack versions are nicely organized under an already named stack. This makes them easy to find and prevents your stack list getting unnecessarily long.

So, when refer to a stack in the documentation, we mean either a single stack or a stack version. Assigning a different stack version will also reset all project contents outside the workspace folder to those of the new stack version.

### What to do prior to assigning to a class
If you have modified the stack in any way, then there are a few use-cases that commonly occur when working with modified stacks prior to assigning to a class.

- **Projects**: generally speaking, if you have made any modifications then you should [create a new stack](/docs/project/stacks/new), [switch your project to the new stack](/docs/project/stacks/switch) once it is created and finally [assign it to the class](/docs/classes/unitmanagement/assign-project). This ensures maximum efficiency and speed. You do this from the class screen by pressing the large blue **+** button, then choosing **Add project as unit**. When you are asked if you want to use the projects stack or create a new stack, you can use the project’s stack as this is now clean. If you have not yet created a new stack to incorporate the modifications then you can create a new one when you add the project to a class, or select an existing one, by selecting **Create new stack**. It is good practice to go to your project and set it to point to this stack as soon as possible. It is much better practise to update the stack before you assign to the class, however. 
- **Course units** : you should always first [create a custom stack](/docs/project/stacks/new) and then [switch the unit’s stack](/docs/project/stacks/new), and any other units that use the same configuration, to the newly created stack. You can then [assign a course module](/docs/classes/unitmanagement/assign-module) (which assigns all its units) to the class.
- **Books** : if you are working with a book then the Book points to a stack. If you make any modifications, you have to create a new stack version (or new stack if appropriate) and then [switch your stack settings](/docs/project/stacks/switch) to point to the new stack version. Once this has been done, you should publish a new version of your book. The final step is to update the course to update all units that point to a book. 

### Switching Stacks
Remember, when you [switch a project’s stack](/docs/project/stacks/switch) from **Project->Settings->Stack settings**, all stack modifications that you may have made relative to the original stack will be replaced by the new stack. Usually this is fine as you would have first created the new stack from the project before switching. 

### Books
Codio Books are somewhat different. There is an explanation above on handling stack modifications for Books. You can [refer to the main Books section](/docs/content/authoring/books).


