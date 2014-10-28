---
title: "The Run menu item"
class_name: docs
full_width: true
---

A handy feature is the ability to add commonly used commands to the Codio IDE, akin to using the `alias` command from the command line.

##.codio file
The configuration for the Run (and Preview) button can be set by editing the `.codio` file in the root of your project.

The following code below shows the `.codio` file configured to give this Run menu

![run menu](/img/docs/run-menu.png)

which is driven by the following `.codio` file

        {
    // Configure your Run and Preview buttons here.

      // Run button configuration
      "commands": { 
        "Install Learnyounode" : "npm install -g learnyounode",    
        "Run Lesson" : "./ns-executes.sh run {{filename_no_ext}} {{path}}",
        "Verify Lesson" : "./ns-executes.sh verify {{filename_no_ext}} {{path}}",
        "Completed Lessons" : "learnyounode",
        "Run with Node" : "node {{filepath}} 3 4 5"
      }
    }

When you select a Run command, it will open a new console window where you will see the output. Pressing the Run button will execute the last selected command.

##.codio Tokens
You can see from the above `.codio` sample that it is possible to insert tokens into the shell commands. The following tokens are currently available and operate on the currently selected file tab in the IDE

- `{{filepath}}` inserts the path and full file name `/path/to/file.ext`
- `{{path}}` inserts only the path to the selected file `/path/to/`
- `{{filename}}` inserts the filename with its extension `file.ext`
- `{{filename_no_ext}}` inserts the filename without the extension `file`
- `{{domain}}` inserts the public url to your box; be aware that you will usually need to specify a port to reach a service running on your Box



