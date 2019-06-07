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

When the student submits the assignment by marking the unit as complete, it will be [autograded](/docs/classes/unitmanagement/settings-info/autograde) automatically.

[Manual grading](/docs/classes/monitor/grading/) is also available if required


### Configuration

<a name="nbgradertimeout"></a>
#### Extend Timeout period

To extend the time required for completion (to 90 seconds in this example), you can add

```yaml
nbgrader:
   ExecutePreprocessor.timeout: 90
```
to the `.codio-jupyter` file


#### Lock all cells

To lock all cells (Default: False)

```yaml
nbgrader:
   LockCells.lock_all_cells: True
```
to the `.codio-jupyter` file

#### Lock all grade cells

To lock all grade cells (Default: True) where grade cells are locked (non-deletable)

```yaml
nbgrader:
   LockCells.lock_grade_cells: True
```
to the `.codio-jupyter` file

#### Lock all read-only cells

To lock all grade cells (Default: True) where read only cells are locked (non-deletable and non-editable)

```yaml
nbgrader:
   LockCells.lock_readonly_cells: True
```
to the `.codio-jupyter` file

#### Lock all solution cells

To lock all solution cells (Default: True) where solution cells are locked (non-deletable and non-editable)

```yaml
nbgrader:
   LockCells.lock_solution_cells: True
```
to the `.codio-jupyter` file

#### Execute preprocessor on timeout

If execution of a cell times out, interrupt the kernel and continue executing other cells rather than throwing an error and stopping.

```yaml
nbgrader:
   ExecutePreprocessor.interrupt_on_timeout: True
```
to the `.codio-jupyter` file


If you require any assistance at all, or would like us to consider adding additional functions, please don't hesitate to [contact us](/docs/dashboard/support/)