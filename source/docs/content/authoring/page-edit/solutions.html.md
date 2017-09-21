---
title: "Teacher only content"
class_name: docs
full_width: true
---



Teacher only content can be viewed by teachers when:

- using [open as teacher](/docs/classes/unitmanagement/settings-info/teachersolutions) opening a unit within a course module in a class
- [viewing student code](/docs/classes/monitor/studentcode) within a class
- working on a unit in a [course](/docs/courses/working-with/) with the 'View as teacher' function enabled 
<img alt="View as Teacher" src="/img/docs/teachersolutions.png" class="simple"/>


Warning

- If your project is public and a user accesses this project via the public listing of your account then they will have access to the solutions.

You can make content available on to class teachers in the following ways.

### Entire page
If you want a page and its appearance in the table of contents to be only visible to a teacher, then you should enable the **Teacher Only** slider in the [page settings](/docs/content/authoring/settings-actions/page#teacheronly).

### Selected content within page
If you want to hide a certain piece of information *within a page* from students then you should include all such content within a page within `|||guidance ..... |||`. An example is shown below.

```
|||guidance
### Solution
This solution will only be shown

- to teachers
- provided the content is published within a unit
- if you share a project normally or it is public and a student loads it, they have access to this content.

|||
```

Teacher only content can also be shown to teachers within an assessment question. This allows an question's answer rationale to be shown. Please refer to the [assessments section](/docs/content/authoring/assessments) for more details.
