---
title: "Publishing"
class_name: docs
full_width: true
---

It is important to understand how and why a book is published.

Until you publish a book, it behaves exactly as a project does. You can open it up and work with it but it cannot be accessed by anyone or mapped to a course until it has been published. After a book is published, you can continue to work on the book without the published version being affected.

Please note the following about Publishing.

1. It creates a snapshot of the book and creates a published version. 
1. You can continue work on the book without affecting the published version.
1. When you map a course unit to a book, it will only pull from a published version, never the original book project itself.

When you press the **Publish** button, the following screen will appear. 

<img alt="versions" src="/img/docs/book_publish.png" class="simple"/>


#### Only workspace changes made
If, in your book, you have only made changes to the workspace (the workspace is the contents of the file tree in the IDE or `/home/codio/workspace`) then you only need to enter the changelog text, which is a description of the changes made since the last publish.

If you have switched the book's stack then you should select the **Stack not modified** option described below.

<img alt="versions" src="/img/docs/book_stack_notmodified.png" class="simple"/>

Press the **Publish Book** button when ready.

#### Stack modified
If you have made any changes to the stack then you should press the **Stack modified** button. Please be aware that changes to the stack can be made indirectly by applications as well as manual file changes. For example, if you modified a database's contents that is not configured to live in the workspace area then these count as stack changes.

<img alt="versions" src="/img/docs/book_stack_modified.png" class="simple"/>

You should now decide whether you want to 

- create a new version of the stack used by the book
- create a brand new stack for this book. 

#### Stack modified : New Stack Version
Note that if the stack you are using is not owned by you or you don't have permissions to modify the stack, then you will not be able to select this option.

You should enter a description of the stack changes made and then press **Publish Book**. The new stack version will appear in your stacks listing in the normal way.

<img alt="versions" src="/img/docs/book_stack_newversion.png" class="simple"/>

#### Stack modified: New Stack
If you do not have permissions to create a new stack version or you want to create a new stack that this and potentially other books, projects or units should use, then select this option.

This will create a new stack with the permissions you specify. To give access only to others within your organization, select **Private** and then select the owner organization from the drop down list below.

It will take a few minutes to prepare the stack, so please be patient. Once it is created, it will be visible your stacks listing. 

<img alt="versions" src="/img/docs/book_stack_newstack.png" class="simple"/>


### Later book modifications
If, after publishing, you make further changes to our book then you will need to publish again to ensure those changes are available to courses.


### Course mapping
A book cannot be assigned to a class without mapping it through a course. The advantage of this approach is that you can break your book into smaller chunks that map to lessons or lectures. 

You can map the entire book through a single course unit if you are not concerned about detailed unit mappings.

Please refer to [Creating book based course units](/docs/content/authoring/book/unit-book) page for details on how to do this. 


