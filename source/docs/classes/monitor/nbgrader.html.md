---
title: nbgrader autograding support
class_name: docs
full_width: true
---

**[Jupyter notebook](https://jupyter.org/)** has auto-grade functionality through **[nbgrader](http://nbgrader.readthedocs.io/en/stable/index.html)** that Codio supports


### Overview

Unit creators create the unit with [Jupyter notebook](https://jupyter.org/) files for the assignment.

**nbgrader** support doesn't require [guides](/docs/content/authoring/) or any other [assessments](/docs/content/authoring/assessments/). 

Any user configurations required should be stored in a `.codio-jupyter` file.

if a `.codio-jupyter` file exists in a project we assume it is **jupyter** based grader, and therefore only **nbgrader** can be selected for the assessment scripts in the unit

When the unit is published to a class, either as an [individual project](/docs/classes/unitmanagement/assign-project) or as part of a [course/module](/docs/classes/unitmanagement/assign-module), the release version is created for the student.

When the student submits the assignment using education submit button, it will be autograded automatically.

[Manual grading](/docs/classes/monitor/grading/) is also available if required


### Configuration
At present we do not have any additional options, but have plans in the future to allow to specify port for `.jupyter` or access tokens.
If you require any assistance at all, please don't hesitate to [contact us](/docs/dashboard/support/)


