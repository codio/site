---
title: Accessing Bower
class_name: docs
full_width: true
---

Bower functionality is accessed from the Tools->Bower menu. 

##Installable Components
Accessed from the Tools->Bower->Show Installable menu item, this allows you to search the entire Bower component registry. You can press the install button to install any components your project requires.

[TODO:installable]

- the Name field is clickable and will take you directly to the Git endpoint for that component, where you can read full details about the component.
- Description is used when searching
- Created, Updated, Forked and Stars are all taken from Github
- Install button can be clicked on to install to your project, whereupon it will change

###Dependencies
Note that Bower will automatically install any dependencies of an installed component. Dependencies will not show in the Installed Components tab, but the Codio file tree will show all components and their dependencies in the `bower_components` folder.

##Installed Components tab
This tab shows you all Bower components that are currently installed in your project. You can update any of your components by pressing the refresh button.

[TODO:installable]

Bower will not list dependencies in the Installed components tab. Dependencies will be automatically updated when you press the refresh button.