---
title: "Preview"
class_name: docs
full_width: true
---


Codio offers a couple of ways to preview your application.

##Menu
You will find Preview in the Tools menu at the top of the page. 

##Right-Click
If you want to run a specific file, then right-click the file and select Preview.

##Keyboard
The default shortcut for Preview is [TODO].

##Inline or Dedicated Browser Tab

[TODO:new image]
![inline preview](/img/docs/inline-preview.png)

##Security Issues
Codio runs over https and so the inline preview runs over https, too. If you reference an external script or API, for example like this 

	<script src="http://code.angularjs.org/1.1.5/angular.js">

then you will get a browser error.

To avoid this, you should expand the inline preview into a new browser tab (icon is in the bar above inline preview) and then modify the url from `https://codio.io/xxxx` to `http://codio.io/xxxx`

We will shortly be introducing a better way of addressing this.


