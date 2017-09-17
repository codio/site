---
title: "Permissions"
class_name: docs
full_width: true
---

By default, a book is only available to you for editing purposes and only you can create courses from a Book.

You can change permissions to allow others

- to edit your book
- to create courses from your book.

To modify the permissions, goto **Books** from the dashboard. Then select the settings icon. 

### Private / Public visibility
If the book is set to **Private**, unless you override the permissions, only you can modify a book contents and create course units from it. Private books cannot be assigned to public courses.

If the book is set to **Public**, then any Codio user inside or outside your organization can create courses from your book but they will not be able to edit it.  The default Organisation setting restricts the ability to create Public books. To allow this, see [Public/Private Settings](/docs/dashboard/create/public_private).

### Permissions
The permissions can be changed by selecting the **Permissions** tab on the book settings screen. You should first specify which user or organization you want to grant permissions to. You need to know the precise organization or user name and this is case sensitive. We do not support lookups as the potential for incorrect assignment is too great.

You can grant the following permissions.

- **Read** : this allows the user or organization specified to create course units from your book.
- **Write** : this allows the user or organization to both create course units and edit your book. If you want to co-author/collaborate with another user on a book, then we very strongly recommend that you use git and a remote git repo to manage changes and not author simultaneously work on a book. See [Content Collaboration](/docs/courses/course-collaborate) for more information.

