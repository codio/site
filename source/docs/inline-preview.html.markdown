---
title: "Preview"
class_name: docs
full_width: true
---

Codio offers a couple of ways to preview your application as you can see from the image.

![Preview menu](/img/docs/preview.png)

You can run a preview window within a [Codio IDE Panel](/docs/panels) as well as in a new browser tab. Configuring the preview in a separate panel lets you edit code and preview at the same time.

![inline preview](/img/docs/inline-preview.png)

##Menu
You will find Preview in the Tools menu at the top of the page.

##Right-Click
If you want to run a specific file, then right-click the file and select Preview.

##Keyboard
The default keyboard shortcuts for Preview can be seen by selecting the Tools->Preview menu item.

##Security Issues
Codio runs over https and so the inline preview has to run over https, too. If you reference an external script or API, for example like this

	<script src="http://code.angularjs.org/1.1.5/angular.js">

then you will get a browser error.

There are 3 ways to avoid this

- expand the inline preview into a new browser tab (icon is in the small floating toolbar in the top right of the preview tab) and then modify the url from `https://codio.io/xxxx` to `http://codio.io/xxxx`
- modify your references to also run over https. This may be a problem once in production if your production server runs http.
- modify your references to use the current protocol like this `<script src="//code.angularjs.org/1.1.5/angular.js">`




