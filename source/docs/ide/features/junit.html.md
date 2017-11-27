---
title: "JUnit Testing Framework"
class_name: docs
full_width: true
---

Codio provides a simple way to execute [JUnit](http://junit.org/junit4/) tests for Java in your project. 

To use JUnit, your project requires Java and so should 

- either use the [Java 8](https://codio.com/home/stacks/cf71b65b-ab7a-4f9b-9885-34009fccb476/?tab=details) stack 
- or you should have manually installed Java in your box 
- or install from **Tools>Install Software**. See [Installing Software Packages](/docs/ide/boxes/installsw/box-parts/) for more information

### Configuration
Open the JUnit dialog **Tools->JUnit** or use the **Shift+Alt+J** hotkey. Then configure the 

- **Source path** is the location of the student source code
- **Test source path** is the location of the test cases source folder
- **Library path** is the path to any libraries used by the student application
- **Working directory** is the path where the compiled student code should execute

All paths are relative to the root of the workspace folder.

<img alt="junit" src="/img/docs/junit.png" class="simple"/>

Individual test cases can be added 

- by specifying the paths to a file with JUnit tests in the add test case fields 
- or by dragging and dropping the file into the JUnit tab.

#### Timeout settings

The default timeout for JUnit execution is 30 seconds but you can change this as required in user or project preferences. You can also change the default hotkey to access JUnit if required as well

<img alt="junitsettings" src="/img/docs/junitsettings.png" class="simple"/>
To ensure that the same settings apply to students may use the project within a class, we would recommend you change this as a [project preference](/docs/ide/customization/project-prefs/)

### Execution
You can Execute the tests from the **JUnits Execution** tab. Once completed, the results will be listed below.

<img alt="junitexecute" src="/img/docs/junitexecution.png" class="simple"/>

If you publish your project as a unit to a class, the JUnit configurations you set up will be included in the Unit for students.