---
title: "Code Tests"
class_name: docs
full_width: true
---

The Code Test assessment type allows you to write code that checks code a student has written. You can write the code in any language you like provided it can be run from the command line, which covers almost all likely scenarios.

## Test definition
Setting up a Code Test within the Guide editor is very simple. As you can see from the screenshot below, you should specify the following details

- **Name** is a short name that describes the test. This name will appear in teacher dashboards, so naming it clearly is important so teachers can see precisely which challenges are successfully met (or not) by students. In many cases, you do not want to see this text appear within the challenge text the student sees. To supress this text, flip the switch next to the name field.
- **Points** is the score given to the student if the code test passes. You can choose any positive numeric value.
- **Command** is the command to run to invoke your test. See the section 'Test code' for more details.
- **Instructions** is the actual text that should be shown to the user, written in Markdown.

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
Codio provides a simple framework for communicating with the Codio Guide.

### Success or Failure
To let Codio know whether the test passed the test, your code should simply exit with 0. A Bash script would return with `exit(0)`, NodeJS with `process.exit(0)` etc.

To indicate failure, exit with a non-zero value.

### Returning information to the student
You can return text to the user that is shown once the test has concluded. Your test output is captured from stderr and stdout, so for NodeJS, for example, `console.log('Well done!!')` would work. 

For success, you might simply return 'Well done!'. For failure, the more information you provide the better so the student ideally has some clear indication why they got it wrong.

You can return plain text but if you want to format your response text, you can return html. To do so, make sure you enclose your html within `<html> </html>` tags.


## Dashboard score
If your test return 0, then Codio will give a dashboard score specified in the Points field. If it return a non-zero value, then a score of 0 is assumed.

## Inputs and Outputs to student code
If your assessment requires that inputs are passed into the student code or data should be returned from the student code, then it is entirely up to you how to implement this. You should make it clear how the student should process your test's inputs and how to return data back to your test.

## Example Project
https://codio.com/codio-units/java-example is a project that you can [fork](/docs/ide/features/fork/) into your own Codio account and shows you how to create code tests and setup automatic marking.




