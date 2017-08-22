---
title: "Math Assessments"
class_name: docs
full_width: true
---

**FREDDY**

[STACK](https://github.com/maths/moodle-qtype_stack/blob/master/doc/en/About/index.md) is an open-source system for computer-aided assessment in Mathematics and related disciplines, with emphasis on formative assessment.

STACK was created by [Chris Sangwin](http://www.maths.ed.ac.uk/~csangwin/) of the University of Edinburgh, and includes the work of many [other contributors](https://github.com/maths/moodle-qtype_stack/blob/master/doc/en/About/Credits.md). A demonstration server is available in Edinburgh:  [https://stack.maths.ed.ac.uk/demo](https://stack.maths.ed.ac.uk/demo).

## Documentation

The [documentation is here](https://github.com/maths/moodle-qtype_stack/blob/master/doc/en/index.md)

### Sample Starter Pack
There is a Starter Pack project that you can add to your account. [Click here to install](https://codio.com/home/starter-packs/cc68d38b-b0ea-4825-9814-46a3594c2b11/) and **Use Pack** to create into your Codio account to review. This project contains examples for all types of auto-graded assessments as well as a Codio Guides cheat sheet.

### Basic setup
The screenshot below shows the basic configuration fields

<img alt="" src="/img/docs/guides/math-assessment.png" class="simple"/>

- **Name** is a short name that describes the test. This name will appear in teacher dashboards, so naming it clearly is important so teachers can see precisely which challenges are successfully met (or not) by students. In many cases, you do not want to see this text appear within the challenge text the student sees. To suppress this text, flip the **Show Name** switch next to the name field.
- **Question XML** is the question text that is shown to the student above the answers -written in XML.
- **Points** is the score given to the student if the code test passes. You can choose any positive numeric value.
- **One attempt only** allows the assessment to be run only once. This generally not advised unless you make it clear to the student that a failed test cannot be repeated. You should also provide a Run button in the Guide (or provide other instructions) so the user can test the code before running the actual assessment.
- **Show Expected Answer** will show the students the expected output when they have submitted an answer for the question. To suppress this, flip the switch.
- **Answer and Rationale** is where guidance for the assessment can be entered. This will be visible to the teacher when the project is opened using the [Open as Teacher](/docs/classes/unitmanagement/teachersolutions) method. This guidance information can also be shown to students after they have submitted their answer and also if they reload the unit after marking it as completed. To enable this, flip the **Show Answer and Rationale to Student** switch below the guidance field.
- **Blooms Level**
- **Learning Objectives**



