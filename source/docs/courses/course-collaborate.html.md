---
title: Collaborating on courses
class_name: docs
full_width: true
---

If more than one person intends to work on a course, then you should read the following information to understand how best to collaborate.

### Background
It is important to understand the background to the way courses are managed by Codio. 

If more than one person edits the unit then it is critical to understand that each person edits their own, personal copy of the unit and **not** the same physical unit.

When a unit is first created, the person that creates it will have an empty project (unless they forked or imported). If another person comes along afterwards and edits the unit, Codio will look to see if the unit has been published. 

If it has already been published, then a personal copy of that the published unit is made and that person can work on it. However, anyone else editing a unit for the first time will still get their own, separate personal copy of the latest published version.

If the unit has not yet been published, then any user editing the unit will get an empty project.

So, if you want to do basic collaboration in this manner, then you should note the following.

- If you have made changes and someone else intends to edit, then you must publish the unit before they start editing.
- You must then not make any further changes to the unit unless others have published their changes.

This approach works, but it is not robust and can lead to unexpected results if the process is not strictly adhered to and if the collaborators do not communicate clearly.

### The right way
The correct way to collaborate on a unit is to use Git. This gives you all of the many advantages of Git and ensures problem free collaboration.

A typical approach to setting up a brand new unit is as follows.

- Create a Git repository with GitHub, BitBucket or similar.
- Create a new unit and edit in the IDE.
- Open up a terminal window and initialize a git repo (`git init`).
- Create remote mapping to the repository you created in the first step.
- When you are ready, commit and push your workspace folder to the remote.

When others want to collaborate on the same unit, they will edit the unit. As we said above, if the unit has not been published, it will create an empty project. At this point, you would do the following.

- Use `git clone` (`git clone <repoURL > ./`) to clone the remote repository into your unit project. You will need to delete the README.md file created in the empty project before cloning the remote repository.
- This will pull in the content and also configure the remote.
- Carry on working and push the changes.

If the unit has already been published when someone else starts to work on a unit then the process is nearly the same. Rather than being empty, the project will be populated from the last published version of the unit.

- Use `git remote` to point the project to the remote.
- Pull in any changes from the remote to ensure it is fully up to date (if other users have made changes since the unit was published).
- Carry on working and push the changes.

You and others can now use git to collaborate without the need to publish at all. When the content is ready to publish, then the person who decides to publish will do the following.

- Edit the unit.
- Pull in any changes from the git repo to make sure your project it fully up to date.
- Go back to the unit in the Codio dashboard and publish.

See [Content Collaboration](/docs/content/collaboration) for more information.


