---
title: "Standard code tests"
class_name: docs
full_width: true
---

If you want to write code tests that give you in depth control by allowing you to write your own code to execute tests, then please [refer to the advanced code tests](/docs/content/authoring/assessments/assessments-code-tests/). The majority of code tests, however, can be produced without writing any code at all using standard code tests.

Standard code tests are dialog driven. You specify input data and the expected output for that input data. Codio will then execute the student code, supply the specified input data, and compare the expected output to the student code's actual output.

## Sample Starter Pack
There is a Starter Pack project that you can add to your account. [Click here to install](https://codio.com/home/starter-packs/cc68d38b-b0ea-4825-9814-46a3594c2b11/) and **Use Pack** to create into your Codio account to review. This project contains examples for all assessment types as well as a guides authoring cheat sheet.

## Basic setup
The configuration fields for an assessment are split into five sections: General, Execution, Grading, Metadata, and Files.

### General
The screenshot below shows the basic configuration fields for the _General_ section:

<img alt="" src="/img/docs/guides/assessment_general.png" class="simple"/>

- **Name** is a short name that describes the test. This name will appear in teacher dashboards, so naming it clearly is important so teachers can see precisely which challenges are successfully met (or not) by students. In many cases, you do not want to see this text appear within the challenge text the student sees. To suppress this text, flip the **Show Name** switch next to the name field.
- **Instructions** is the actual text that should be shown to the user, written in Markdown.

### Execution
The screenshot below shows the configuration fields for the _Execution_ section:

<img alt="" src="/img/docs/guides/assessment_sct_execution.png" class="simple"/>

- **Command** is the command that executes the student code itself. If you store the assessment scripts in the `.guides/secure` folder, they will run securely such that the student has no way of either viewing the script or viewing other files in that folder that might contain secure data.
- **Pre-exec command** is the command to execute before you run each test. This will normally be a compile command.

### Grading
The screenshot below shows the configuration fields for the _Grading_ section:

<img alt="" src="/img/docs/guides/assessment_sct_grading.png" class="simple"/>

- **Points** is the score given to the student if the code test passes. You can enter any positive numeric value.
- **Case insensitive** tells Codio to make a case insensitive output comparison. By default, the comparison will be case sensitive.
- **Ignore white space** tells Codio to strip out any white space characters (carriage return, line feed, tab etc.) from both the expected output and the student output. It can be very helpful to enable this as it means you do not have to be over precise when specifying the fields or instructions. More information is provided below.
- **Substring match** tells Codio to perform a substring match when comparing the expected output to the student output.
- **One attempt only** allows the assessment to run only once. The student will be warned that they will not be able to resubmit. You would usually want to provide a [run button](/docs/ide/boxes/runmenu/) or other means for the user to test the code before running the actual assessment.
- **Show expected answer** will show the students the expected output when they have submitted an answer for the question. To suppress this, flip the switch.
- **Answer and rationale** is where guidance for the assessment can be entered. This will be visible to the teacher when the project is opened using the [Open as Teacher](/docs/classes/unitmanagement/settings-info/teachersolutions) method. This guidance information can also be shown to students after they have submitted their answer and also if they reload the unit after marking it as completed. To enable this, flip the **Show Answer and Rationale to Student** switch below the guidance field.

<a name="metadata"></a>
### Metadata

<img alt="" src="/img/docs/guides/assessment_metadata.png" class="simple"/>

The Metadata section contains fields that further describe the current assessment using a variety of factors:

- **Bloom's Level**: The options for this field correspond to the general levels of [Bloom's Taxonomy](https://cft.vanderbilt.edu/guides-sub-pages/blooms-taxonomy/), which is a comprehensive system of classification for educational content. Your selection in this field should reflect the Bloom's level of the current assessment.
- **Learning Objectives**:  What you enter in this field should reflect the specific educational goal of the current assessment. It is conventional that learning objective statements begin with "SWBAT" (Students Will Be Able To). For example, if an assessment asks the student to predict the output of a recursive code segment, then its Learning Objectives could be: _"SWBAT follow the flow of recursive execution"_.
- **Tags**: In addition to Bloom's Level and Learning Objectives, you may add arbitrary tags to an assessment. The existing tags, **Content** and **Programming Language**, are required. To add your own tags, click **Add Tag** and populate their names and values in the empty input boxes at the bottom.

<a name="files"></a>
### Files

Sometimes, an assessment requires external files to function correctly. For example, if you wish to include an image in an assessment's instructions, your assessment would require the image to be present; if you have a custom grading script for an [Advanced Code Test](/docs/content/authoring/assessments/assessments-code-tests/), your assessment would require the script to be present. The Files section allows you to specify the current assessment's file dependencies such that if the assessment is ever distributed to students or other instructors, its dependencies are also included.

<img alt="" src="/img/docs/guides/assessment_files.png" class="simple"/>

To mark a file to be included with the assessment, simply locate it in the file tree under **Project files** and tick the checkbox next to its name. Ticked files will appear under **Additional content**.

## Cheating opportunities
If you show the expected output and allow multiple attempts, students may figure out that all they need to do is run the test, look at the expected output and then write the required output data. To avoid this, we recommend that you create one standard code assessment that shows expected inputs and outputs so the student can test. You award no points for this assessment.

You then would create a second assessment that does not show expected output and allows only a single attempt. This way, the student will not know what input data is being passed in and does not have another opportunity to modify their code and re-run the assessment.

## Specifying inputs and outputs
The final step in configuring an assessment is to set up the inputs and outputs in the _Grading_ section. There are some important details to understand.

<img alt="" src="/img/docs/guides/std-assessment-args.png" class="simple"/>

The first set of empty input/output fields is provided. You should choose between supplying your inputs as arguments or as `stdin` data. These are explained in more detail below. 

You should be aware of case sensitivity and whitespace characters as explained above. Generally speaking, using the 'ignore whitespace' setting is a good idea unless you do need to be exact in this respect. 

If you only have one input/output pair then the student could write code that simply outputs the expected output without writing any real logic. To protect against this you can create multiple input/output test cases that are run through sequentially. 

To add a new test case, press the **Add item to check** button which generates a new pair.


### Inputs using arguments
The easiest way of supplying input data is in the **Input - Arguments** field as shown in the previous image. The argument data can then be read by the student code.

### Inputs using `stdin`
If you want to handle manual data input cases such as "Enter your Name: " then you would use the **Input - Stdin** field. This field allows you to supply the data that would normally be entered manually in the console. The following is important to avoid mistakes.

- The input data should have a new line if this would be expected in the actual program execution.
- In the output field, you need to be aware that the prompt text that is displayed to the user appears in `stdout` and so it should be reflected in your output field but without the data entered by the user. Normally, you would **not** put a new line in the output field between each input prompt as the new line character is generated by the user when pressing the enter key is not a part of the output.
- We recommend that you enable the **Ignore white space** and **Substring match** options to be more tolerant.

The following image shows how to format input and output fields if you are **not** ignoring white space or doing a **Substring match**. Note how the input field only supplied the values to be input, not the prompt itself (which is actually a part of `stdout`). It is important to accurately account for all spaces and carriage returns.

<img alt="" src="/img/docs/guides/std-assessment-stdin.png" class="simple"/>

The following image shows the more tolerant approach that has the **Ignore whitespace** option set. In this case, we have put everything on its own line for readability. The whitespace characters will be stripped out of both the expected output and the student output at runtime.

<img alt="" src="/img/docs/guides/std-assessment-stdin-ignore.png" class="simple"/>

<a name="errorfeedback"></a>
### Error Feedback

To provide extended feedback about issues in the student's code, you can enable this option if you wish to show feedback to the student in the event the test fails. 

<img alt="" src="/img/docs/guides/std-assessment-error.png" class="simple"/>