---
title: "Autograde Free text"
class_name: docs
full_width: true
---

The Autograde Free text assessment is similar to the [free text](/docs/content/authoring/assessments/assessments-free) assessment but includes a field for a command line to execute a script allowing autograding.

The answer will be passed to the script as `stdin`. 


## Assessment definition



<img alt="autofree text fields" src="/img/docs/guides/assessment_autogradefree.png" class="simple"/>

Setting up an assessment is very simple. As you can see from the screenshot above, you should specify the following details

- **Name** is a short name that describes the assessment. This name will appear in teacher dashboards, so naming it clearly is important so teachers can see precisely which challenges are successfully met (or not) by students. In many cases, you do not want to see this text appear within the challenge text the student sees. To suppress this text, flip the **Show Name** switch next to the name field.
- **Command** is the command to execute a script to autograde.
- **Timeout** is the time to abort the script from executing in the event of a problem.
- **Instructions** is the actual text that should be shown to the user, written in Markdown.
- The **Points** field is the number of points allocated for the question. You can choose any positive numeric value. Enabling the **Allow Partial Points** switch will allow the teacher when grading the answer to select the points to give for the students answer.
- **Preview Type** specified the expected input by the student. Codio offers plaintext and markdown options. Latex is also supported. Please refer to the **Preview Type** section below for details.
- **One Attempt Only** can be used to restrict the student to answering the question once. If not enabled, students will be able to edit their answer until the Unit is marked as Completed.
- **Answer and Rationale** is where guidance for the assessment can be entered. This will be visible to the teacher when the project is opened using the [Open as Teacher](/docs/classes/unitmanagement/settings-info/teachersolutions) method. This guidance information can also be shown to students after they have submitted their answer and also if they reload the unit after marking it as completed. To enable this, flip the **Show Answer and Rationale to Student** switch below the guidance field.


## Preview type
The following preview options are available. They dictate the expected input format and whether a fully rendered preview pane appears below the student input. Markdown is useful if the student wants to enter text formatting commands. 
Here is a reference for markdown:

- [Daring Fireball](http://daringfireball.net/projects/markdown/basics) - the author of markdown


Latex is useful where you want students to enter mathematical formulae in their answers. [Click here](/docs/content/authoring/page-edit/latex/) for information on Latex.

- **Plaintext** - the student is expected to enter ordinary text, without support for markdown formatting. There is no preview window.
- **Plaintext + Latex** - this expects plaintext to be entered, therefore no support for markdown with additional support for Latex commands. A preview pane is shown beneath so the student is able to see the rendered Latex output. 
- **Markdown + Latex** - this supports markdown input with Latex support. A preview pane is shown beneath so the student is able to see the rendered markdown and Latex output.

## Completing an autograde free text assessment
If **One Attempt Only** is enabled, students will only be able to submit their answer once. If this is not enabled them students will be able to revisit the question and edit their answer until they mark the unit as completed


## Examples 

### A simple bash script example

```bash
#!/usr/bin/env bash
POINTS=0
if [ "${CODIO_FREE_TEXT_ANSWER}" == "answer1" ]
then
  POINTS=1
fi
if [ "${CODIO_FREE_TEXT_ANSWER}" == "answer5" ]
then
  POINTS=5
fi
if [ "${CODIO_FREE_TEXT_ANSWER}" == "answer10" ]
then
  POINTS=10
fi
curl "$CODIO_PARTIAL_POINTS_URL&points=${POINTS}" > /dev/null
```

### A complex python example

```python
#!/usr/bin/env python
import sqlite3
import tempfile
import os, requests, sys
new_file, filename = tempfile.mkstemp()
conn = sqlite3.connect(filename)
text = os.environ['CODIO_FREE_TEXT_ANSWER']
try:
  conn.execute(text)
except Exception as e:
  os.remove(filename)
  raise e
cur = conn.cursor()
points = 2
try:
  # check empty values
  cur.execute("insert into users values (?, ?, ?, ?)", (1, None, None, None))
  points = points - 2
except sqlite3.IntegrityError as e:
  points = points + 2
try:
  # check optional years
  cur.execute("insert into users values (?, ?, ?, ?)", (2, "2", "2", None))
  points = points + 2
except sqlite3.IntegrityError as e:
  points = points - 2
  
  
try:
  # check constraint check for years
  cur.execute("insert into users values (?, ?, ?, ?)", (3, "2", "2", -10))
  points = points - 2
except sqlite3.IntegrityError as e:
  points = points + 2
  
try:
  # check correct values
  cur.execute("insert into users values (?, ?, ?, ?)", (4, "2", "2", 10))
  points = points + 2
except sqlite3.IntegrityError as e:
  points = points - 2  
os.remove(filename)
url = "{0}&points={1}".format(os.environ['CODIO_PARTIAL_POINTS_URL'], points)
r = requests.get(url)
```

It is recommended that clear instructions are given to students on any specific items that are expected to be included in their answer

- Example instructions
```
Create a table `users` with the fields:
- id - primary key
- name - text
- email - text
- years - integer
- name and email should be required
- years - optional, but if present - should be more or equal to 0
```

- Expected solution 
```
CREATE TABLE users(
  id int PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  years int CHECK(years > 0)
);
```



