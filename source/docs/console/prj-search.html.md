---
title: "Searching projects"
class_name: docs
full_width: true
---

Codio let's you locate projects in a number of different ways from your project dashboard.

##Normal Searching
The simplest and most powerful way to use search is to simply start typing whereupon Codio will search within Project Name, Project Description and Owner columns and filter your project list accordingly.

##Advanced Searching
If you want to search in different ways, you can use search tokens to narrow your search. Codio supports the following tokens

###Tokens with parameters
The following tokens allow you to type something after the colon delimiter

- **name:** search only in the project name
- **desc:** search only in the project description
- **owner:** search only the project owner

###Tokens without parameters
These tokens do not take any parameters so add a space after them if you have anything else to enter in the search line.

- **my:** show only projects owned by me
- **shared:** show only projects that are shared with me
- **public:** show only public projects owned by me (will not show public projects owned by others)
- **private:** show only my private projects

###Examples

- `public: desc:javacsript` searches my private projects where 'javascript' appears in the project description
- `owner:superman javascript` searches projects owned by the user superman where 'javascript' appears in the project name or description