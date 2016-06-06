---
title: "Hiding folders"
class_name: docs
full_width: true
---

Your content will often want to show code samples. Codio's recommended approach is to put each set of code samples into a dedicated folder. Then, using the page settings, you can specify this folder with the consequence that all non-specified folders are hidden from view in the file tree (if you choose to show it).

The benefit of hiding folders is that the student is not distracted by folders and files that are not relevant to the topic your are explaining.

### Full File Tree:
![](/img/docs/guides/project_1.png)

### Hiding of Folders:
![](/img/docs/guides/project_2.png)

###  Defining folders
To define which folder(s) to show - any other folders are automatically hidden - first select a page. Next, in the Step Path field you specify the folder or folders which should be shown in the file tree. Use the `;` character to separate multiple folders.

<img alt="authtoken" src="/img/docs/guides/project_3.png" class="simple"/>

If you have several Guides sections that have the same folders shown, then you only need define the folders on the first section. All subsequent sections will use the same Step Path setting until a new one is encountered.
