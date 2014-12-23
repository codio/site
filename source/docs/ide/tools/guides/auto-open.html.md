---
title: "Auto open/close files, preview, terminal"
class_name: docs
full_width: true
---

You can automatically perform any of the following actions when a section is shown

- Open or close files
- Open or close a Preview (including external websites)
- Open or close a Terminal window
- Run a terminal command in the background

##Open vs. Close
Windows can be opened and closed automatically to present the tab configuration you feel is most appropriate for the reader.

![](/img/docs/guide_files.png)

The Files dialog allows you to open or close by pressing the respective button on the bottom left of the dialog.

##Opening
You can open something by entering a file name and/or preview and terminal directives

```bash
example.js, index.html
```

or

```bash
example.js, #terminal, #preview
```

Any combinations are acceptable and they will be opened in the order specified.

If you wish to show an external website page, the preview directive supports this.
```
preview: https://codio.com
```

Please note, if the site you want to preview prevents embedding in an iframe then you won't be able to use `https` addresses, you would have to use `http` addresses instead although this can only open up in an external browser tab

You can add multiple open or close lines into your configuration to address most scenarios you are likely to encounter.

##Closing
The principles for closing files in nearly the same as for opening but which a few noteworthy points

- `#tabs` will close all opened tabs in all panels, except the Guide itself
- `#all` closes all tabs in the specifed (or default if left empty) panel
- specifying a file (files) but not a panel will close all occurrences of that file in all panels

##Running system commands
You can also specify a terminal command to run when a section is displayed. For example, your Guide might copy files into the root of your project from the .guides folder (which is hidden when a Guide is running) at a certain point in your Guide.

```bash
#cmd:cp ~/workspace/.guides/stages/example.js ~/workspace
#cmd:bash .guides/a-script.sh
```

You can also specify system commands in a new Terminal window like this

- `#terminal: ls -al`

##Specifying a panel
If your [layout](/docs/ide/tools/guides/layouts) for this page involves multiple panels, then you can also specify the panel number to display the file in.

If you leave the panel field empty, then the default panel will be chosen, which is the same as 0.

The panel order is left to right and then top to bottom and the last of all, the filetree (which you would rarely want to use).

**Important** : the first panel is 0, not 1.



##Highlighting Lines in your code
Coming very soon: To highlight one or more lines within an auto-opened file, you 

1. enter a piece of reference text, contained within your target file, into the 'Code reference ...' field
2. specify the number of lines, from that reference point, you want to highlight

Using reference text rather than a line number means that if you insert anything into your file in the future, the line number would be invalidated, whereas the reference is much less likely to be.

If there is any potential ambiguity with this approach, simply insert a comment which is guaranteed unique and reference that.
