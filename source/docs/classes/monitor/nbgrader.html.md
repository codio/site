---
title: nbgrader autograding support
class_name: docs
full_width: true
---

**[Jupyter notebook](https://jupyter.org/)** has auto-grade functionality through **[nbgrader](http://nbgrader.readthedocs.io/en/stable/index.html)** that Codio supports


### Overview
**nbgrader** support doesn't require [guides](/docs/content/authoring/) or any other [assessments](/docs/content/authoring/assessments/). 

Any user configurations required should be stored in a `.codio-jupyter` file.

if a `.codio-jupyter` file exists in a project we assume it is **jupyter** based grader, and therefore only **nbgrader** can be selected for the assessment scripts in the unit

### Configuration
At present we do not have any options, but have plans in the future to allow to specify port for `.jupyter` or access tokens.

If you require any assistance at all, please don't hesitate to [contact us](/docs/dashboard/support/)

***Max - not sure if any of this below is required or if anything else needs to be documented- feel free to delete/add etc as required**

### Creating student unit

Step 1: Create a release files using `assign` api call, a release folder/database and config should be created in `.guides/secure` folder
Step 2: Use the release directory instead of workspace files for student, the teacher's copy should contain original content
Step 3: Export every notebook as a separate codio assignment.


### Script

To perform the autograde after the student submitted their work use:

Step 0: if not added, add the student to the database using real username, last and first name.
Step 1: attach the `.guides/secure` folder
Step 2: Copy the student work into submitted folder
Step 3: autograde student's work using `nbgrader autograde`
Step 4: manual grading is supported and can be accessed in the usual manner
Step 5: updating of grades is done using the `get_student_notebook_submissions api` call (updating of grades is also handled after any manual grading and when submitted)

### On unit complete
Step 1: generate feedback using `nbgrader feedback` and store as `feedback.html` in student's folder.
Step 2: update grades using `get_student_notebook_submissions` api call (update grades after manual submission also)
