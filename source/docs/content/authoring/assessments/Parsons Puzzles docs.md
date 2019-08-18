# Parsons Puzzles

Parsons Puzzles are available on Codio in the "add assessments" dropdown menu. Parson’s Problems are great formative assessments that ask students to arrange blocks of scrambled code or other text, allowing them to focus on the purpose and flow of the code (often including a new pattern or feature) without worrying about syntax. [^1]

Full documentation is available [here](https://js-parsons.github.io/documentation/)

(Note: this documentation is unfinished)

## Assessment Definition

![Blank Assessment](https://codio.com/img/docs/guides/assessment_parsons-0fc593e1.png)

- **Name** is a short name that describes the assessment. This name will appear in teacher dashboards, so naming it clearly is important so teachers can see precisely which challenges are successfully met (or not) by students. In many cases, you do not want to see this text appear within the challenge text the student sees. To suppress this text, flip the **Show Name** switch next to the name field.

- **Instructions** contains the instructions that will be shown to the student. These can be written in Markdown or HTML.

- **Points** is the score given to the student if the student answers the assessment correctly. You can choose any positive numeric value. A 0 score is given if any of the responses is incorrect.

- **One Attempt Only** can be used to restrict the student to answering the question once. If not enabled, students will be able to edit their answer until the Unit is marked as Completed.

- **Initial Values** is where you create the initial state of the puzzle for the students.

- **Options** is where you can set options for the puzzle. For the available options for each grader type, see [Parson’s Problems](http://js-parsons.github.io/documentation/) documentation or the next section of this page.

- **Grader** is where you select the desired grader. See below for descriptions thereof.

- **Answer and Rationale** is where guidance for the assessment can be entered. This will be visible to the teacher when the project is opened using the [Open as Teacher](https://codio.com/docs/classes/unitmanagement/settings-info/teachersolutions) method. This guidance information can also be shown to students after they have submitted their answer and also if they reload the unit after marking it as completed. To enable this, flip the **Show Answer and Rationale to Student** switch below the guidance field.

  

## Grader Descriptions

### LineBasedGrader

The original line-based grader marks a student's answer correct if the order of lines in their solution exactly matches the order you specified in **Initial Values**. The lines you type in this field will automatically be shuffled every time the page is reloaded or the question is reset after you create the assessment. Here are the options we used to create a basic assessment using this grader:

![1562766199976](C:\Users\csb53\AppData\Roaming\Typora\typora-user-images\1562766199976.png)

You can name "sortableID" and "trashID", whatever you want; we call them "sortable" and "sortableTrash", respectively. "max_wrong_lines" I have no idea what this does. Selecting "displayErrors" for "feecback_cb" will configure the question so that students are shown where they went wrong. Select true for "can_indent" if you solution involves indentation and false otherwise.

### VariableCheckGrader

the same thing but vars

### UnitTestGrader

unit tests

### LanguageTranslationGrader

language translation

### TurtleGrader

turtle grading! Yay!



## Sample Starter Pack

There is a Starter Pack project that you can add to your account that includes examples of Parson’s Puzzle assessments.

- For Codio.com users: [Click here to install](https://codio.com/home/starter-packs/cc68d38b-b0ea-4825-9814-46a3594c2b11/)
- For Codio.co.uk users: [Click here to install](https://codio.co.uk/home/starter-packs/7c69bc1a-7f20-4cd1-a726-63a1c056790f)

and **Use Pack** to create into your Codio account to review

[^1]:Stolen from the previous version of Codios Parsons Puzzles documentation