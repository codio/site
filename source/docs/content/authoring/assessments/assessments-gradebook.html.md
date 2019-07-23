---
title: "Grade Book assessments"
class_name: docs
full_width: true
---


A Grade book assessment is for manually graded assessments. A student does not need to answer it, and it is available for grading immediately

Comments and points given will be visible to the student when the assessment is graded and the grades are released.

## Test definition
The configuration fields for an assessment are split into five sections: General, Execution, Grading, Metadata, and Files.

### General
<img alt="" src="/img/docs/guides/assessment_gradebook_general.png" class="simple"/>

- **Name** is a short name that describes the test. This name will appear in teacher dashboards, so naming it clearly is important so teachers can see precisely what the assessment is. In many cases, you do not want to see this text appear to the student. To suppress this text, flip the **Show Name** switch next to the name field.

### Execution
<img alt="" src="/img/docs/guides/assessment_gradebook_exec.png" class="simple"/>

- **Collapsed on start** allows the assessment field to be collapsed when the page opens.

### Grading
<img alt="" src="/img/docs/guides/assessment_gradebook_grading.png" class="simple"/>

- **Points** is the score given to the student. You can choose any positive numeric value. Enabling the **Allow Partial Points** switch will allow partial points to be given.

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