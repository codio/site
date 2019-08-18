### Turtle Grader

This grader is optimal for exercises that involve drawing turtle graphics.

Required Options:

-`turtleModelCode`: This code constructs the model drawing. The turtle is initialized to the modelTurtle variable, so your code should use that variable. Note: for loops cannot be used here

Optional Options (the grader will still work :
\-`turtlePenDown`: This is a boolean that specifies whether or not the pen should be put down initially for the student constructed code. Defaults to true
\- `turtleModelCanvas`: This is the ID of the canvas DOM element where the model solution will be drawn. Defaults to modelCanvas.
\- `turtleStudentCanvas`: This is the ID of the canvas DOM element where student turtle will draw. Defaults to studentCanvas.

Grading is based on comparing the commands executed by the model and student turtle. If the `executable_code` option is also specified, the code on each line of that option will be executed instead of the code in the student constructed lines. Each line in the **Initial Values** is mapped to a line in `executable_code` in exactly the same way as it is in the [LanguageTranslationGrader](THATPAGEGOESHERE) The student's turtle is initialized to myTurtle, so this variable should be used if `executable_code` is specified.