---
title: "Auto opening files"
class_name: docs
full_width: true
---

If you want to automatically open up one or more files when the current section displays, you can define which files to open by clicking on the 'Files' button in the header area.

[IMAGE WITH FILES CIRCLED AND DIALOG OPEN]

You are shown a dialog which allows you to specify

- which files you wish to open
- which, if any, lines you want to highlight within that file

To add a file, click the 'Add file' button and a new entry will appear in the list.

Specify the correct path to the file you want to open. This should have the following format (do *not* put a `/` at the start of the path). Here are two examples.

If you layout for this page involves multiple panels (which is a good idea), then specify the panel number to display the file in.

```
index.html
js/main.js
```

##Highlighting Lines
To highlight one or more lines within an auto-opened file, you 

1. enter a piece of reference text, contained within your file, into the 'Code reference ...' field
2. specify the number of lines, from that reference point, you want to highlight

Using reference text rather than a line number means that if you insert anything into your file in the future, the line number would be invalidated, whereas the reference is much kess likely to be.

If there is any potential ambiguity with this approach, simply insert a comment which is guaranteed unique and reference that.
