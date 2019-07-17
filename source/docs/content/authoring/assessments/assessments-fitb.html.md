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
As you can see from the screenshot below, you should specify the following details.

- **Name** is a short name that describes the assessment. This name will appear in teacher dashboards, so naming it clearly is important so teachers can see precisely which challenges are successfully met (or not) by students. In many cases, you do not want to see this text appear within the challenge text the student sees. To suppress this text, flip the **Show Name** switch next to the name field.
- **Instruction** contains any general instructions you want to provide to the student.
- **Text** is the markdown that you write including the correct answer specification. This is explained below.
- **Points** is the score given to the student if the student answers all parts of the assessment correctly. You can choose any positive numeric value. A 0 score is given if any of the responses is incorrect.
- The **Show Possible Values** switch determines whether the question is text based (the slider is gray and in the left position) or drop-down based (the slider is blue and in the right position). The setup is explained below under the 'Question Setup' header.
- **Show Expected Answer** will show the students the correct answer when they have submitted an answer for this question. To suppress this, flip the switch.
- **Answer and Rationale** is where guidance for the assessment can be entered. This will be visible to the teacher when the project is opened using the [Open as Teacher](/docs/classes/unitmanagement/settings-info/teachersolutions) method. This guidance information can also be shown to students after they have submitted their answer and also if they reload the unit after marking it as completed. To enable this, flip the **Show Answer and Rationale to Student** switch below the guidance field.




<img alt="authtoken" src="/img/docs/guides/assessment_fitb.png" class="simple"/>

## Question text
Below is an example of how the question should be specified.
```
A prime number (or a prime) is a <<<natural>>> number greater than <<<1>>> that has no positive divisors other than <<<1>>> and <<<itself>>>.
```

For a free text question (**Show Possible Values** slider to the left), Codio shows blank text fields. The student should then enter the correct text. Codio ensures that the response is case insensitive. For obvious reasons, the longer and more complex the correct answer, the easier it is for the student to make minor spelling errors that will then be scored as an incorrect answer.

For a drop-down question (**Show Possible Values** slider to the right) Codio will gather all correct values (anything within the `<<< >>>` chevrons) into a drop-down list and offer the same list in each of the answer positions.






