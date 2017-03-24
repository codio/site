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
- The **Points** field is the number of points allocated for the question. You can choose any positive numeric value. Enabling the **Allow Partial Points** switch will allow the teacher when grading the answer to select the points to give for the students answer
- **One Attempt Only** can be used to restrict the student to answering the question once. If not enabled, students will be able to edit their answer until the Unit is marked as Completed
- **Instructions** is the actual text that should be shown to the user, written in Markdown.

<img alt="authtoken" src="/img/docs/guides/assessment_free.png" class="simple"/>

## Grading Free Text Assessments

To review and grade answers given by student, select the student and a list of all the assessments in the unit are shown.

<img alt="authtoken" src="/img/docs/guides/freetext-grading.png" class="simple"/>

Free Text Assessments are identifiable from the icon

<img alt="authtoken" src="/img/docs/guides/freetexticon.png" class="simple"/>

Click one line where you will see the question and the answer given.

If the question was not set to **Allow Partial Points**, the teacher can select Correct or Incorrect
<img alt="authtoken" src="/img/docs/guides/notpartial.png" class="simple"/>
But if the question was set to use **Allow Partial Points** the teacher can select the points to give to the answer up to the maximum **Points** 
<img alt="authtoken" src="/img/docs/guides/partial.png" class="simple"/>
