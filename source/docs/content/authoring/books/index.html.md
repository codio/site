---
title: "Books"
class_name: docs
full_width: true
---

Codio Books lets you build a complete book, with chapters, sections and pages that can be nested to any depth to form a table of contents and associated content that mirrors a normal book structure.

What makes a Codio book especially powerful is that it still sits on top of a Codio box. Before we introduced books, you had to create a unit with a Codio Guide as the tutorial. While this is also powerful, it means that large courses will consist of many different units and switching between the units is slow.

### Courses
Rather than assign a Book to a class, you can map any sections of the Book to the usual course and module structure. So you can still divide a course into modules and units and assign these to a class but, provided the course author wants to, students can look at any part of the book even when assigned a single unit. This is ideal for referring back to material covered previously and for revision.

### Assessments
Although it is entirely up to the book author, a book will usually contains a number of assessment. When you map a course unit to a section of the book, any assessments that fall within that unit will be reflected in the class dashboard.

### Unit restrictions
There are certain things that you cannot do when using book mapped units. If you require any of the following actions, then you should create normal units within the course module that are not mapped to the book.

- Enable/disable unit: because the underlying book is a single Codio project, you cannot disable or enabled a unit mapped to a book
- Auto grade script: for normal units, you can specify an auto grade script to execute when the student makes the unit as complete
- Plagiarism - plagiarism detection will work but does not make sense for courses where you would have multiple code assignments
- Mark as complete: this will work correctly if all you are interested in is for the teacher/instructor to see a visual indication that a unit has been completed, but the unit will not be disabled as can be specified for normal units

### Project Assignments
If you are assigning code projects to students in a Unit then you should be very much aware of the above unit restrictions. It is often best to have such assignments in a normal unit within a course. This way you can take advantage of those features that are often required for such assignments.