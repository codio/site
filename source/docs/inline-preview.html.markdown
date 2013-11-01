---
title: "Preview"
class_name: docs
full_width: true
---

Codio offers a very comfortable way to Preview your applications. You can find the Preview in the menu bar. If you have selected the Deploy Before Preview option the button label will be Preview & Deploy.

TODO 
![preview](/img/docs/preview-deploy.png)

You can also do the same by right-clicking a file in the file tree. 

TODO 
![preview](/img/docs/preview-deploy-right-click.png)

##What to Preview
When you press the menu bar Preview button, Codio can preview in one of two ways

- **Project Index** : this is currently the index.html file, but we will soon as allowing you to manually specify an alternative index file, such as index.php.
- **Current File** : this will preview the currently open file; if you are using a remote server (PHP, Node etc.) then you may want to set the Deploy before Preview option, which is described below.

You can switch between Project Index and Current File by selecting the dropdown and setting the appropriate option.

TODO 
![preview](/img/docs/preview-what.png)

##Deploy before Preview
If you are working on a file that requires deployment to a remote server (a PHP, Ruby or Node file for example), then you will probably want to select the Deploy Before Preview option from the Preview dropdown menu. This will ensure that the file is properly deployed to the remote server before the preview.

When you check the Deploy Before Preview option in the dropdown, you will see that the button label changes from Preview to Deploy & Preview.

##Default Deployment Target
When you select the Deploy Before Preview option, Codio needs to know which deployment target to use. You can set the default target from the Preview dropdown menu or from Tools->Deployment->Manage Targets.

Deployment targets are covered in detail in the [Deployment section](/docs/deployment).

TODO : show dd menu expanded
![preview](/img/docs/preview-default.png)

##Base Path
If you are not previewing an html file and you have set up a deployment target for a remote server, then make sure you have specified the Base Path field in the deployment target.

##Preview in a Codio tab or new browser tab
In the Preview dropdown menu, you can select one of the following ways to preview

- **Inside Codio** : displays the preview in a Codio tab
- **New browser tab** : it will open up a new browser tab or window.

TODO
![preview](/img/docs/preview-where.png)

##Popup Blocking
With Deploy & Preview, Codio needs to invoke the Preview only after the deploy is complete and so this is necessarily done using Javascript. As a result, your browser's ad-blocker will likely intercept this and you will need to allow the browser to popup a new tab for Codio. In most cases, it will also display this in a new browser window rather than tab. This is beyond Codio's control.

##Private Projects
When you preview a private project, you will be prompted to enter your Codio user name and password in order to protect 3rd parties from accessing your project in preview mode. If you signed up with GitHub and did not set a password, then you can do this from the Codio->Account menu option. You can check your user name on the profile tab.

##Insecure Content with In-Tab preview
Codio runs over https and the inline preview runs over https, too. If your code references an external resource (script, font, image etc.) such as

	<script src="http://code.angularjs.org/1.1.5/angular.js">

then you will get a browser error indicating that there is some form of insecure content because you are running in a mixed http/https mode.

There are 3 ways to avoid this

- expand the inline preview into a new browser tab (icon is in the small floating toolbar in the top right of the preview tab) and then modify the url from `https://codio.io/xxxx` to `http://codio.io/xxxx`
- modify your external references to https
- modify your references to use the 'current protocol' by including '//' without http or https, so `<script src="//code.angularjs.org/1.1.5/angular.js">`
- if none of the above work, then get the external file then include and reference it within the Codio project itself




