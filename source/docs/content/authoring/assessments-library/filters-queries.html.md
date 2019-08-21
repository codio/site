---
title: Searching and Adding questions from the Assessments Library
class_name: docs
full_width: true
---
Regardless of whether you are using [Codio's global assessments library](/docs/content/authoring/assessments-library/global-assessments-library) or [your organization's assessment library](/docs/dashboard/create/createlibrary), the steps for searching for and adding assessments from them are the same. 

## Searching Assessments Library
From the assessments drop down, select the "Assessment Library" option.
<img alt="Searching" src="/img/docs/addFromLib.png" class="simple"/>

Use the drop down on the left to indicate which assessments library you want to search.
<img alt="Select library" src="/img/docs/selectLib.png" class="simple"/>

To narrow down the assessments, input a tag and value pair. For example, you can search by the "Programming Language" (tag) and indicate you want "Python" (value) questions. The search is **not** case-sensitive. You will notice that Codio tries to help you by presenting auto-complete suggestions.
<img alt="Autocomplete" src="/img/docs/autoComplete.png" class="simple"/>

Once you have completed inputting the tag and value pair, you will get a list of results.
<img alt="Search results" src="/img/docs/searchResults.png" class="simple"/>

You can add as many additional tag and value pairs to narrow your results by clicking the plus sign to the right of the vale box.
<img alt="Add tags" src="/img/docs/doubleTags.png" class="simple"/>

To navigate through your search results, you can use the scroll bar on the right to scroll through assessments on a page. Once you reach the bottom, you can use the page navigation in the top left to move backwards/forwards a page or jump to a certain page of results.
<img alt="Scroll results" src="/img/docs/scrollThrough.png" class="simple"/>

<a name="previewQuestion"></a>
### Previewing Question
You can get a sneak peek of the question text by clicking within a listed assessment's white box. The question text will appear below the listed value/tag pairs.
<img alt="Previewing" src="/img/docs/previewQuestion1.png" class="simple"/>

If you preview a second question, the first preview will collapse.
<img alt="More previewing" src="/img/docs/previewQuestion2.png" class="simple"/>

### Saving Searches
If you find a set of particular search parameters you want to save, you can do so by simply clicking the "Save" button to the right of the tags and values boxes.
<img alt="authtoken" src="/img/docs/doubleTags2.png" class="simple"/>

A prompt will ask you for the "Search Name" - this is how it will be listed in your saved search list.
<img alt="Search name" src="/img/docs/nameSearch.png" class="simple"/>

### Using Saved Searches
To use a saved search, you click on the "Saved" drop down to the right of the tags and values boxes. Select the search you want to use by clicking on it's name.
<img alt="Saved searches" src="/img/docs/savedSearch.png" class="simple"/>

You will then be able to see all the parameters you saved previously. You can edit these search parameters freely without changing your saved search.
<img alt="Saved searches 2" src="/img/docs/savedSearch2.png" class="simple"/>

If you find a set of search parameters you like better, you can simply save the new set and delete your old search.

### Deleting Saved Searches
To remove a saved search, you click on the "Saved" drop down to the right of the tags and values boxes. Delete the saved search by clicking on the red "x" to the right of it's name.
<img alt="Delete saved search" src="/img/docs/savedSearchDelete.png" class="simple"/>

<a name="addQuestion"></a>
## Adding Questions from Assessments Library
Once you have found an assessment you would like to add to, simply press the "Select" button to the right.
<img alt="Select question" src="/img/docs/selectQuestion.png" class="simple"/>

Please note the difference between layouts to know how it will be inserted.

<a name="simpleComplex"></a>
## Simple vs Complex Layouts
In Codio's assessments libraries, there are two types of layouts:

- Simple
  An assessment in the library has a **simple** layout if it was added with the [*1 Panel without tree* layout](/docs/content/authoring/settings-actions/page/). When adding a simple layout question to your project or book, the assessment will be inserted into the current page at your cursor's location.

- Complex
  An assessment in the library has a **complex** layout if it was added with any layout besides 1 Panel without tree. When adding a complex layout question to your project or book, the assessment will be inserted on a new page directly after the current page.

### How do you tell the difference?
When you are filtering the assessments library, you will notice the "complex layout" icon on assessments saved with a complex layout. All assessments without the icon are simple layout assessments.
<img alt="Layout icon" src="/img/docs/complexLayoutIcon.png" class="simple"/>