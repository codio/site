---
title: "Advanced Code Tests"
class_name: docs
full_width: true
---

Before you read about the Advanced Code Test, please be sure to check the [Standard Code Tests](/docs/content/authoring/assessments/assessments-standard-code-tests/) as these require no coding at all, are very quick to set up and cover the majority of test cases you are likely to want to create.

The Code Test assessment type allows you to write code that checks code a student has written. You can write the code in any language you like provided it can be run from the command line, which covers almost all likely scenarios.

### Sample Starter Pack
There is a Starter Pack project that you can add to your account. [Click here to install](https://codio.com/home/starter-packs/cc68d38b-b0ea-4825-9814-46a3594c2b11/) and **Use Pack** to create into your Codio account to review. This project contains examples for all types of auto-graded assessments as well as a Codio Guides cheat sheet.

## Test definition
Setting up a Code Test within the Guide editor is very simple. As you can see from the screenshot below, you should specify the following details

- **Name** is a short name that describes the test. This name will appear in teacher dashboards, so naming it clearly is important so teachers can see precisely which challenges are successfully met (or not) by students. In many cases, you do not want to see this text appear within the challenge text the student sees. To suppress this text, flip the **Show Name** switch next to the name field.
- **Instructions** is the actual text that should be shown to the user, written in Markdown.
- **Command** is the command to run to invoke your test. See the section **Test code** below for more details.
- **Points** is the score given to the student if the code test passes. You can choose any positive numeric value. Enabling the **Allow Partial Points** switch will allow partial points to be given. See the section **Partial Score** lower down on this page.
- **One attempt only** allows the assessment to be run only once. This generally not advised unless you make it clear to the student that a failed test cannot be repeated. You should also provide a Run button in the Guide (or provide other instructions) so the user can test the code before running the actual assessment.
- **Answer and Rationale** is where guidance for the assessment can be entered. This will be visible to the teacher when the project is opened using the [Open as Teacher](/docs/classes/unitmanagement/teachersolutions) method. This guidance information can also be shown to students after they have submitted their answer and also if they reload the unit after marking it as completed. To enable this, flip the **Show Answer and Rationale to Student** switch below the guidance field.


<img alt="authtoken" src="/img/docs/guides/assessment_codetest.png" class="simple"/>

## Test Code
You can place your test code anywhere you like. One suitable location is to create a `.guides/tests` folder. 

When specifying a command to run, you could specify it in either of these ways (the ~/workspace folder is assumed if you do not specify a full path).

```bash
node .guides/tests/mytest.js
node /home/codio/workspace/.guides/tests/mytest.js
```

This example assumes NodeJS, but you can use any language you like.

## Test framework
Codio provides a simple framework for communicating with the Codio Guide. When defining a test, you specify the points that should be awarded for a successful answer. 

### Success or Failure
To let Codio know whether the test passed the test, your code should simply exit with 0. A Bash script would return with `exit(0)`, NodeJS with `process.exit(0)` etc.

To indicate failure, exit with a non-zero value.

### Partial Score
Codio also provides a way for you to award a partial score rather than the all or nothing approach described above.

If your test was written using a bash script, it is done like this.

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

The score you award should be any value between 0 and the maximum score you specified when defining the assessment in the Codio Guides editor.


### Displaying information to the student
You can return text to the user that is shown once the test has concluded. Your test output is captured from `stderr` and `stdout`, so for NodeJS, for example, `console.log('Well done!!')` would work. 

For success, you might simply return 'Well done!'. For failure, the more information you provide the better so the student ideally has some clear indication why they got it wrong.

You can return plain text but if you want to format your response text, you can return html. To do so, make sure you enclose your html within `<html> </html>` tags.


## Dashboard score
If your test returns 0, then Codio will give a dashboard score specified in the Points field. If it returns a non-zero value, then a score of 0 is assumed.

## Inputs and Outputs to student code
If your assessment requires that inputs are passed into the student code or data should be returned from the student code, then it is entirely up to you how to implement this. You should make it clear how the student should process your test's inputs and how to return data back to your test.

