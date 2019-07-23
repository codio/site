---
title: "Fill in the blanks"
class_name: docs
full_width: true
---


A 'fill in the blank' question comes in two flavours.


## Free Text
The example below shows a typical question where the student has to complete the missing words. This is then auto-marked by the Guide as explained below.

<img alt="authtoken" src="/img/docs/guides/assessments-fitb1.png" class="simple"/>

## Drop Down
The example below shows a variation, where the student is given a list of possible answers and has to select the right answer from a drop down list of possible answers. This is then auto-graded as explained below.

<img alt="authtoken" src="/img/docs/guides/assessments-fitb2.png" class="simple"/>

## Assessment definition
The configuration fields for an assessment are split into five sections: General, Execution, Grading, Metadata, and Files.

### General

<img alt="" src="/img/docs/guides/assessment_general.png" class="simple"/>

- **Name** is a short name that describes the assessment. This name will appear in teacher dashboards, so naming it clearly is important so teachers can see precisely which challenges are successfully met (or not) by students. In many cases, you do not want to see this text appear within the challenge text the student sees. To suppress this text, flip the **Show Name** switch next to the name field.
- **Instruction** contains any general instructions you want to provide to the student.

### Execution

<img alt="authtoken" src="/img/docs/guides/assessment_fitb_exec.png" class="simple"/>

**Text** is the Markdown that you write including the correct answer specification. Below is an example of how the question should be specified.

`A prime number (or a prime) is a <<<natural>>> number greater than <<<1>>> that has no positive divisors other than <<<1>>> and <<<itself>>>.`

For a free text question (**Show Possible Values** slider to the left), Codio shows blank text fields. The student should then enter the correct text. Codio ensures that the response is case insensitive. For obvious reasons, the longer and more complex the correct answer, the easier it is for the student to make minor spelling errors that will then be scored as an incorrect answer.

For a drop-down question (**Show Possible Values** slider to the right) Codio will gather all correct values (anything within the `<<< >>>` chevrons) into a drop-down list and offer the same list in each of the answer positions.

### Grading

<img alt="authtoken" src="/img/docs/guides/assessment_fitb_grading.png" class="simple"/>

- **Points** is the score given to the student if the student answers all parts of the assessment correctly. You can choose any positive numeric value. A score of 0 is given if any of the responses is incorrect.
- The **Show Possible Values** switch determines whether the question is text based (the slider is gray and in the left position) or drop-down based (the slider is blue and in the right position).
- **Show Expected Answer** will show the students the correct answer when they have submitted an answer for this question. To suppress this, flip the switch.
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