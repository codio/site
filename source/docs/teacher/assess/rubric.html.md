---
title: Grading rubric templates
class_name: docs
full_width: true
---

The Grading Rubric feature provides a two dimensional grid that provides grading guidance for manually assessing a coding project.

<img alt="rubric example" src="/img/docs/class_administration/grading/template-example.png" class="simple"/>

### Grading Rubric templates
You will only have access to this feature if you are a Codio [administrator](/docs/teacher/create/adminrole). To find the grading templates screen, click on your user name from the Codio dashboard and then select your organization name. 

You should see a "Grading Templates" tab item.

<img alt="rubric setup" src="/img/docs/class_administration/grading/templates.png" class="simple"/>

Click the 'New' button in the to right to create a new template. You should then add rows and columns.

**Rows** : a row addresses a single assessment criterion. Each row has a weighting % value that you should supply. All rows must add up to 100%.
**Columns** : each column contains a score that you can freely assign. Typically, you would have a 0 value in the first column that corresponds to a complete failure to address the criterion. The remaining columns contain a range of values that you choose with the right most column being the score for fully meeting the assessment criterion. Please read the following paragraph before choosing column values.

### Calculation of scores
When you are grading student code, the grading rubric will appear and is clickable. Points are awarded according to where you click. Codio will then weight the scores according to the weightings that were provided for each row.

A final score is calculated based on your selections and is re-based to the maximum column value. You should be aware of this when choosing your column values. If you wanted your scores to calculate directly to percentages then you should choose a maximum value of 100 with other column values distributed between 0 and 100.


### Applying a grading template to a unit
To use a grading template you should select the classroom so you see the full unit listing. Press the button with the 3 dots to bring up the menu. Then select 'Set grading template' from the list and choose the grading template from the list.

<img alt="rubric template apply" src="/img/docs/class_administration/grading/set-template.png" class="simple"/>

### Grading student work
You perform the actual grading from the classroom. Select a unit to grade so you see the students listed.

<img alt="grading with rubric" src="/img/docs/class_administration/grading/classroom.png" class="simple"/>

You can then grade in the usual two ways.

- either from the student classroom. With a unit selected from the classroom, you click the grading box for the student and then the grading dialog appears. Press edit and click within the grading field and the template appears.
- or from with a student's code, select the 'Education->Grading' menu item to bring up the same grading dialog.

You can then click within the template to assign a score for each criterion. Large cells are partially collapsed but will maximize when you click within the row. The score is calculated as you click. 

It is important that you click the Apply button to save the score correctly.