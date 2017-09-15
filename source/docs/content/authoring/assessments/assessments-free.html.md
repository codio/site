---
title: "Free Text"
class_name: docs
full_width: true
---

Free text assessments allow students to answer questions in their own words and teachers are able to easily review and manually grade their answers.

## Assessment definition

<img alt="authtoken" src="/img/docs/guides/assessment_free.png" class="simple"/>

Setting up a Free assessment within the Guide editor is very simple. As you can see from the screenshot above, you should specify the following details

- **Name** is a short name that describes the assessment. This name will appear in teacher dashboards, so naming it clearly is important so teachers can see precisely which challenges are successfully met (or not) by students. In many cases, you do not want to see this text appear within the challenge text the student sees. To suppress this text, flip the **Show Name** switch next to the name field.
- **Instructions** is the actual text that should be shown to the user, written in Markdown.
- The **Points** field is the number of points allocated for the question. You can choose any positive numeric value. Enabling the **Allow Partial Points** switch will allow the teacher when grading the answer to select the points to give for the students answer.
- **Preview Type** specified the expected input by the student. Codio offers plaintext and markdown options. Please refer to the **Preview Type** section below for details.
- **One Attempt Only** can be used to restrict the student to answering the question once. If not enabled, students will be able to edit their answer until the Unit is marked as Completed.
- **Answer and Rationale** is where guidance for the assessment can be entered. This will be visible to the teacher when the project is opened using the [Open as Teacher](/docs/classes/unitmanagement/teachersolutions) method. This guidance information can also be shown to students after they have submitted their answer and also if they reload the unit after marking it as completed. To enable this, flip the **Show Answer and Rationale to Student** switch below the guidance field.


<img alt="authtoken" src="/img/docs/guides/assessment_free.png" class="simple"/>

## Preview type
The following preview options are available. They dictate the expected input format and whether a fully rendered preview pane appears below the student input. Markdown is useful if the student wants to enter text formatting commands. Please [click here]( IAN ) for information on markdown. 

Latex is useful where you want students to enter mathematical formulae in their answers. [Click here]( IAN ) for information on Latex.

- **Plaintext** - the student is expected to enter ordinary text, without support for markdown formatting. There is no preview window.
- **Plaintext + Latex** - this expects plaintext to be entered, therefore no support for markdown with additional support for Latex commands. A preview pane is shown beneath so the student is able to see the rendered Latex output. 
- **Markdown + Latex** - this supports markdown input with Latex support. A preview pane is shown beneath so the student is able to see the rendered markdown and Latex output.

## Completing a free text assessment
If **One Attempt Only** is enabled, students will only be able to submit their answer once. If this is not enabled them students will be able to revisit the question and edit their answer until they mark the unit as Completed

<a name="grading-free"></a>
## Grading free text assessments

To review and grade answers given by student, select the student and a list of all the assessments in the unit are shown.

<img alt="authtoken" src="/img/docs/guides/freetext-grading.png" class="simple"/>

Free Text Assessments are identifiable from the icon

<img alt="authtoken" src="/img/docs/guides/freetexticon.png" class="simple"/>

Click one line and you will then see the question asked of the student and the answer they submitted.

If the question was not set to **Allow Partial Points**, the teacher can select Correct or Incorrect
<img alt="authtoken" src="/img/docs/guides/notpartial.png" class="simple"/>
But if the question was set to use **Allow Partial Points** the teacher can select the points to give to the answer up to the maximum **Points** 
<img alt="authtoken" src="/img/docs/guides/partial.png" class="simple"/>

## Viewing graded free text assessments

For any Free text assessments that have been graded by a teacher in a unit, you will see the points given and the Correct field checked.
<img alt="authtoken" src="/img/docs/guides/freetextanswer.png" class="simple"/>

Note that for questions where **Allow Partial Points** was enabled you will see the points allocated and also the maximum points allocated for that question.