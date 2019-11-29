---
title: "Debugging"
class_name: docs
full_width: true
---

Codio offers an integrated, language specific debugger. Codio currently supports the following languages.

- Java
- Python 2
- Python 3
- NodeJS
- C and C++

If you would like support for any languages that do not appear in the list, please [contact us](/docs/dashboard/support/) and we can look into adding it.

### Sample project
If you created the account for your Codio Trial account then you will find **Demo Codio Debugger** in your My Projects list. You will find instructions in the README.md file when you open the project.

If you cannot see it then [click here](https://codio.com/home/starter-packs/b83690d5-6ff5-4f86-970a-768292c70aec/) to create it now. Press the **Use Pack** button to install.

### Video overview
For anyone who has not used a debugger before, here is a useful video tutorial.

<iframe src="https://player.vimeo.com/video/165269077" width="640" height="408" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

### Prerequisites
If you install Java, C or NodeJS from a stack, then the GBD components that support debugging will be automatically installed. However, if you have installed these languages manually then when you run the debugger, you will get a warning telling you to install the GDB component. A link will be provided to the Install Software feature that allows you to install it with a single click.


<a name="debugfilepath"></a>

### Creating and managing debug targets
You should first configure a debug target. Having multiple debug targets is useful for the following reasons.

- It allows you to quickly debug the same application with different command line arguments, allowing you to test different scenarios.
- You can debug more than one application.

You manage debug targets from the following locations

- the rightmost toolbar menu item, select the **Configure...** option
- **Tools->Debugger Settings**

This will bring up the list of any debug targets you may have previously configured.

<img alt="authtoken" src="/img/docs/debug-targets.png" class="simple"/>

To create a new target, press the Create button. You can then configure your target. You can also edit any existing debug target. The following parameters can be configured.

- The programming language
- A friendly name to give the configuration
- The command to execute to your program along with any command line parameters you may wish to include
- Any command to execute before debugging starts. This is usually a compile process.
- You can also reference the active file in use using {{filepath}} token which inserts the path and full file name /path/to/file.ext

<img alt="authtoken" src="/img/docs/debug-target.png" class="simple"/>

When creating a new target, you are also shown the debugger port and instruction but these can typically be ignored.

### Single file confgurations
If you are using C, C++ or Java and debugging a simple single code file project (common in early programmng courses) then you should choose Single C File, Single C++ file or Single Java file Debugger Type. This frees you from having to worry about the detailed compile and run configuration.


#### Language specific compilation commands
If you are not using a single file configuration then you will need to provide the following information

- **Before Launch** will typically be a compilation or build command
- **Launch** will be the command to launch the program

In java you are asked for a port number, which should always be set to `5105`.

### Starting a debugging session
There are two ways you can launch an application in debug mode.

- from the rightmost toolbar menu you can select the debug target from the dropdown menu or just press the button to re-run the last executed debug target.
- from the debug targets list you can press the **Debug** button.

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

### Support for the standard input when debugging

Support for stdin is available for:

- C/C++ 
- Node.js 
- GDB

Node example:

```javascript
function testStdIn() {
    console.log("What is your name?");
    process.stdin.once('data', (chunk) => {
        let name = chunk.toString();
        console.log("Hello, " + name + "!");
    });
}

testStdIn()
```

### Launching the debugger from Codio content
It is also possible to launch any debugger configuration from a page. Please [click here](/docs/content/authoring/page-edit/buttons/) for details.



