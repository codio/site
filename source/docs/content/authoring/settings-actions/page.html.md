---
title: "Page"
class_name: docs
full_width: true
---

## Layout
You can choose from a variety of panel layouts for each section. This gives you great flexibility in the way you present Guides content and files to the student.

<img alt="authtoken" src="/img/docs/guides/layouts.png" class="simple"/>

The layouts we currently offer can be found in the dropdown list.

Read the 'Specifying a panel' section here: [Auto opening files](/docs/content/settings-actions/auto-open) for information on how to reference these panels when auto opening code files, a preview window or a terminal window.

The top-most and default entry in the Layout dropdown is 'Previous'. This means it will use the same panel layout as specified in the previous section to save having to manually set it each time.

<a name="show-hide"></a>

## Show/Hide Folders
Your content will often want to show code samples. Codio's recommended approach is to put each set of code samples into a dedicated folder. Then, using the page settings, you can specify this folder with the consequence that all non-specified folders are hidden from view in the file tree (if you choose to show it).

The benefit of hiding folders is that the student is not distracted by folders and files that are not relevant to the topic your are explaining.

### Full File Tree:
<img alt="authtoken" src="/img/docs/guides/project_1.png" class="simple"/>

### Hiding of Folders:
<img alt="authtoken" src="/img/docs/guides/project_2.png" class="simple"/>

###  Defining folders
To define which folder(s) to show - any other folders are automatically hidden - first select a page. Next, in the Show Folders field you specify the folder or folders which should be shown in the file tree. Use the `;` character to separate multiple folders.

<img alt="authtoken" src="/img/docs/guides/project_3.png" class="simple"/>

If you have several Guides sections that have the same folders shown, then you only need define the folders on the first section. All subsequent sections will use the same Show Folders setting until a new one is encountered.

## Content Type
You can specify whether the page content type is Markdown (strongly recommended) or HTML. If you choose HTML, then you will need to set the page HTML header and footer in [Global Settings](/docs/content/authoring/global).

## Teacher only content
If this switch is enabled then the page contents will not be show to students. Teachers will be able to see it when they select **Open as teacher** from a unit in a class.

## Learning Objectives
This is a tag field that can be useful for data analysis.

