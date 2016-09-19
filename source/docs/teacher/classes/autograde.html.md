---
title : Autograde on Unit complete
description: ""
class_name: docs
full_width: true
---

This option has two ways of autograding Unit scores for each student such that the grading field is populated without the need to manually populate it. In both cases, the autograding is only triggered once a Unit is complete.

A Unit is marked as complete in any of the following ways

1. Students mark the unit as complete from their dashboard.
1. The teacher can also mark the Unit as complete for a student from the Classroom dashboard with the Unit selected.
1. The teacher can mark all units as complete for all students by pressing the Actions button. This button appears on the main Unit screen.
1. If you are using the Unit Duration feature, all student Units are marked as complete as soon as the Unit duration expiry date and time is reached.

In all cases, you have two autograding options that you can select from the Unit settings.

1. Use the auto-graded assessments within the Unit to auto-populate the grading field with the % score.
1. Run a script to generate the grading either as soon as the student marks the Unit as complete in their dashboard or when a [Unit duration](/docs/teacher/classes/unit-duration) expires.

The two options can be found in the AUTOGRADE METHOD drop-down list.

### Transferring Guide assessment total
If you have created auto-graded assessments within your Guide, Codio aggregates all scores so you can see these within the Classroom dashboard. You will see that there is a total percentage calculated. This percentage value is transferred into the grading field. If you are using [LMS integration](/docs/teacher/create/lti/) then this grading field is then transferred into your LMS gradebook once you [release the grades](/docs/teacher/assess/grading/).


### Running a custom script
A more advanced way of populating the grading field is to write your own custom script that evaluates the student code. This script can then transfer the grading value into the grading field. 

If you are using an LMS platform with Codio then be sure to write percentage scores into this field to maintain compatibility with LMS gradebooks.

Once your script has evaluated the score, it needs to pass the score back to Codio so it can be properly stored. See the following code snippet to see how to do this.

```python
# Python example
requests.get("{0}&grade={1}".format(os.environ['CODIO_AUTOGRADE_URL'], 60))
```

```
curl -s "$CODIO_AUTOGRADE_URL&grade=60"
```

Codio sets an environment variable that contains a url and is unique to each student unit. This url should be called with a querystring parameter `grade=<%-value>`.

### Regrading
If students set their work to 'complete' such that an autograde step is triggered then you can regrade the work by resetting the complete switch and then setting it again, which re-triggers the autograding.


