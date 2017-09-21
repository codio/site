---
title: "Permissions and collaboration"
class_name: docs
full_width: true
---

By default, a book is only available to you for editing purposes and only you can create courses from a Book.

You can change permissions to allow others

- to edit your book
- to create courses from your book.

To modify the permissions, goto **Books** from the dashboard. Then select the settings icon. 

<img alt="Book settings" src="/img/docs/booksettings.png" class="simple"/>

### Private / Public visibility
If the book is set to **Private**, unless you override the permissions, only you can modify a book contents and create course units from it. Private books cannot be assigned to public courses.

If the book is set to **Public**, then any Codio user inside or outside your organization can create courses from your book but they will not be able to edit it.  The default Organisation setting restricts the ability to create Public books. To allow this, see [Public/Private Settings](/docs/dashboard/create/public_private).

<img alt="Book settings page" src="/img/docs/booksettingspage.png" class="simple"/>

### Permissions and collaboration
If you want 2 or more people to collaborate on a book, you need to understand how Codio manages this process.

You need to give explicit permission to other users or to an organization and apply write permissions.

The permissions can be changed by selecting the **Permissions** tab on the book settings screen. You should first specify which user or organization you want to grant permissions to. You need to know the precise organization or user name and this is case sensitive. We do not support lookups as the potential for incorrect assignment is too great.

<img alt="Book permissions" src="/img/docs/book-permissions.png" class="simple"/>

You can grant the following permissions.

- **Read** : this allows the user or organization specified to create course units from your book.
- **Write** : this allows the user or organization to create course units and to edit your book. If you want to co-author/collaborate with another user on a book, then you an either follow the process described below or you can use git and a remote git repo.

It is important to understand that each user editing a book is not actually editing the same physical project. Codio uses snapshotting of the latest published version. If using the basic collaboration approach described below and not git, then you should remember that **only one user should make changes at a time**. 

If User A and User B want to collaborate, then they each need to inform the other when they are working on the content. If they fail to do so, then one person will have to surrender their changes at some point.

Let's say User A has created a book and authored some content. User A now wants User B to be able to work on the content. User A should first [publish](/docs/books/publish) the book. Be aware that if User A does not publish the book, then User B will start with an empty book. 

When User B accesses the book (from the **Shared with me** tab on the main books listing), Codio will take a snapshot of the published book and User B can start work on it. In other words, User B is **not** editing User A's book, User B is now working on a clone of the published book.

User B now makes changes to the book. When done, User B should publish the book and inform User A that the changes are complete and published. At this point, when User A opens the project, a dialog will appear showing that User B has published new changes. User A can now update her own version of the book from this published version. And so the cycle continues. 

[IAN- image of book update required dialog]

You can do this with as many users as you like, provided that only one user is making changes at a time.
