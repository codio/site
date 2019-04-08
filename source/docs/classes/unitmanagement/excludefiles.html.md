---
title: Excluding Files
description: ""
class_name: docs
full_width: true
---

### Excluding files
Files/folders may need to be excluded from students units. Such files may be 
unused resources/logs and other files used when testing the unit prior to publishing.

This can be handled by using `.unitignore` file in the source project and when published to a class, these files/folders will not be available to the students.

Enter on a new line the file/folders to be excluded defining them relative to the location of the `.unitignore` file and defining folders with `/`

For example if the `.unitignore` file is located in the project workspace and you wish to exclude

- `testing` & `node_modules` folder
- the file `checkscore.js` in the `views` folder
- the files `app.js` and `README.md` 

the `.codioignore` file will be

```
/testing
/node_modules
/views/checkscore.js
app.js
README.md
```