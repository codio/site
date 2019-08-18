### Language "Translation" Grader

Calling this application a Language Translation Grader is a bit misleading because the grader itself doesn't do any translation; the user does. 

#### Initial Values

Initial values must be entered in the correct order. They will automatically be shuffled once you create the assessment/reload the page/reset the assessment.

#### Options

- sortableId, trashId, feedback_cb, and max_wrong_lines function they same way as they do in all other graders (see [LineBasedGrader](LINK GOES HERE))
- vartests functions the same way as it does in the [VariableCheckGrader](LINK GOES HERE)
- executable_code contains the code entered in **Initial Values** translated into executable javascript code. Enter this code as a single string, delineating newlines with "\n". This is where the actual "translation" happens; the application maps the first line of code in **Initial Values** to the first line in executable_code, the second line of the former to the second line of the latter, and so on.
- Put the programming languages your **Initial Values** are written in after programmingLang. 

Here's an example that involves adding 15 to a variable called "sum" three times:

![translation grader](C:\Users\csb53\OneDrive\Desktop\translation grader.PNG)

Notice that the executable code is written in javaScript. The **Initial Values** are written in C++.

