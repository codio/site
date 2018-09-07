---
title: Unit settings and actions
description: ""
class_name: docs
full_width: true
---

You can control unit settings by pressing the button with 3 blue dots from the main units listing screen. You will get different options depending on whether it is a unit assigned from a project or from a course.

<img alt="UnitSettings" src="/img/docs/classunitsettings.png" class="simple"/>

Options are also available if you select a unit. You will then see the **Settings** tab and **Actions** button.

<img alt="Unit actions" src="/img/docs/unitactions.png" class="simple"/>

## Settings available in blue dots menu and Actions area

### Open as teacher
This is only available from the blue dots menu. It [opens a unit in teacher mode](/docs/classes/unitmanagement/settings-info/teachersolutions/). This allows you to see content that is for teachers' eyes only. You cannot edit a unit from this.

### Release grades
By default, grades are not shown to students or transferred to the LMS gradebook if you are using LMS integration for a class. When you are ready to do so, you can select the option from the blue dots menu or the **Actions** area.

### Plagiarism checker
You can run [plagiarism detection](/docs/classes/plag/plag-start) from the blue dots menu or the **Actions** area. 

### Pin/unpin units
Available from the blue dots menu as well as the **Settings** tab, this allows you to [pin or unpin a unit](/docs/classes/unitmanagement/settings-info/pin). Pinning a unit ensures that the unit is shown in a large box at the top of the student dashboard. You would typically pin a unit if this is the unit you are currently teaching. When you have finished teaching it, you would unpin it. You should not have more than four units pinned.

### Download CSV
This allows you to download a CSV file with student grade data for the unit.

<a name="exportunitdata"></a>
### Export unit data
This allows you to export all the data for the unit, including the students workspaces. All the data from the class will be compiled into a zip file in the background and when ready an email will be sent to you with a link for you to download. The link will be active for 7 days and after this time the zip file will be removed. All the data from all the courses/modules/units in the class can also be exported. See [exporting class data](/docs/classes/classmanagement/export/) for more information

### Disable/enable unit
This can be found in the blue dots menu and the settings area with the **Settings** tab selected. You can prevent students from accessing a unit using this option. For book based units, you should be aware that if another unit gives access to the book then students can access the book. You have the ability to [disable access to content outside the current unit](/docs/classes/unitmanagement/settings-info/disable/) but if the student is able to access the terminal window or see the file tree then access to areas that you intend to be disabled cannot be guaranteed. For project units and normal projects, preventing access can be guaranteed.

### Settings
Available from the blue dots menu, this opens the **Settings** tab. 

### Delete
This removes the unit from the class along. Student data is not deleted so if you decide to add your unit back, the student work will automatically be restored.

## Settings available only for normal projects
The following options are only available for units that were assigned to the class from a normal project (not a course).

### Edit unit
This allows you to change the unit name, description and icon.

### Update unit
Individual units that were assigned from a normal (not course) project can be [updated using the **Update unit** option](/docs/classes/unitmanagement/settings-info/updateunit). 

## Actions
The following options are available from the **Actions** area only.

### Mark all as completed
Students are supposed to [mark a unit as completed](/docs/dashboard/student/guides#completed)
However, when it comes to grading time, faculty may want to force this status for all students in the class.

### Reset unit
This [resets the unit for all students in the class](/docs/classes/unitmanagement/settings-info/reset-unit). Please be aware that this action results in student work being lost as the unit is fully reset to its starting state.

### Regrade completed
This option should be selected if you are running an auto-grade script when the unit is marked as completed and you want the script to be re-run. [Click here](/docs/classes/monitor/assessments) for details on end of unit auto-grade scripts.


## Settings tab
The following options are available only in the **Settings** tab.

<a name="disablecomplete"></a>
### Disable Mark as Completed
Disabling will not allow students to mark the unit as completed. If units in your class are of a 'playground' type where you allow students to experiment with their code, this can be useful to disable to avoid them completing the unit in error and then having to ask the class teacher/instructor to change the status back so they can continue working. 

### Visibility on disabled
You can specify whether a unit is accessible or not when disabled. 

### Unit duration
[Unit duration](/docs/classes/unitmanagement/settings-info/unit-duration) allows you to specify start and stop times for student access to a unit. For book units, you should read the caveats mentioned in the **Disable unit** setting above.

### Grading template
You can specify a [grading template](/docs/classes/classmanagement/rubric) (rubric) that this unit should reference. 

<a name="autograde"></a>
### Auto-grade method
[The auto-grade method](/docs/classes/unitmanagement/settings-info/autograde) allows you to specify an auto-grade script that should run when the unit is marked as complete. The default setting ensures that any grades generated from auto-graded assessments and grades from free text assessments are automatically transferred into the grading field.

