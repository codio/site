---
title: "Autograde Free text"
class_name: docs
full_width: true
---

The Autograde Free text assessment is similar to the [free text](/docs/content/authoring/assessments/assessments-free) assessment but includes a field for a command line to execute a script allowing autograding.

The answer will be passed to the script as `stdin`. 

## Assessment definition

Setting up an assessment is very simple. The configuration fields for an assessment are split into five sections: General, Execution, Grading, Metadata, and Files.

### General

<img alt="" src="/img/docs/guides/assessment_general.png" class="simple"/>

- **Name** is a short name that describes the assessment. This name will appear in teacher dashboards, so naming it clearly is important so teachers can see precisely which challenges are successfully met (or not) by students. In many cases, you do not want to see this text appear within the challenge text the student sees. To suppress this text, flip the **Show Name** switch next to the name field.
- **Instructions** is the actual text that should be shown to the user, written in Markdown.

### Execution

<img alt="" src="/img/docs/guides/assessment_autofree_exec.png" class="simple"/>

- **Command** is the command to execute a script to autograde. If you store the assessment scripts in the `.guides/secure` folder, they will run securely such that the student has no way of either viewing the script or viewing other files in that folder that might contain secure data.
- **Timeout** is the time to abort the script from executing in the event of a problem.

### Grading

<img alt="" src="/img/docs/guides/assessment_free_grading.png" class="simple"/>

- The **Points** field is the number of points allocated for the question. You can choose any positive numeric value. Enabling the **Allow Partial Points** switch will allow the teacher when grading the answer to select the points to give for the students answer.
- **Preview Type** specified the expected input by the student. Codio offers plaintext and markdown options. Latex is also supported. Please refer to the **Preview type** section below for details.
- **One Attempt Only** can be used to restrict the student to answering the question once. If not enabled, students will be able to edit their answer until the Unit is marked as Completed.
- **Answer and Rationale** is where guidance for the assessment can be entered. This will be visible to the teacher when the project is opened using the [Open as Teacher](/docs/classes/unitmanagement/settings-info/teachersolutions) method. This guidance information can also be shown to students after they have submitted their answer and also if they reload the unit after marking it as completed. To enable this, flip the **Show Answer and Rationale to Student** switch below the guidance field.

### Metadata

<img alt="" src="/img/docs/guides/assessment_metadata.png" class="simple"/>

The Metadata section contains fields that further describe the current assessment using a variety of factors:

- **Bloom's Level**: The options for this field correspond to the general levels of [Bloom's Taxonomy](https://cft.vanderbilt.edu/guides-sub-pages/blooms-taxonomy/), which is a comprehensive system of classification for educational content. Your selection in this field should reflect the Bloom's level of the current assessment.
- **Learning Objectives**:  What you enter in this field should reflect the specific educational goal of the current assessment. It is conventional that learning objective statements begin with "SWBAT" (Students Will Be Able To). For example, if an assessment asks the student to predict the output of a recursive code segment, then its Learning Objectives could be: _"SWBAT follow the flow of recursive execution"_.
- **Tags**: In addition to Bloom's Level and Learning Objectives, you may add arbitrary tags to an assessment. The existing tags, **Content** and **Programming Language**, are required. To add your own tags, click **Add Tag** and populate their names and values in the empty input boxes at the bottom.

### Files

Sometimes, an assessment requires external files to function correctly. For example, if you wish to include an image in an assessment's instructions, your assessment would require the image to be present; if you have a custom grading script for an [Advanced Code Test](/docs/content/authoring/assessments/assessments-code-tests/), your assessment would require the script to be present. The Files section allows you to specify the current assessment's file dependencies such that if the assessment is ever distributed to students or other instructors, its dependencies are also included.

<img alt="" src="/img/docs/guides/assessment_files.png" class="simple"/>

To mark a file to be included with the assessment, simply locate it in the file tree under **Project files** and tick the checkbox next to its name. Ticked files will appear under **Additional content**.

## Student Feedback

If your autograde script is to return feedback to your students as they submit the assessment, enable [Release Grades Automatically](/docs/classes/monitor/grading/#releasegradesstatus).  

## Preview type
The following preview options are available. They dictate the expected input format and whether a fully rendered preview pane appears below the student input. Markdown is useful if the student wants to enter text formatting commands. 
Here is a reference for Markdown:

- [Daring Fireball](http://daringfireball.net/projects/markdown/basics) - the author of Markdown


LaTeX is useful where you want students to enter mathematical formulae in their answers. [Click here](/docs/content/authoring/page-edit/latex/) for information on LaTeX.

- **Plaintext** - the student is expected to enter ordinary text, without support for markdown formatting. There is no preview window.
- **Plaintext + LaTeX** - this expects plaintext to be entered, therefore no support for markdown with additional support for LaTeX commands. A preview pane is shown beneath so the student is able to see the rendered LaTeX output. 
- **Markdown + LaTeX** - this supports markdown input with LaTeX support. A preview pane is shown beneath so the student is able to see the rendered markdown and LaTeX output.

## Completing an autograde free text assessment
If **One Attempt Only** is enabled, students will only be able to submit their answer once. If this is not enabled them students will be able to revisit the question and edit their answer until they mark the unit as completed

## Examples 

### A simple Bash script example

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

### A complex Python example

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

### Example Instructions
It is recommended that clear instructions are given to students on any specific items that are expected to be included in their answer. The following is an example:

```markdown
Create a table `users` with the fields:
- id - primary key
- name - text
- email - text
- years - integer
- name and email should be required
- years - optional, but if present - should be more or equal to 0
```

### Expected Solution

```sql
CREATE TABLE users(
  id int PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  years int CHECK(years > 0)
);
```



