---
title: "The Run menu item"
class_name: docs
full_width: true
---

A handy feature is the ability to add commonly used commands to the Codio IDE, akin to using the `alias` command from the command line.

##.codiorun file
The configuration for the Run button can be set by editing the `.codiorun` file in the root of your project.

The following code below shows the `.codiorun` file configured to give this Run menu

![run menu](/img/docs/run-menu.png)

which is driven by the following `.codiorun` file

	{
	    "default": "Run Lesson",
	    "commands": {
	        "Run Lesson" : "cd {{path}} && learnyounode select {{filename_no_ext}} > /dev/null && learnyounode run {{filename_no_ext}} ",
	        "Verify Lesson" : "cd {{path}}  && learnyounode select {{filename_no_ext}} > /dev/null && learnyounode verify {{filename_no_ext}}",
	        "Completed Lessons" : "learnyounode"
	    }
	}

When you select a Run command, it will open a new console window where you will see the output. Pressing the Run button will execute the last selected command.

##.codiorun Tokens
You can see from the above `.codiorun` sample that it is possible to insert tokens into the shell commands. The following tokens are currently available and operate on the currently selected file tab in the IDE

- `{{filepath}}` inserts the path and full file name `/path/to/file.ext`
- `{{path}}` inserts only the path to the selected file `/path/to/`
- `{{filename}}` inserts the filename with its extension `file.ext`
- `{{filename_no_ext}}` inserts the filename without the extension `file`



