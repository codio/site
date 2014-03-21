---
title: "Preview"
class_name: docs
full_width: true
---

##Static vs. Dynamic content
The key thing to understand when using the Preview options is the difference between Static and Dynamic content.

- **Static content** - this refers to your static HTML, CSS, JS and text content. You can use all 'Preview static' options on Static content only. If you try this on PHP files or server applications that listen on a Port (Ruby, Node etc.), you'll get a warning message that links through to this page.
- **Dynamic content** - this refers to files that are executed on the server such as PHP files and server applications (Ruby, Node etc.) that listen on a port. To preview Dynamic content, you need to access your Box via a specific Port number (3000 by default but you can change this). You will want to use the 'Box URL' option for Dynamic content. Read below how to modify the Preview menu so you can access any pages with a single menu click rather than manually modifying the browser url.

##Instructions
The Preview button lets you preview one or more web pages with a simple button press. Codio creates four default entries in the Preview menu automatically. 

![preview](/img/docs/preview-deploy.png)

- **Project Index** - this is the default file to run for your project. It can be set by right-clicking a file in the file tree. This option should only be used to preview static content (typically `.html` files). For PHP, Ruby etc. you should use the 'Box URL' option. 
- **Current File** - whichever code file currently has focus. This option should only be used to preview static content (typically `.html` files). For PHP, Ruby etc. you should use the 'Box URL' option. 
- **Box URL** - use this option for previewing PHP, Ruby or other server side languages over http. [Click here](/docs/boxes/ext-access) for more information on configuring port access for http.
- **Box URL SSL** - use this option for previewing PHP, Ruby or other server side languages over SSL. [Click here](/docs/boxes/ext-access) for more information on configuring port access for https.


If you right-click a file in the file tree or the Tab, you can also select 'Preview current file'.

![preview](/img/docs/preview-deploy-right-click.png)

##Preview in a Codio tab or new browser tab
In the Preview dropdown menu, you can select one of the following ways to preview

- **Inside Codio** : displays the preview in a Codio tab; note that if you are accessing via any port other than Port 80 (the Box URL and Box URL SSL defaults in the screenshot at the top) then this option will only work if you are using HTTPS as Codio itself runs over HTTPS and the browser will not allow mixed HTTP/HTTPS. [See here](/docs/boxes/ext-access) for more details on using HTTPS.
- **New browser tab** : it will open up a new browser tab or window.


##Modifying the Preview menu
You are free to customize the menu in either of the following ways

- From the Preview or Run drop down menus (the two right most Codio menu items), select 'Configure...'
- If it exists already, open the `.codio` file that lives in the root of your project. 

For details about the various tokens that can be inserted, please refer to ['Customizing the Run menu'](/docs/boxes/run). 

`{{domain}}` is the most important token for the Preview menu. It is replaced by the public url of your project. In most cases you will want to add the Port number (default 3000) to your service, as shown in the example below.

	{
	// Configure your Run and Preview buttons here.

	// Run button configuration
	  "commands": {
	        "Node version": "node --version"
	  },

	// Preview button configuration
	  "preview": {
	        "Project Index (static)": "https://{{domain}}/{{index}}",
	        "Current File (static)": "https://{{domain}}/{{filepath}}",
	        "Box URL": "http://{{domain}}:3000/",
	        "Box URL SSL": "https://{{domain}}:9500/"
	  }
	}

Note that static content is served over Port 80. To access dynamic content you will need to specify the appropriate Port (as shown in the 'Box URL' default shown above).

By default, our Apache and Nginx Box Parts are configured to listen to HTTPS on Port 9500, which is why you see we create `"Box URL SSL": "https://{{domain}}:9500/"`. If you want to modify this port then make sure you modify the HTTPS Port in your web server's config file.

If you cannot access your project over SSL then this could be the way your application is configured.

The full range of Codio `{{tokens}}` is explained in [this section](/docs/boxes/run/).

##Insecure Content with In-Tab preview and front-end code
Codio runs over https and the inline preview runs over https, too. If your code references an external resource (script, font, image etc.) such as

	<script src="http://code.angularjs.org/1.1.5/angular.js">

then you will get a browser error indicating that there is some form of insecure content because you are running in a mixed http/https mode.

There are 3 ways to avoid this

- expand the inline preview into a new browser tab (icon is in the small floating toolbar in the top right of the preview tab) and then modify the url from `https://codio.io/xxxx` to `http://codio.io/xxxx`
- modify your external references to https
- modify your references to use the 'current protocol' by including '//' without http or https, so `<script src="//code.angularjs.org/1.1.5/angular.js">`
- if none of the above work, then get the external file then include and reference it within the Codio project itself

