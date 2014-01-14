---
title: "Templates"
class_name: docs
full_width: true
---

Templates are accessed from the `Tools > Templates` menu option.

A template can be used to create standard stub code when a new file is added to your project. When you create a new template, you associate that template with one or more file extensions.

When you then create a new file, Codio will automatically detect the extension you supply for the filename and then populate the `Use template` dropdown with matching templates.

![new file](/img/docs/templates-newfile.png)

The default CSS template looks like this

		/*
		    Document   : ${PATH}
		    Created on : ${DATE} ${TIME}
		    Author     : ${USER}
		    Description:
		    Purpose of the stylesheet follows.
		    To change this template use Tools | Templates.
		*/

		root {
		    display: block;
		}

##Creating and Editing Templates
You access the template management from the `Tools > Templates` menu.

![new file](/img/docs/templates-manage.png)

`Add` - adds a new template file that you can associate with a file extension. To associate the template with multiple extensions, comma separate as follows `html, htm`
`Edit` - allows you to redefine the file extension associations
`Reset` - available for predefined Codio templates, this removes any modifications you might have made.
`Reset All` - resets all predefined Codio templates and deletes any personal templates you have added.


##Tokens
You can insert tokens into the template file that get substituted at the point a new file is created. The following tokens are available.

`${PROJECT_NAME}` - name of current project
`${PATH}` - full path and filename
`${PATH_NAME}` - file
`${DATE}` - date created
`${TIME}` - time created
`${USER}` - name of user creating file



