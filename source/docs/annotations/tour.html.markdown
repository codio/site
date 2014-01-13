---
title: Tour
class_name: docs
full_width: true
---

When Codio detects an Annotations file, the menu `Tools > Annotations Tour` will be enabled. If you click on it, the tour will start in a new tab in the currently active [Panel](/docs/panels).

The purpose of a tour is to allow someone to be guided through the file structure and code in a predefined sequence as laid out in the `annotations.md` file.

Codio examining the annotations.md file from top to bottom and looking for any '@annotation:tour' tokens. When it finds a token, it will display any annotation content in a popup window and if a label is specified with the token, it will display the associated code snippet.

![Codio Annotations](/img/docs/ca-overview.png)

Now, the user can navigate through the tour using the navigation buttons at the bottom of the window.

There are two types of token formats for tours.

- **Source Matched** - if the token is of the format `@annotation:tour labelName`, then Codio expects to find a matching `labelName` in a project source file.
- **Standalone** - if the token is of the format `@annotation:tour` then Codio will display the tour item without displaying associated source code.

##Full Screen
You can expand the tab to the full browser size by pressing the button to the right of the navigation icons.




