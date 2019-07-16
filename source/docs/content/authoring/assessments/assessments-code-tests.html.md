---
title: "Advanced code tests"
class_name: docs
full_width: true
---

Before you read about the advanced code test, please be sure to check the [standard code tests](/docs/content/authoring/assessments/assessments-standard-code-tests/) as these require no coding at all, are very quick to set up and cover the majority of test cases you are likely to want to create.

The advanced code test assessment type allows you to write code that checks code a student has written. You can write the code in any language you like provided it can be run from the command line.

You should be aware that if students are able to access the command line, they are able to explore the box and find the folder where your test scripts are located. For scripting languages, this would allow them to modify the script. For compiled executables they could theoretically create their own executable and then replace yours with their own one. They would need to know how the callbacks work to succeed at this.

If you want to make your scripts as secure as possible, please [click here](/docs/classes/unitmanagement/settings-info/autograde#securescripts) for information on secure scripts run when a unit is marked as complete. 

### Sample Starter Pack
There is a Starter Pack project that you can add to your account. [Click here to install](https://codio.com/home/starter-packs/cc68d38b-b0ea-4825-9814-46a3594c2b11/) and **Use Pack** to create into your Codio account to review. This project contains examples for all types of auto-graded assessments as well as a Codio authoring cheat sheet.

## Test definition
Setting up a Code Test within the Guide editor is very simple. The configuration fields for an assessment are split into five sections: General, Execution, Grading, Metadata, and Files.

### General
The screenshot below shows the basic configuration fields for the _General_ section:

<img alt="" src="/img/docs/guides/assessment_general.png" class="simple"/>

- **Name** is a short name that describes the test. This name will appear in teacher dashboards, so naming it clearly is important so teachers can see precisely which challenges are successfully met (or not) by students. In many cases, you do not want to see this text appear within the challenge text the student sees. To suppress this text, flip the **Show Name** switch next to the name field.
- **Instructions** is the actual text that should be shown to the user, written in Markdown.

### Execution
You can evaluate student code using a variety of languages and frameworks that are already supported. You can also use a custom grading script. 

Supported languages and frameworks:

- **Ruby**: `rubocop` or `rspec`
- **Java**: [JUnit](/docs/ide/features/junit/) or `checkstyle`
- **Python**: `pycodestyle` or `UnitTest`
- **JavaScript**: `jshint` or `jslint`

#### Using `pycodestyle`
Before using the `pycodestyle` option, `pycodestyle` has to be installed. You may use the following commands to do so:

```bash
sudo apt update
sudo apt install python3-pip
sudo python3 -m pip install pycodestyle
```

<img alt="" src="/img/docs/guides/assessment_act_exec_pycodestyle.png" class="simple"/>

To add individual Python source files whose style should be checked, either enter their relative path to `~/namespace` or drag them from the Filetree into the **Add Case** input box, and click **Add Case**. You may add as many cases as needed. When the assessment executes, `pycodestyle` will inspect each added file and output all styling issues that it found.

#### Using `jshint` or `jslint`
Before using them, `jshint` or `jslint` must be installed as a Node.js global package. You may use the following command to do so:

`sudo npm install -g jshint jslint`

To add individual JavaScript source files whose style should be checked, either enter their relative path to `~/namespace` or drag them from the Filetree into the **Add Case** input box, and click **Add Case**. You may add as many cases as needed. You may also select either JSLint or JSHint in the **Language Assessment Subtype** dropdown. When the assessment executes, your choice of either `jshint` or `jslint` will inspect each added file and output all styling issues that it found.

#### Custom
<img alt="" src="/img/docs/guides/assessment_act_exec_custom.png" class="simple"/>

- **Command** is the command to run to invoke your test. See the section [Test code location](#test-code-location) below for more details. If you store the assessment scripts in the `.guides/secure` folder, they will run securely such that the student has no way of either viewing the script or viewing other files in that folder that might contain secure data.
- Enabling the **Allow Partial Points** switch will allow partial points to be given. See the section [Partial Score](#partial-score) lower down on this page.
- **Timeout** is the period of time (seconds) the test will run before terminating.

### Grading

<img alt="" src="/img/docs/guides/assessment_grading.png" class="simple"/>

- **Points** is the score given to the student if the code test passes. You can choose any positive numeric value.
- **One attempt only** allows the assessment to be run only once. This generally not advised unless you make it clear to the student that a failed test cannot be repeated. You should also provide a Run button in the Guide (or provide other instructions) so the user can test the code before running the actual assessment.
- **Answer and rationale** is where guidance for the assessment can be entered. This will be visible to the teacher when the project is opened using the [Open as Teacher](/docs/classes/unitmanagement/settings-info/teachersolutions) method. This guidance information can also be shown to students after they have submitted their answer and also if they reload the unit after marking it as completed. To enable this, flip the **Show Answer and Rationale to Student** switch below the guidance field.

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

## Test code location
You can place your test code anywhere you like, but if you store the assessment scripts in the `.guides/secure` folder, they will run securely such that the student has no way of either viewing the script or viewing other files in that folder that might contain secure data. Another suitable location could be to to create a `.guides/tests` folder. 

When specifying a command to run, you could specify it in either of these ways (the ~/workspace folder is assumed if you do not specify a full path).

```
node .guides/tests/mytest.js
node /home/codio/workspace/.guides/tests/mytest.js
```
This example uses Node.js, but you can use any language you'd like.

## Test framework
Codio provides a simple framework for communicating with the Codio authored content. When defining a test, you specify the points that should be awarded for a successful answer.

### Success or Failure
To let Codio know whether the test passed, your code should simply exit with 0. A Bash script would return with `exit(0)`, Node.js with `process.exit(0)` etc.

To indicate failure, exit with a non-zero value.

### Partial Score
Codio also provides a way for you to award a partial score rather than the all or nothing approach described above.

If your test was written using a bash script, it would be done like this.

```bash
POINTS=5
curl -s "$CODIO_PARTIAL_POINTS_URL&points=${POINTS}" > /dev/null
```

A Python script might look like this.

```python
#!/usr/bin/env python
import os, requests, sys

points = 5
url = "{0}&points={1}".format(os.environ['CODIO_PARTIAL_POINTS_URL'], points)
r = requests.get(url)
```

The score you award should be any value between 0 and the maximum score you specified when defining the assessment in the Codio authoring editor.


### Displaying information to the student
You can return text to the user that is shown once the test has concluded. Your test output is captured from `stderr` and `stdout`, so for Node.js, for example, `console.log('Well done!!')` would work. 

For success, you might simply return `'Well done!'`. For failure, aim to provide as much explanation to the student as possible regarding why they failed.

You can return plain text, but if you want to format your response text, you can return HTML. To do so, make sure you enclose your HTML within `<html> </html>` tags.

## Dashboard score
If **Allow Partial Points** is disabled and your test returns 0, then Codio will give a dashboard score specified in the Points field; if it returns a non-zero value, then a score of 0 is assumed.

If **Allow Partial Points** is enabled, then Codio will give a dashboard score based on the request it received at `CODIO_PARTIAL_POINTS_URL`. If no request was received, then a score of 0 is assumed.

## Inputs and outputs to student code
If your assessment requires that inputs are passed into the student code or data should be returned from the student code, then it is your responsibility to implement this. You should make it clear how the student should process your test's inputs and how to return data back to your test.

