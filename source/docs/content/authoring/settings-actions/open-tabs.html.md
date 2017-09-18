---
title: "Open tabs"
class_name: docs
full_width: true
---

You can automatically perform any of the following actions when a section is shown

- Close all open panels from the previous section.
- Open files.
- Open a Preview (including external websites).
- Open a Terminal window (including running terminal command in the background).
- Highlight lines you wish to highlight within each file.

You should also be aware that you can achieve the same actions from hyperlinks on a page. [Click here](/docs/content/authoring/page-edit/inline) for details.

### Page - Close Tabs
Enable this to close all panels open from the previous section

<img alt="closetab" src="/img/docs/guides/page.png" class="simple"/>

### Open Tabs

<img alt="opentab" src="/img/docs/guides/guide_files.png" class="simple"/>

Files can be opened automatically to present the panel configuration you feel is most appropriate for the reader.

The **Add Tab** button allows you to create multiple lines into your configuration to address most scenarios you are likely to encounter.

You can also drag and drop files in from your project file tree to the page to add them to the Open Tabs section so that file will be opened in a tab for the reader as well as Drag and Drop on the Open Tabs area in the content.

**Please note:** Image files dragged in to a page will be automatically tagged to display within the content rather than in a new panel. If you wish to have an image file open in a panel, then you would need to add it directly in the Open Tabs area. You can also drag/drop from the file tree. The correct path to the file will be included.

### Opening Files
To open files select the file type and enter the file name(s), including the path to the file if not in the root of the project workspace.

<img alt="openfile" src="/img/docs/guides/type_file.png" class="simple"/>

To open multiple files in the same panel enter in the following format.

```
index.html, main.css
```

### Previewing
To preview your project select the **Preview** Type. If you wish to show an external website page, use the **Preview** option, entering the appropriate URL.

<img alt="preview" src="/img/docs/guides/type_preview.png" class="simple"/>

```
https://codio.com
```

Please note, if the site you want to preview prevents embedding in an iframe then you won't be able to use `https` addresses, you would have to use an `http` address instead, in which case it will open in an new browser tab.

### Opening Terminal and running system commands
To open a Terminal window select the **Terminal** option.

You can also specify a terminal command to run when a section is displayed. For example, your tutorial may run bash scripts to copy files into the root of your project from the .guides folder (which is hidden when a tutorial is running) at a certain point in your tutorials.

<img alt="authtoken" src="/img/docs/guides/type_terminal.png" class="simple"/>

```
bash .guides/restore-sh prettier
```

You can also specify system commands in a new Terminal window like this

<img alt="authtoken" src="/img/docs/guides/terminal_command.png" class="simple"/>


### Highlighting Lines in your code
To highlight one or more lines within an auto-opened file, select the **Highlight** option and then

1. Enter a piece of reference text, contained within your target file, into the **Reference ...** field
2. Specify the number of lines, from that reference point, you want to highlight

<img alt="authtoken" src="/img/docs/guides/type_highlight.png" class="simple"/>


Using reference text rather than a line number means that if you insert anything into your file in the future, the line number would be invalidated, whereas the reference is much less likely to be.

If there is any potential ambiguity with this approach, simply insert a comment which is guaranteed unique and reference that.

Any combinations are acceptable and they will be opened in the order specified.

<a name="specifypanel"></a>
### Specifying the panel number
If your [layout](/docs/content/authoring/settings-actions/page/) for this page involves multiple panels, then you can also specify the panel number to display the file in.

<img alt="authtoken" src="/img/docs/guides/panel.png" class="simple"/>

If you leave the panel field empty, then the default panel will be chosen, which is the same as 0.

The panel order is left to right and then top to bottom and the last of all, the filetree (which you would rarely want to use).

**Important** : the first panel is 0, not 1.
