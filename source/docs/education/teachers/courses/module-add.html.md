---
title: Adding a course module
class_name: docs
full_width: true
---

A course is a collection of modules. A module should cover a reasonably small amount of subject matter. It is better to have several smaller modules than a couple of huge ones that cover too much material.

A module is simply a Codio project. That project will likely contain 

- code workspace and files
- a [Codio Guide](../../guides) (an inbuilt authoring tool for writing multi-step content)

Press the 'Add' button to add a new module to your course.

![](docs/education/module-add.png)

You can then choose the source of your new module. The source can be any of the following options

- **Codio** : your project source is a Codio project. You should specify the project in the following format `Codio-Username/projectname` as appears in the url your project when opened in the Codio IDE. The simplest way to get this right is to open the Codio project that will be your module and copy and paste the URL from your browser address bar.
- **Git** : a Git repo URL. If using BitHub or BitBucket, this will be the HTTPS url.
- **Mercurial** : it is recommended you do not use this option.
- **ZIP** : a zip file that you will be prompted to upload.

##What happens next?
Once you have chosen a source for your module, a snapshot is made and is stored in a separate storage location. You do not need to worry about this as it is managed internally by Codio. 

You do need to be aware, though, that once you create a module, it is a **copy** of your source project and not a reference/link to it.



