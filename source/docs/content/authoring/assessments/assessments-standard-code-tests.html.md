---
title: "Standard Code Tests"
class_name: docs
full_width: true
---

If you want to write code tests that give you in depth control by allowing you to write your own code to execute tests, then please [refer to the Advanced Code Tests](/docs/content/authoring/assessments/assessments-code-tests/). The majority of code tests, however, can be produced without writing any code at all using Standard Code Tests.

The approach taken by the Standard Code Tests is to specify input data using a dialog and then specify the expected output for that input data. Codio will then execute the student code, supplying the specified input data, and compare the expected output data to the data actually output by the student code.

### Sample Starter Pack
There is a Starter Pack project that you can add to your account. [Click here to install](https://codio.com/home/starter-packs/cc68d38b-b0ea-4825-9814-46a3594c2b11/). This project contains examples for all types of auto-graded assessments as well as a Codio Guides cheat sheet.

### Basic setup
The screenshot below shows the basic configuration fields

<img alt="" src="/img/docs/guides/std-assessment-1.png" class="simple"/>

- **Name** is a short name that describes the test. This name will appear in teacher dashboards, so naming it clearly is important so teachers can see precisely which challenges are successfully met (or not) by students. In many cases, you do not want to see this text appear within the challenge text the student sees. To suppress this text, flip the **Show Name** switch next to the name field.
- **Guidance** is where guidance for the assessment can be entered. This will be visible to the teacher when the project is opened using the [Open as Teacher](/docs/teacher/classes/solutions/) method. This guidance information can also be shown to students if they reload the unit after marking it as completed. To enable this, flip the **Show Guidance to Student** switch below the guidance field
- **Show Expected Answer** will show the students the correct answer when they have submitted an answer for this question. To suppress this, flip the switch.
- **Pre-exec command** is the command to execute before you run the test. This will normally be a compilation command.
- **Command** is the command that executes the student code itself.
- **Points** is the score given to the student if the code test passes. You can choose any positive numeric value.
- **Case insensitive** tells Codio to make a case insensitive output comparison. By default, the comparison will be case sensitive.
- **Ignore white space** tells Codio to strip out any white space characters (carriage return, line feed, tab etc.) from both the expected output and the student output. It can be very helpful to enable this as it means you do not have to be over precise when specifying the fields or instructions. More information is provided below.
- **Substring match** tells Codio to perform a substring match when comparing the expected output to the student output.
- **One attempt only** allows the assessment to be run only once. This generally not advised unless you make it clear to the student that a failed test cannot be repeated. You should also provide a Run button in the Guide (or provide other instructions) so the user can test the code before running the actual assessment.
- **Instructions** is the actual text that should be shown to the user, written in Markdown.

### Specifying inputs and outputs
The final step in configuring an assessment is to set up the inputs and outputs. There are some important details to understand.

<img alt="" src="/img/docs/guides/std-assessment-args.png" class="simple"/>

The first set of empty input/output fields is provided. You should choose between supplying your inputs as arguments or as `stdin` data. These are explained in more detail below. 

You should be aware of case sensitivity and whitespace characters as explained above. Generally speaking, using the 'ignore whitespace' setting is a good idea unless you need to be exact in this respect. 

If you only have one input/output pair then the student could write code that simply outputs the expected output without writing any real logic. To protect against this you can create multiple input/output test cases that are run through sequentially. 

To add a new test case, press the "Add item to check" button which generates a new pair.


### Inputs using arguments
The easiest way of supplying input data is in the Input - Arguments field as shown in the previous image. The argument data can then be read by the student code.

### Inputs using `stdin`
If you want to handle manual data input cases such as "Enter your Name: " then you would use the Input - Stdin field. This field allows you to supply the data that would normally be entered manually in the console. The following is important to avoid mistakes.

- The input data should have a new line if this would be expected in the actual program execution.
- In the output field, you need to be aware that the prompt text that is displayed to the user appears in `stdout` and so it should be reflected in your output field but without the data entered by the user. Normally, you would **not** put a new line in the output field between each input prompt as the new line character is generated by the user when pressing the enter key is not a part of the output.
- We recommend that you enable the "Ignore white space" option and format your output with new lines to make it easier to read and be more tolerant to inadvertant spaces etc.

The following image shows how to format input and output fields if you are **not** ignoring white space. Note how the input field only supplied the values to be input, not the prompt itself (which is actually a part of stdout). It is important to accurately account for all spaces and carriage returns.

<img alt="" src="/img/docs/guides/std-assessment-stdin.png" class="simple"/>

The following image shows the more tolerant approach that has the 'Ignore whitespace" option set. In this case, we have put everything on its own line for readability. The whitespace characters will be stripped out of both the expected output and the student output at runtime.

<img alt="" src="/img/docs/guides/std-assessment-stdin-ignore.png" class="simple"/>
