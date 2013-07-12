---
title: Bower
class_name: docs
full_width: true
---

##What is Bower
To quote the [bower.io](http://bower.io) site itself

*Bower is a package manager for the web. It offers a generic, unopinionated solution to the problem of front-end package management, while exposing the package dependency model via an API that can be consumed by a more opinionated build stack. There are no system wide dependencies, no dependencies are shared between different apps, and the dependency tree is flat.*

*Bower runs over Git, and is package-agnostic. A packaged component can be made up of any type of asset, and use any type of transport (e.g., AMD, CommonJS, etc.).*

##Or for the uninitiated
Have you ever noticed that you are repeating yourself by updating one by one JavaScript, CSS and images for your customers when there is an update at a JavaScript plugin?

Also how many times did you forget to update a JavaScript plugin, a CSS or even an image at the plugin and the browser crashes because of that? Wouldn't you prefer to just type an update command and have all the JavaScripts, CSS and images upgrade automatically for you? 

That's what Bower does for you. In summary

- you can search a standard repository of Bower components
- you can install any of these components
- dependencies are automatically installed and managed
- component updates are handled by Bower, too
- Bower is sensitive to component updates that should be backwards compatible


##How does Codio implement Bower?
Codio has incorporated Bower directly into the platform itself and made the whole thing accessible through the Codio UI.

You can browse the entire registry of Bower components and then manage installation and uninstallation.

