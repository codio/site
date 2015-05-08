---
title: "Auto open/close files, preview, terminal"
class_name: docs
full_width: true
---

You can automatically perform any of the following actions when a section is shown

- Control the visibily of folders in the tutorial
- Open files
- Open a Preview (including external websites)
- Open a Terminal window (including running terminal command in the background)
- Highlight lines you wish to highlight within each file
- Close all open tabs from the previous section


##Step Path
If your tutorial has multiple folders, you may wish to show certain folders in your section(s) to avoid confusion.

To show specific folder(s), enter the folder name(s) into the step path field to show that folder and any content (Multiple folders can be shown separated by `;` ie `folder1;folder2`).

All folders will be hidden other than those entered in the step path field.  If not used in a section, the same folder(s) as specified in the previous section will be shown to save you having to manually set it each time.

##Open Tabs
Windows can be opened automatically to present the tab configuration you feel is most appropriate for the reader.

![](/img/docs/guides/guide_files.png)

The Add button allows you to create multiple lines into your configuration to address most scenarios you are likely to encounter.

##Opening Files
To open files select the 'File' type and enter the file name(s)

![](/img/docs/guides/type_file.png)

```bash
index.html, main.css
```
##Previewing
To preview your project select the 'Preview' Type. If you wish to show an external website page, the preview type supports this.

![](/img/docs/guides/type_preview.png)

```
 https://codio.com
```

Please note, if the site you want to preview prevents embedding in an iframe then you won't be able to use `https` addresses, you would have to use `http` addresses instead although this can only open up in an external browser tab

##Opening Terminal and running system commands
To open a Terminal window select 'Terminal' Type.  

You can also specify a terminal command to run when a section is displayed. For example, your Guide may run bash scripts to copy files into the root of your project from the .guides folder (which is hidden when a Guide is running) at a certain point in your Guide.

![](/img/docs/guides/type_terminal.png)

```bash
bash .guides/restore-sh prettier
```

You can also specify system commands in a new Terminal window like this

![](/img/docs/guides/terminal_command.png)


##Highlighting Lines in your code
To highlight one or more lines within an auto-opened file, select 'Highlight' type and then  

1. enter a piece of reference text, contained within your target file, into the 'Reference ...' field
2. specify the number of lines, from that reference point, you want to highlight

![](/img/docs/guides/type_highlight.png)


Using reference text rather than a line number means that if you insert anything into your file in the future, the line number would be invalidated, whereas the reference is much less likely to be.

If there is any potential ambiguity with this approach, simply insert a comment which is guaranteed unique and reference that.

Any combinations are acceptable and they will be opened in the order specified.


##Close Tabs
Enable this to close all tabs open from the previous section


##Specifying a panel
If your [layout](/docs/ide/tools/guides/layouts) for this page involves multiple panels, then you can also specify the panel number to display the file in.

![](/img/docs/guides/panel.png)

If you leave the panel field empty, then the default panel will be chosen, which is the same as 0.

The panel order is left to right and then top to bottom and the last of all, the filetree (which you would rarely want to use).

**Important** : the first panel is 0, not 1.
