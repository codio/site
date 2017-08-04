---
title: "Best Practice"
class_name: docs
full_width: true
---

Before you start creating your Course content, you should have a solid grasp of the following concepts so you are able to build up courses in a reliable fashion.

### Books, guides or both
A course is usually made up of 

- teaching content 
- coding assignments

Generally speaking, you should consider 

- using a book for teaching content
- standard projects or standard course units for coding assignments and projects. If you are building robust courses that can be assigned repeatedly to a class, then using standard course units is the way to go rather than projects for organizational reasons.

### Markdown
The best way to author content is using markdown. It is extremely easy to write content that renders very nicely and without having to fiddle with HTML. You can embed HTML snippets into a markdown as well where you need full control. 

We have a Cheat Sheet project that you can use to see the full capabilities. To fork this starter pack into your won account, please [click here](https://codio.com/home/starter-packs/cb114a27-d88e-4b74-a2a0-518ccb30dc44/). You should select the **Use Pack** option to create the project. 

### Courses
We recommend you have a solid understanding of Codio courses before you invest a lot of time in content creation. The best approach is to experiment with a very basic course with maybe 2 modules and 2 units in each module. Make sure you understand the difference between a book based unit (typically used for teaching materials and simple assessments) and a project based unit (typically used for coding assignments).

### Media assets
When creating a book or a guide, you will often be working with images, video and other media. We recommend the following.

- Images should be placed in the `.guides/img` folder. You can create sub-folders for organizational purposes.
- Videos should be hosted on a 3rd party platform such as YouTube or Vimeo. You can embed these using regular HTML embed tags as available from those platforms.
- Web based media such as Google Doc documents can be embedded using regular HTML embed tags as available from those platforms.

### Callout blocks
Our markdown support the use of special callout blocks. These provide icons and highlighted backgrounds for various concepts such as : Important, Info, Challenge, Topic, Definition, Meetups, Headline, Hackathon, Create, Calendar, Growth Hack, Debugging, Cross Discipline and more.

Please refer to the **Callout** section of the Guides Books Cheat Sheet. If you have not done so already, fork [this starter pack](https://codio.com/home/starter-packs/cb114a27-d88e-4b74-a2a0-518ccb30dc44/) into your own account. You should select the **Use Pack** option to create the project. 

### Don't make pages too long
Again, this depends on your intended audience but try to keep each page reasonably brief. If the topic is a long one, you may want to break it up into several pages. This prevents lots of scrolling and allows students to digest information in manageable chunks. 

### Hidden folders
Your content will often want to show code samples. Codio's recommended approach is to put each set of code samples into a dedicated folder. Then, using the page settings, you can specify this folder with the consequence that all non-specified folders are hidden from view in the file tree (if you choose to show it).

The benefit of hiding folders is that the student is not distracted by folders and files that are not relevant to the topic you are explaining.

[Click here](/docs/content/authoring/hide-folder) for more details on folder hiding.

### Assessments
Codio offers a range of assessment types that let you create tests in one of two ways

1. Woven into your tutorial content at strategic points.
1. Create a Unit with a lot of assessments that can be used as end of topic or term/semester exams, especially useful in class scnearios.

When used as a part of tutorial content, assessments are a very important way of giving students challenges and excercises that help internalize what they have been learning. We recommend that you make heavy use of assessments.

When used in a class situation, assessments are extremely helpful to the teacher as all assessment results are fed automatically through to the teacher class dashboard, allowing them to monitor students' progress across a Course.

Many of Codio's assessment types (code tests, multiple choice questions, text, fill in the blank and list-based) are auto marked, saving teachers considerable amounts of time and also giving students instant feedback on the correct answers.

[Click here](/docs/content/authoring/assessments) for more on creating assessments.

### Layouts
The Guide editor lets you create different panel layouts for your tutorial content and the layout can change from section to section. 

[Click here](/docs/content/authoring/layouts) for more information on panel layouts.





