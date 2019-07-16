---
title: "Multiple choice"
class_name: docs
full_width: true
---

Codio supports both single and multiple response versions of Multiple Choice Questions (MCQs).

## Assessment definition
The configuration fields for an assessment are split into five sections: General, Execution, Grading, Metadata, and Files.

### General

<img alt="" src="/img/docs/guides/assessment_mc_general.png" class="simple"/>

- **Name** is a short name that describes the assessment. This name will appear in teacher dashboards, so naming it clearly is important so teachers can see precisely which challenges are successfully met (or not) by students. In many cases, you do not want to see this text appear within the challenge text the student sees. To suppress this text, flip the **Show Name** switch next to the name field.
- **Question** is the question instruction that is shown to the student.

### Execution

<img alt="" src="/img/docs/guides/assessment_mc_exec.png" class="simple"/>

- The **Multiple Response** slider indicates whether the user can select more than one answer, in which case check boxes are used instead of radio buttons to specify correct answers.
- **Answers** is where you add as many individual answers as you require. To indicate the correct answer(s), toggle the sliders for multiple response or the radio button for single response.

### Grading

<img alt="" src="/img/docs/guides/assessment_mc_grading.png" class="simple"/>

- **Show Expected Answer** will show the students the correct answer when they have submitted an answer for this question. To suppress this, flip the switch.
- **Correct Points** is the score given to the student if the student makes the correct selection. You can choose any positive numeric value.
- **Incorrect Points** is the score to be deducted if the student makes an incorrect selection. Typically, this value will be 0 but you can assign any positive numeric value if you wish to penalize guessing.
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

## One attempt only
Codio allows users to make their selections and move on to other content pages or assessments without actually submitting their answer. However, once the answer has been submitted, it cannot be resubmitted. This gives teachers a far clearer understanding of which students are understanding the materials properly. There is little point to tests if the student simply changes the answers until the correct one appears.