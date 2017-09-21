---
title: "Open/close tabs from content"
class_name: docs
full_width: true
---

You can include links in your content to perform the same open and close actions as you do from the files dialog [IAN - which dialog?].

### Syntax Summary
The syntax is as follows and actions can be chained together using, separated by a `;`.

```
[Hyperlink text](open_file file1, file2; cmd ls -al)
```

### Opening directives
- `open_file file1 file2 fileN panel=0` where panel is optional, in which case the default panel (0) will be used if not specified.
- `open_preview file panel=0` where panel is optional, in which case the default panel (0) will be used if not specified.
- `open_terminal command panel=0` where command (a system command) is optional and where panel is optional, in which case the default panel (0) will be used if not specified.
- `cmd systemcommand argument1 argument2 argumentN` 

### Closing directives
- `close_all` closes all tabs in all panels, except the Guide itself.
- `close_all panel=0` closes all tabs in panel 0.
- `close_file file1` closes `file1` in all panels
- `close_file file1 file2 fileN panel=0` where panel is optional, in which case the default panel (0) will be used.
- `close_preview` behaves like `close_file` for preview tabs.
- `close_terminal` behaves like `close_file` for terminal tabs.

### Important - spaces and ; in file names and commands
If any of your files contain spaces in the names, then you should enclose the file name in double quotes

- `open_file "file name.txt"`

If you use `cmd` and the command has a `;` character in it, then you should also use quotes

- `cmd "cp file1 file2; cp file3 file4"`


### Examples

Open a file `file.txt`

```
[Click here](open_file file.txt)
```

Open a file `file.txt` in panel 1

```
[Click here](open_file file.txt panel=1)
```

Open a file `file.txt` in panel 1, with a code reference and highlight 3 lines

```
[Click here](open_file file.txt panel=1 ref="some text in your code" count=3)
```

Open files `file.txt` and `file2.txt`

```
[Click here](open_files file.txt file2.txt)
```

Open a file `file.txt` and preview of `file.txt` in panel 2

```
[Click here](open_file file.txt; open_preview file.txt panel=2)
```

Run a command then open a preview of `file.txt` in panel 2

```
[Click here](cmd cp source.txt target.txt; open_preview file.txt panel=2)
```

Open a Terminal window in panel 1

```
[Click here](open_terminal panel=2)
```

Close `file.txt` and open a preview `file.txt`

```
[Click here](close_file file.txt; open_preview file.txt)
```

Close all open files, previews and terminals in all panels, then open a file `file.txt`

```
[Click here](close_all; open_file file.txt)
```

Close all open files, previews and terminals, then open a file `file.txt`

```
[Click here](close_all; open_file file.txt)
```

Close all open files, previews and terminals that are in panel 2, then open a file `file.txt`

```
[Click here](close_all panel=2; open_file file.txt)
```