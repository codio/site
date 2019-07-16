---
title: "Parsons Puzzle"
class_name: docs
full_width: true
---

## What are Parsons Puzzles?

Parson’s Problems are available on Codio as Parsons Puzzles. Parson’s Problems are great formative assessments that ask students to arrange blocks of scrambled code, allowing them to focus on the purpose and flow of the code (often including a new pattern or feature) while not worrying about syntax.

Codio uses a client-side implementation of Parson's Problems named `js-parsons`, whose official documentation is available [here](http://js-parsons.github.io/documentation/). 

## Assessment definition

The configuration fields for an assessment are split into five sections: General, Execution, Grading, Metadata and Files.

### General

<img alt="" src="/img/docs/guides/assessment_general.png" class="simple"/>

- **Name** is a short name that describes the assessment. This name will appear in teacher dashboards, so naming it clearly is important so teachers can see precisely which challenges are successfully met (or not) by students. In many cases, you do not want to see this text appear within the challenge text the student sees. To suppress this text, flip the **Show Name** switch next to the name field.
- **Instructions** is the actual text that should be shown to the user. It can be written in Markdown or HTML.

### Execution

<img alt="" src="/img/docs/guides/assessment_parsons_exec.png" class="simple"/>

- **Initial Values** is where you create the initial state of the puzzle for the students.
- **Options** is where you can set options for the puzzle. For the available options for each grader type, see [Parson's Problems](http://js-parsons.github.io/documentation/) documentation.
- **Grader** is where you select the grader appropriate to the puzzle. Refer to the "Grader Description" section below for more details.

### Grading

<img alt="" src="/img/docs/guides/assessment_grading.png" class="simple"/>

- The **Points** field is the number of points allocated for the question. You can choose any positive numeric value. 
- **One Attempt Only** can be used to restrict the student to answering the question once. If not enabled, students will be able to edit their answer until the Unit is marked as Completed.
- **Answer and Rationale** is where guidance for the assessment can be entered. This will be visible to the teacher when the project is opened using the [Open as Teacher](/docs/classes/unitmanagement/settings-info/teachersolutions) method. This guidance information can also be shown to students after they have submitted their answer and also if they reload the unit after marking it as completed. To enable this, flip the **Show Answer and Rationale to Student** switch below the guidance field.

### Metadata

<img alt="" src="/img/docs/guides/assessment_metadata.png" class="simple"/>

The Metadata section contains fields that further describe the current assessment using a variety of factors:

- **Bloom's Level**: The options for this field correspond to the general levels of [Bloom's Taxonomy](https://cft.vanderbilt.edu/guides-sub-pages/blooms-taxonomy/), which is a comprehensive system of classification for educational content. Your selection in this field should reflect the Bloom's level of the current assessment.
- **Learning Objectives**:  What you enter in this field should reflect the specific educational goal of the current assessment. It is conventional that learning objective statements begin with "SWBAT" (Students Will Be Able To). For example, if an assessment asks the student to predict the output of a recursive code segment, then its Learning Objectives could be: _"SWBAT follow the flow of recursive execution"_.
- **Tags**: In addition to Bloom's Level and Learning Objectives, you may add arbitrary tags to an assessment. The existing tags, **Content** and **Programming Language**, are required. To add your own tags, click **Add Tag** and populate their names and values in the empty input boxes at the bottom.

### Files

Sometimes, an assessment requires external files to function correctly. For example, if you wish to include an image in an assessment's instructions, your assessment would require the image to be present; if you have a custom grading script for an [Advanced Code Test](/docs/content/authoring/assessments/assessments-code-tests/), your assessment would require the script to be present. The Files section allows you to specify the current assessment's file dependencies such that if the assessment is ever distributed to students or other instructors, its dependencies are also included.

<img alt="" src="/img/docs/guides/assessment_files.png" class="simple"/>

To mark a file to be included with the assessment, simply locate it in the file tree under **Project files** and tick the checkbox next to its name. Ticked files will appear under **Additional content**.

## Grader Description

### VariableCheckGrader
`VariableCheckGrader` is a grader that executes the code in the order submitted by the student and checks variable values afterwards.

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

<!-- Claire and Mohit's updates go here -->

### TurtleGrader
`TurtleGrader` is a grader for exercises that draw turtle graphics in Python.

Required options:

- ```turtleModelCode```: The code constructing the model drawing. The turtle is initialized to modelTurtle variable, so your code should use that variable.
Options that can be specified (that is, optional):
- ```turtlePenDown```: a boolean specifying whether or not the pen should be put down initially for the student constructed code
- ```turtleModelCanvas```: ID of the canvas DOM element where the model solution will be drawn. Defaults to `modelCanvas`.
- ```turtleStudentCanvas```: ID of the canvas DOM element where student turtle will draw. Defaults to `studentCanvas`.
  
Grading is based on comparing the commands executed by the model and student turtle. If the `executable_code` option is also specified, the code on each line of that option will be executed instead of the code in the student constructed lines. Note that the student code should use the variable ```myTurtle``` for commands to control the turtle in order for the grading to work.

### UnitTestGrader
`UnitTestGrader` is a grader that executes student code and Skulpt unit tests

### LanguageTranslationGrader
Code "Translating" grader

### LineBasedGrader
`LineBasedGrader` is a grader that treats student answers as correct if and only if they match the order and indentation found in **Initial Values**. For incorrect answers, it highlights the lines that were not ordered or indented properly.

### Sample Starter Pack
There is a Starter Pack project that you can add to your account that includes examples of Parson's Puzzle assessments.

- For Codio.com users: [Click here to install](https://codio.com/home/starter-packs/cc68d38b-b0ea-4825-9814-46a3594c2b11/) 
- For Codio.co.uk users: [Click here to install](https://codio.co.uk/home/starter-packs/7c69bc1a-7f20-4cd1-a726-63a1c056790f) 

and **Use Pack** to create into your Codio account to review.