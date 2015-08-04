---
title: "Assessments : Fill in the blanks"
class_name: docs
full_width: true
---

A 'fill in the blank' question comes in two flavours.

## Free Text
The example below shows a typical question where the student has to complete the missing words. This is then auto-marked by the Guide as explained below.

[IMAGE]

## Drop Down
The example below shows a variation, where the student is given a list of possible answers and has to select the right answer from a drop down list of possible answers. This is then auto-marked by the Guide as explained below.

[IMAGE]

## Assessment definition
Setting up a Code Test within the Guide editor is very simple. As you can see from the screenshot below, you should specify the following details

- **Name** is a short name that describes the assessment. This name will appear in teacher dashboards, so naming it clearly is important so teachers can see precisely which challenges are successfully met (or not) by students. In many cases, you do not want to see this text appear within the challenge text the student sees. To supress this text, flip the switch next to the name field.
- The **Show Possible Values** switch determines whether the question is text based (the slider is gray and in the left position) or drop-down based (the slider is blue and in the right position). The setup is explained below under the 'Question Setup' header.
- **Instruction** contains any general instructions you want to provide to the student.
- **Points** is the score given to the student if the student answers all parts of the assessment correctly. You can choose any positive numeric value. A 0 score is given if any of the responses is incorrect.
- **Text** is the markdown that you write including the correct answer specification. This is explained below.

## Question Setup
To set up your question, you write your content exactly as it should appear to the user. Take a look at the following example.

```
The correct acronym for the main processor chip in a computer is <<<CPU>>>. It is connected to the system memory by a <<<bus>>>. And memory is usually known as <<<RAM>>>.
```

For a free text question (Show Possible Values slider to the left), Codio shows blank text fields. The student should then enter the correct text. Codio ensures that the response is case insensitive. For obvious reasons, the longer and more complex the correct answer, the easier it is for the student to make minor spelling errors that will then be scored as an incorrect answer.

For a drop-down question (Show Possible Values slider to the right) Codio will assemble all correct values (anything within the `<<< >>>` chevrons) into a drop-down list and offer the same list in each of the answer positions.






