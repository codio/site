---
title: "JUnit Testing Framework"
class_name: docs
full_width: true
---

Codio provides a simple way to execute [JUnit](http://junit.org/junit4/) tests for Java in your project. 

To use JUnit, your project requires Java and so should use either the [Java 8](https://codio.com/home/stacks/cf71b65b-ab7a-4f9b-9885-34009fccb476/?tab=details) stack or have Java installed in your box that you can install using `Tools>Install Software`. See [Installing Software Packages](/docs/ide/boxes/installsw/box-parts/) for more information

### Configuration
Open the JUnit dialog `Tools->JUnit` or use the `Shift+Alt+J` hotkey, configure your program source files location, test cases source folder, path to libraries directory and working directory. These locations should all be the full path. 

<img alt="junit" src="/img/docs/junit.png" class="simple"/>

Test cases can be added by specifying the paths to a file with JUnit tests in the add test case fields or by drag and dropping the file to the JUnit tab.

When ready you can then Execute the tests and when completed the results will be shown on the JUnit Executions tab:
<img alt="junitexecute" src="/img/docs/junitexecution.png" class="simple"/>

If you publish your project as a unit to a class, the JUnit configurations you set up will be included in the Unit for students.