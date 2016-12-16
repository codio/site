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

If you are using an LMS platform with Codio then be sure to write a percentage value into this field to maintain compatibility with LMS gradebooks.

<img alt="authtoken" src="/img/docs/grading-secure.png" class="simple"/>

### Secure scripts
If you want your scripts to run securely such that the student has no way of either viewing the script or viewing other files that might contain secure data then you should place those scripts and files in the `.guides/secure` folder. Codio ensures that only the original project author is able to access this folder but when it is assigned to Students as a Unit, it is not accessible in any way.

**Important** : you should only place scripts in the ```.guides/secure``` folder that will be executed when the Unit if marked as complete. Do not put scripts accessed from Codio Guides there as this folder will not accessible at that point.

### Buggy grading script strategy
Once the Unit has been published to the class, the project author will no longer be able to modify any autograding scripts that may have been written. However, teacher written scripts are subject to bugs like any other piece of code and you may want to be able to modify your test script after the Unit is published.

We recommend that you use a simple bootstrap script such as the one shown at the bottom of this page. This script  loads your main grading script from an external source before running it. From February 2017 we will be removing the need for this by allowing a unit to be modified by the project author after it has been assigned to the class.

Should you discover a bug in your script once students start submitting their work then please refer to the two sections on regrading student submissions below.

### Deducting for late submission
You may want to be able to deduct a number of points if the student submits (marks the Unit as complete) post a nominal deadline. In this case, we recommend that you pass the date and time of the deadline as a parameter to the grading script. If you are using this sample bootstrap code (see bottom of page) then you should be careful to pass in the date in the format `2016-11-24T14:30`.

<img alt="authtoken" src="/img/docs/grading-deadline.png" class="simple"/>

See the script example at the bottom of the page for a full working example. 

### Regrading for an individual student
If students set their work to 'complete' such that an autograde step is triggered then you can regrade the work by resetting the complete switch and then setting it again, which re-triggers the autograding.

### Regrading all students
From the Actions area of the Unit, you can regrade all students that have already been auto-graded by pressing the Regrade All button. This is useful if you have found a bug in your grading script. If you follow (or use) the code sample shown at the bottom of this page you can see how the original student submission date is handled.

### Sample code

#### Example bash loader script
The following code shows a simple bootstrap Bash script that loads code from an external source. While you could just as well include all your login on the Codio box itself, loading from an external source ensures that once the Unit is published you are free to fix any bugs that may exist in your grading logic. 

The only thing you need to modify is the url to the external file. A typical place to locate this might be a GitHub Gist but any location reachable by Codio will do.

You should place this bootstrap script in the `.guides/secure` folder.

```
#!/bin/bash
URL="https://gist.githubusercontent.com/MaximKraev/11cd4e43b0c43f79d9478efbe21ba1b9/raw/validate.py"
curl -fsSL $URL | python - $@
```

#### Example Python grading script
Below is an example Python file that might be loaded by the bootstrap script above. You are free to use any language but if you are using a compiled language then your bootstrap command will need to handle the compilation. For this reason, an interpreted language such as Bash, Python, NodeJS etc will execute a little faster.

Notice that the only code you need to modify is near the bottom. The other functions are helpers and can be used for any test in any Unit.

```python
import os
import random
import requests
import json
import datetime
import sys

####################
# Helper functions #
####################


# Get the url to send the results to
CODIO_AUTOGRADE_URL = os.environ["CODIO_AUTOGRADE_URL"]
CODIO_UNIT_DATA = os.environ["CODIO_AUTOGRADE_ENV"]
# The date and time format to use. The deadline date should conform
DATE_FORMAT = "%Y-%m-%dT%H:%M:%S"
DATE_FORMAT_CODIO = "%Y-%m-%dT%H:%M:%S.%fZ"

# Send the grade back to Codio
def send_grade( grade ):
  s = requests.Session()
  s.mount('https://', requests.adapters.HTTPAdapter(max_retries=3))
  r = s.get("{0}&grade={1}".format(CODIO_AUTOGRADE_URL, grade))
  parsed = json.loads(r.content)
  return parsed['code'] == 1

# gets complete date from codio unit data
def get_completed_date():
  unit_info = json.loads(CODIO_UNIT_DATA)
  date = unit_info["completedDate"]
  return datetime.datetime.strptime(date, DATE_FORMAT_CODIO)

def main():
  # Execute the test on the student's code
  grade = validate_code()
  # Get the penalty factor
  penalty = check_deadline(sys.argv[1])
  # Send the grade back to Codio with the penatly factor applied
  res = send_grade(int(round(grade * penalty)))
  exit( 0 if res else 1)

##########################################
# You only need to modify the code below #
##########################################


# Calculates the difference between the deadline and the date the student submits
# You should modify this to return the downgrading factor
def check_deadline(date):
  completed_date = get_completed_date()

  deadline_date = datetime.datetime.strptime(date, DATE_FORMAT)
  delta = completed_date - deadline_date
  if delta > datetime.timedelta(days=3):
    return 0.2
  if delta > datetime.timedelta(days=2): # 2 days late
    return 0.6
  if delta > datetime.timedelta(minutes=10): # 10 min late
    return 0.8
  return 1  
  
# Your actual test logic 
# Our demo function is just generating some random score
def validate_code():
  return random.randint(10, 100)

main()
```








