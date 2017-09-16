---
title: "Limitations and restrictions"
class_name: docs
full_width: true
---

When you map book content to a course unit, you should be aware that certain features will not work or may not work as expected.
Because a book sits on a single Codio box, if the student is able to access the terminal window or is able to see the file tree, they can effectively access parts of the book that are outside the scope of the unit. In many cases, this does not matter, but you should be aware of it.

Here are some specific things to be aware of.

- **Auto grade script**: in [unit settings](IAN - link to script in settings), you can specify an auto grade script to execute when the student makes the unit as complete. You can still use this but if the script you are executing needs to be unit specific, then you should include an argument that is passed to your script so it knows the unit context.
- **Plagiarism** - plagiarism detection will work but does not make sense for courses where you would have multiple code assignments
- **Mark as complete**: this works as expected but it cannot set the project to be read-only as the book project can be mapped to other units which will require access.
- **Secure assessments** - if it is important that you minimize the risk of student cheating, then you should be aware of the fact that students may be able to access the terminal window and access all parts of the underlying box. As a result, we would that more secure assessments are placed in project units rather than book based units. This also allows full disabling and setting a project to read-only after being marked as complete.
