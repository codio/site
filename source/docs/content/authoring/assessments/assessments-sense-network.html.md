---
title: "Sense.Network"
class_name: docs
full_width: true
---


[Sense.Education](https://www.sense.education/) is an AI-Based code analysis package to give students feedback on their code submissions and is supported in Codio in the Sense.Network assessment type.


Students can submit their work and will be able to view feedback from Sense and if **One Attempt Only** is not enabled can review their code and submit again.

To help and track students activity through sense, [custom script](/docs/dashboard/create/custom-script) can be enabled.

This assessment type is only visible when the sense.network api key is entered in the **Organisation>Integrations** area. See [organisation admin roles](/docs/dashboard/create/adminrole/) for more on this.

<img alt="Organisation integrations" src="/img/docs/guides/org_integrations.png" class="simple"/>

## Assessment definition
The configuration fields for an assessment are split into five sections: General, Execution, Grading, Metadata, and Files.

### General
<img alt="" src="/img/docs/guides/assessment_sn_general.png" class="simple"/>

- **Name** (required) is a short name that describes the assessment. This name will appear in teacher dashboards, so naming it clearly is important so teachers can see precisely which challenges are successfully met (or not) by students. In many cases, you do not want to see this text appear within the challenge text the student sees. To suppress this text, flip the **Show Name** switch next to the name field.
- **Instructions** (optional) is the text that should be shown to the user, written in Markdown.

### Execution
<img alt="" src="/img/docs/guides/assessment_sn_exec.png" class="simple"/>

- **Pre-exec command** (optional) is where a check can be run to confirm any code is compiling as required. If you store the scripts in the `.guides/secure` folder, they will run securely such that the student has no way of either viewing the script or viewing other files in that folder that might contain secure data.
- **Pre-exec feedback** (optional) field is used to show feedback if **Pre-exec command** fails,  otherwise will show pre-exec output.
- **Sense feedback Url** (required) to extract assignment id 
- **Filename** (optional) is the path to the file to pass. If empty, will send the currently opened file 

### Grading
<img alt="" src="/img/docs/guides/assessment_sn_grading.png" class="simple"/>

- **Gradable** enable if the assignment is to be used within the grade total for the unit. If this is not enabled students can be given feedback on their submission for this assessment without it being graded. Please note **Answer and Rationale** will not return anything to the student if the assignment is not gradable. When enabled, each submission will override any previous submissions for grading purposes.
- **One Attempt Only** can be used to restrict the student to answering the question once. If not enabled, students will be able to edit their answer until the Unit is marked as Completed. 
- The **Points** field is the number of points allocated for the question. You can choose any positive numeric value.
- **Answer and Rationale** is where guidance for the assessment can be entered where the assessment is **Gradable**. This is not required if the assignment is not gradable. This will be visible to the teacher when the project is opened using the [Open as Teacher](/docs/classes/unitmanagement/settings-info/teachersolutions) method. This guidance information can also be shown to students after they have submitted their answer and also if they reload the unit after marking it as completed. To enable this, flip the **Show Answer and Rationale to Student** switch below the guidance field.

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