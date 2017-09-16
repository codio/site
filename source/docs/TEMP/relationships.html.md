---
title: "About Books, courses and classes"
class_name: docs
full_width: true
---

For new Codio users, the relationship between books, courses and classes can be quite hard to grasp. However, once understood, it offers a very powerful way to handle the authoring and publishing process that saves a lot of times and effort as you teach the same book based materials repeatedly to different classes of students.

## Choosing between book units and project units
It is very important to make a clear distinction here. 

## Book
A book is a body of work that can be thought of much like a hard copy book. You would typically go through several stages.

- Build a rough outline (using the Table of Contents)
- Create a first draft
- Go through various editing and review stages
- Produce a final draft
- Publish the first edition

Once published, you might then want to produce new editions with new content or corrections. Once that is complete, you would publish a new version. However, while you are working your second edition, you do not want your changes to affect anything else.

IAN : Image of a book (with icon please)

## Course
A course is a mapping of parts of the book to something that approximates lessons, weeks in the course you teach, or some other sub-division of the book.

So, some or all of a course can be based on a book in the same way that a course you teach might use a hard copy text book as your supporting teaching materials. 

In Codio, you can create a course that maps to parts of a single book, parts of more than or a mix of books and standard Codio project units.

IAN - image of a course module with its units. Highlight what part is the course, module and unit.

### Modules
A course is made up of modules and units. A module is nothing more than a container for the units and you can define these in any way you like. For example, let's say you have a course **CS 101** that consists of 30 weeks of teaching and is based on a single book. Let's also say that you want to subdivide your course into weekly units. You would end up with a structure like this.

**CS 101**
- Week 1 
- Week 2
- Week 3
- ...
- Week 30

You always need at least one module in Codio, so you would actually have the following

**CS 101**
- My Only Module
  - Week 1 
  - Week 2
  - Week 3
  - ...
  - Week 30
  
By creating more than one module, you can create a simple organizational hierarchy that makes it a little clearer. For example

**CS 101**
- Introduction to Programming
  - Variables 
  - Conditional expressions
  - Loops
  - etc.
- Algorithms
  - Insert sort
  - Bubble sort
  - Merge sort
- Data Structures
  etc.
  
This is visually especially useful if you have a large number of units.  

### Units
A unit is the really important item. It is the unit of content that you assign to a class. It is entirely up to you how much content this contains. Often the content it addresses would be a lesson, or perhaps an assignment for a week.

When you create a new unit, you can specify the source of that unit, which is either a project type unit (discussed [here]( IAN )) or a book. 

In the case of a book, it will usually be a subset of the book. It could be a chapter, a section or even a few manually selected pages from any parts of the book.

## Classes
A class is a collection of students that is typically taught as a body. Let's say you are teaching the course **CS 101** in Semester 1. If you are teaching all students together, then you would create a single class.

However, Mrs A might be teaching 100 students (Class A) while Mr B is teaching a different group of 50 students (Class B). In this case, you would create 2 classes.

Now let's say that you want to teach **CS 101** to both classes. In **Class A**, you can simply assign the module **Introduction to Programming** to **Class A**. This instantly adds all teaching units to that class. Nextm you select **Class B** and do the same. 

Next semester, you might be teaching a new set of students **CS 101** again. So you create a new class and assign the module in the same way.

IAN - image of a course assigned to a class

So, the beauty of this structure is the fact that a course an be reused as many times as needed with just a couple of clicks.

## Details
With this approach, and as explained in more detail in other sections, you can seperate the book from the course from the class and work at any level without worrying about your second edition of the book affecting either the published course or classes to which that course have been assigned. 

You can even make small changes to your book and upgrade the course and the class once the class assignment has already been made. This does not happen automatically, which could be undesirable, but Codio allows you to manually handle situations like this. 