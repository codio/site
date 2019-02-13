---
title: "Parsons Problems"
class_name: docs
full_width: true
---

## What are Parson’s Problems?

Parson’s Problems are great formative assessments that ask students to arrange blocks of scrambled code - allowing them to focus on the purpose and flow of the code (often including a new pattern or feature) while not worrying about syntax.

Parson's Problems full documentation is available [here](http://js-parsons.github.io/documentation/)

## Assessment definition


<img alt="autofree text fields" src="/img/docs/guides/assessment_parsons.png" class="simple"/>

Setting up an assessment is very simple. As you can see from the screenshot above, you should specify the following details

- **Name** is a short name that describes the assessment. This name will appear in teacher dashboards, so naming it clearly is important so teachers can see precisely which challenges are successfully met (or not) by students. In many cases, you do not want to see this text appear within the challenge text the student sees. To suppress this text, flip the **Show Name** switch next to the name field.
- **Instructions** is the actual text that should be shown to the user, can be written in Markdown or HTML.
- The **Points** field is the number of points allocated for the question. You can choose any positive numeric value. 
- **One Attempt Only** can be used to restrict the student to answering the question once. If not enabled, students will be able to edit their answer until the Unit is marked as Completed.
- **Initial Values** is where you create the initial state of the puzzle for the students.
- **Options** is where you can set options for the puzzle. For the available options for each grader type, see [Parson's Problems](http://js-parsons.github.io/documentation/) documentation.
- **Grader** where you select the grader appropriate to the puzzle. See below for description of the graders
- **Answer and Rationale** is where guidance for the assessment can be entered. This will be visible to the teacher when the project is opened using the [Open as Teacher](/docs/classes/unitmanagement/settings-info/teachersolutions) method. This guidance information can also be shown to students after they have submitted their answer and also if they reload the unit after marking it as completed. To enable this, flip the **Show Answer and Rationale to Student** switch below the guidance field.


## Grader Description

### VariableCheckGrader

Grader that will execute the code and check variable values after that
    Expected and supported options:
        - ```vartests``` (required): array of variable test objects
    Each variable test object can/must have the following properties:
        - ```initcode```: code that will be prepended before the learner solution code
        - ```code```: code that will be appended after the learner solution code
        - ```message``` (required): a textual description of the test, shown to learner
    Properties specifying what is tested:
        - ```variables```: an object with properties for each variable name to be tested; the value of the property is the expected value
   or
        - ```variable```: a variable name to be tested
        - ```expected```: expected value of the variable after code execution

### TurtleGrader

A grader to be used for exercises which draw turtle graphics.
    Required options:
        - ```turtleModelCode```: The code constructing the model drawing. The turtle is initialized to modelTurtle variable, so your code should use that variable.
    Options that can be specified (that is, optional):
        - ```turtlePenDown```: a boolean specifying whether or not the pen should be put down initially for the student constructed code
        - ```turtleModelCanvas```: ID of the canvas DOM element where the model solution will be drawn. Defaults to modelCanvas.
        - ```turtleStudentCanvas```: ID of the canvas DOM element where student turtle will draw. Defaults to studentCanvas.
  
Grading is based on comparing the commands executed by the model and student turtle. If the executable_code option is also specified, the code on each line of that option will be executed instead of the code in the student constructed lines. Note, that the student code should use the variable ```myTurtle``` for commands to control the turtle in order for the grading to work.

### UnitTestGrader

Grader that will execute student code and Skulpt unit tests

### LanguageTranslationGrader

Code "Translating" grader

### LineBasedGrader

The "original" grader for giving line based feedback.

