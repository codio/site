---
title: Plagiarism detection
class_name: docs
full_width: true
---

Plagiarism detection allows you to check for code copying and potential cases of cheating between members of a class. With the current version, Codio will compare the code projects of all students within a class for a specific teaching unit.

If you want to include other reference code to include in the cross comparison, then you will need to create a dummy student account, add that dummy student to the class and upload the reference code as that student for that unit.

Plagiarism detection is best used with programming project units rather than Guides based tutorial projects. It will work in both cases but it is really designed to test general coding projects rather than lots of auto-graded assessments within a tutorial. 

Codio does not determine whether cheating has or has not taken place and leaves the decision making up to you.

## Classes
In order to use this feature you need to set up a class. If you are not using Codio as your main IDE and want to use only the plagiarism detection feature then you should still follow these instructions and ask you students to upload their code into the project using Git or by uploading files manually.

![](/img/docs/guides/plag-button.png)

## Run
You can see the 'Plagiarism' button near in the upper part of the screen. When you press this you are taken to the following screen.

![](/img/docs/guides/plag-summary.png)

This screen will show you any plagiarism reports that were run in the past. You can open these if you wish.

On the left you can restrict the file types that should be checked. This useful to avoid generating unnecessary noise in your report. It is possible to add multiple file types by pressing the 'Add Extension' button.

Once you are ready to run a new report, press the 'Start' button, which will package up all the files and pass them to the detection engine. You are free to leave the screen at this point and return to it later to see whether the report has been generated.

Codio will include all code from all students in the report, irrespective of whether the assignment is marked by the student as completed.

## The report
Once the report has been generated it can be opened by clicking the 'Open' button. A typical report is shown below. The interpretation of the report is explained in the [reference section on the next page](/docs/dashboard/classes/plag-ref/).

![](/img/docs/guides/plag-main-report.png)

## Drilling down
You can drill down in various ways. The two most common and useful ways are

### Edits
Shows the differences between the two or more students with similarities. Things that have been added by one student are shown in green, things removed in red and those that are identical are not shaded at all.

![](/img/docs/guides/plag-edits.png)

### Side-by-side
This shows the code of those students with similarities in their code in a side-by-side viewer.

![](/img/docs/guides/plag-sidebyside.png)

## Downloading raw data
Should you wish to analyse the report data in other software tools, Codio allows you to download a CSV file of the report output. You will find a button 'Download CSV' located at the top right of the main report screen.

