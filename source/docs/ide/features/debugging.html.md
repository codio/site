---
title: "Debugging"
class_name: docs
full_width: true
---

Codio offers an integrated, language specific debugger. Codio currently supports the following languages.

- Java
- Python

We will be adding support for the following language between May 2016 and September 2016. If you would like support for any languages that do not appear in the list, please contact us and we can add it.

- NodeJS
- C and C++
- PHP


### Video overview
For anyone who has not used a debugger before, here is a useful video tutorial.

<iframe src="https://player.vimeo.com/video/165269077" width="640" height="408" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


### Creating and managing debug targets
You should first configure a debug target. Having multiple debug targets is useful for the following reasons.

- It allows you to quickly debug the same application with different command line arguments, allowing you to test different scenarios.
- You can debug more than one application.

You manage debug targets from the following locations

- the rightmost toolbar menu item, select the 'configure...' option
- Tools->Debugger Settings

This will bring up the list of any debug targets you may have previously configured.

<img alt="authtoken" src="/img/docs/debug-targets.png" class="simple"/>

To create a new target, press the Create button. You can then configure your target. You can also edit any existing debug target. The following parameters can be configured.

- The programming language
- A friendly name to give the configuration
- The command to execute to your program along with any command line parameters you may wish to include
- Any command to execute before debugging starts. This is usually a compile process.

<img alt="authtoken" src="/img/docs/debug-target.png" class="simple"/>

When creating a new target, you are also shown the debugger port and instruction but these can typically be ignored.

### Starting to debug
There are two ways you can launch an application in debug mode.

- from the rightmost toolbar menu you can select the debug target from the dropdown menu or just press the button to re-run the last executed debug target.
- from the debug targets list you can press the Debug button.

<img alt="authtoken" src="/img/docs/debug-launch.png" class="simple"/>


At this point, the debugger will fire up and you will see a screen similar to the one show below.

<img alt="authtoken" src="/img/docs/debug-started.png" class="simple"/>

You may need to wait a second or two for the debugger to load. It will automatically stop on the first line of code, regardless of whether there is a breakpoint set or not.

### Breakpoints
A breakpoint is a line of code where the debugger will pause code execution if in debug mode. To set a breakpoint you click in the gutter next to the line number. You can remove a breakpoint in the same way.

When a breakpoint is set, a red dot will appear on the line.

### Controlling the debugger
Once the debugger stops code execution you can control execution using the buttons at the top of the debug panel.

<img alt="authtoken" src="/img/docs/debug-buttons.png" class="simple"/>

- **Resume** - this tells the debugger to carry on execution without stopping until another breakpoint is encountered.
- **Stop** - execution will stop and the debug window will be closed.
- **Step over** - the debugger will execute the next line of code and then stop. If the line of code about to be executed is a function, then it will execute the contents of that function but will not stop within it unless the function contains a breakpoint.
- **Step into** - the debugger will execute the next line of code and then stop. If the line of code about to be executed is a function, then it will stop on the first line within that function.
- **Step out** - the debugger will exit the current function and stop on the next line of the calling function. If the current line is the main entry function of the application then execution will cease but and the debugger will restart automatically.

### Other features
The debug panel also contains other useful features.

- **Call stack** - this shows the parent functions relative to the function that contains the currently executing line of code.
- **Local variables** - all local variables of the current function and their current values are automatically displayed.
- **Watches** - this allows you to watch a specific variable, and for some languages also expressions, 
- **Breakpoints** - this lists all the breakpoints currently set in any of your code files. You can disable them by unchecking the boxes.
- **Console** - the console has two main functions; it displays status messages from the system in bold and your code can output data there by writing output to the console  (for example a `print('message')` statement in Python).






