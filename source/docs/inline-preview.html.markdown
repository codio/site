---
title: "Preview"
class_name: docs
full_width: true
---

The Preview button lets you preview one or more web pages with a simple button press. Codio creates three default in the Preview menu automatically.

- **The Project Index** - this is the default file to run for your project. It can be set by right-clicking a file in the file tree. This option should only be used to preview static content (typically .html files). For PHP, Ruby etc. you should use the 'Box URL' option.
- **Current File** - whichever code file currently has focus. This option should only be used to preview static content (typically .html files). For PHP, Ruby etc. you should use the 'Box URL' option.
- **Box** URL - use this option for previewing PHP, Ruby or other server side languages. There is more documentation on this here.

You can modify the Preview menu as explained below.

![preview](/img/docs/preview-deploy.png)

If you right-click a file in the file tree or the Tab, you can also select 'Preview current file'.

![preview](/img/docs/preview-deploy-right-click.png)

##Customizing the Preview menu
You are free to customize the menu by modifying the `.codio` file that lives in the root of your project. For details about the various tokens that can be inserted, please refer to ['Customizing the Run menu'](/docs/boxes/run). `{{domain}}` is the key token and is replaced by the public url of your project. In most cases you will want to add the Port number to your service, as shown in the example below.

	{
	    "commands": {
	        "Run Lesson" : "cd {{path}} && learnyounode select {{filename_no_ext}} > /dev/null && learnyounode run {{filename_no_ext}} ",
	        "Verify Lesson" : "cd {{path}}  && learnyounode select {{filename_no_ext}} > /dev/null && learnyounode verify {{filename_no_ext}}",
	        "Completed Lessons" : "learnyounode"
	    }, 
		"preview": {
		    "Project index": "{{domain}}",
		    "Current file": "{{domain}}/{{current_file}}",
		    "Rails": "{{domain}}:3000"
		}	    
	}


##Preview in a Codio tab or new browser tab
In the Preview dropdown menu, you can select one of the following ways to preview

- **Inside Codio** : displays the preview in a Codio tab
- **New browser tab** : it will open up a new browser tab or window.

![preview](/img/docs/preview-where.png)


##Insecure Content with In-Tab preview and front-end code
Codio runs over https and the inline preview runs over https, too. If your code references an external resource (script, font, image etc.) such as

	<script src="http://code.angularjs.org/1.1.5/angular.js">

then you will get a browser error indicating that there is some form of insecure content because you are running in a mixed http/https mode.

There are 3 ways to avoid this

- expand the inline preview into a new browser tab (icon is in the small floating toolbar in the top right of the preview tab) and then modify the url from `https://codio.io/xxxx` to `http://codio.io/xxxx`
- modify your external references to https
- modify your references to use the 'current protocol' by including '//' without http or https, so `<script src="//code.angularjs.org/1.1.5/angular.js">`
- if none of the above work, then get the external file then include and reference it within the Codio project itself

