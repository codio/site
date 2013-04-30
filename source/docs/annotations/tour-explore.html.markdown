---
title: Tour & Explore modes
class_name: docs
full_width: true
---

When Codio detects an Annotations file, it will add the mode buttons to the top toolbar.

![mode buttons](/img/docs/mode-buttons.png)

There are 3 modes supported

- **Default** - This is the normal mode and allows you to work on your project fully. '@annotation' lines are revealed in source files. Any @annotation annotation lines are clickable in **default** mode, too.
- **Tour** - This gives the user a guided tour through the code. You can exit the tour at any stage by pressing the **Default** mode button or by closing down the tour popup window.
- **Explore** - You can explore both the project tree and the code and click on the 'i' icons to bring up the help window. 

##Tour Mode
Tour mode works by examining the annotations.codio file from top to bottom and looking for any '@annotation:tour' tokens. When it finds a token, it will display any annotation content in a popup window and if a label is specified with the token, it will display the associated code snippet.

![mode buttons](/img/docs/ca-popup-window.png)

Now, the user can navigate through the tour using the navigation buttons at the bottom of the window.  

There are two types of token formats for tours.

- **Source Matched** - if the token is of the format `@annotation:tour labelName`, then Codio expects to find a matching `labelName` in a project source file. 
- **Standalone** - if the token is of the format `@annotation:tour`, so no lableName specified, then Codio will display the tour item without displaying associated source code.

##Explore Mode
Explore mode allows the user to freely explore the project tree and file contents. Whenever a blue 'i' icon is shown in the file tree or the gutter of a source file, the user can click on it to bring up the annotation.

The main difference between Explore mode and Default mode, which also allows the icons to be clicked, is that the @annotation lines in the source files are hidden.

