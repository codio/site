---
title: Set unit penalties
description: ""
class_name: docs
full_width: true
---

You can specify penalties in the event that students do not complete the unit within agreed timescales. Incremental penalties can be applied if required.


<img alt="penalties" src="/img/docs/penalties.png" class="simple"/>

Each row in the table will contain the following fields : 

- Number (auto-incremental)
- Date
- Time
- Penalty % (The % of the total score for the unit to be deducted as a penalty)
- Message (If the message field is not specified, then a default message will be generated - see below)

### Default Messages:

1: If a student opens a project after deadline or the student is working in the unit when deadline is reached

```Deadline X (the table row number) has been reached. This deadline carries a penalty of Y%. You can review your answers with no penalty. However, if you decide to change any answers by pressing the Modify button beneath a question, a Y% penalty deduction will be applied to your overall results. Once a modify button has been pressed once, the penalty deduction will be applied and you will be free to modify as many questions as you like with no additional penalty```

2: If a student presses a Modify button past a deadline

```Deadline X (the table row number) has been reached. This deadline carries a penalty of Y%. If you proceed, a Y% penalty deduction will be applied to your overall results. You will then be able to modify as many questions as you like with no additional penalty```

3: Final deadline (unit end date)

Once the final deadline hits (if one is set), the unit will be forced to read-only and then following message will be displayed to the student :

```You have exceeded the final deadline. You are no longer able to make changes to your answers. You are free to review your answers.```

### Teacher/Instructors Dashboard:

**Penalty indicator:** If a penalty was applied then the grade field will have a light red background. This should be the case even if no grade has been calculated yet. Hover above the field to see the penalty details (#, date/time, penalty %).
<img alt="dashboard penalty" src="/img/docs/penaltydashboard.png" class="simple"/>
**Final grade field:** this field will show the final graded score less any penalty deduction. If the field is overwritten by the teacher/instructor, then the penalty deduction will not be applied. 

<a name="adjustdeadline"></a>

### Adjusting deadline for individual students

The set deadline(s) can be adjusted forward by a number of days if required for individual students.

Select the unit from the class units list and click on the 3 blue vertical dots and select 'Adjust deadline'

<img alt="penalties" src="/img/docs/penaltydeadline.png" class="simple"/>

You can then adjust the deadline forward by as many days as you require

<img alt="penalties" src="/img/docs/deadlineadjust.png" class="simple"/>

When applied, the adjustment will then show next to the grade field in the teacher/instructors dashboard. The deadline in the image below was adjusted by 4 days

<img alt="penalties" src="/img/docs/adjusted.png" class="simple"/>