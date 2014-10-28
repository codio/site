---
title: "Searching projects"
class_name: docs
full_width: true
---

Codio let's you locate projects in a number of different ways from your project dashboard.

##Normal Searching
The simplest and most powerful way to use search is to simply start typing, whereupon Codio will search within all project names, project description and owner fields and filter your project list accordingly.

##Advanced Searching
If you want to search in different ways, you can use search tokens to narrow your search. Codio supports the following tokens:

###Tokens with parameters
The following tokens allow you to type something after the colon delimiter

- `name:` search the project name
- `desc:` search the project description
- `owner:` search the project owner
- 'org:' search for an organization name
- 'begin:' search for a class start date (Education feature)
- 'end:' search for a class end date (Education feature)

###Tokens without parameters
These tokens do not take any parameters so add a space after them if you have anything else to enter in the search line.

- `my:` show only projects owned by me.
- `shared:` show only projects that are shared with me.
- `public:` show only my public projects.
- `private:` show only my private projects.

###Examples
- `public: desc:javascript` searches your public projects where 'javascript' appears in the project description.
- `owner:superman javascript` searches projects owned by the user 'superman'' where 'javascript' appears in the project name or description.