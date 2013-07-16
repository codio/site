---
title: Bower
class_name: docs
full_width: true
---

##What is Bower
To quote the [bower.io](http://bower.io) site itself

*"Bower is a package manager for the web. It offers a generic, unopinionated solution to the problem of front-end package management, while exposing the package dependency model via an API that can be consumed by a more opinionated build stack. There are no system wide dependencies, no dependencies are shared between different apps, and the dependency tree is flat.*

*Bower runs over Git, and is package-agnostic. A packaged component can be made up of any type of asset, and use any type of transport (e.g., AMD, CommonJS, etc.)."*

##Or for the uninitiated
Have you ever noticed that you repeat yourself horribly by updating JavaScript libraries, CSS and images laboriously, one-by-one whenever there is an update available?

And how many times did you forget to update a JavaScript plugin or some CSS resulting in some sort of crash. Wouldn't you prefer to just automatically update everything with the press of a button? 

Bower does the following for you

- you can search a global repository of Bower components
- you can install any of these components instantly
- dependencies are automatically installed and managed
- component updates are handled

##Usage in practice
You would normally do the following to link to a library

	<script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>

With Bower, it becomes 

	<script src="/components/jquery.js"></script>


##How does Codio implement Bower?
Codio has incorporated Bower directly into the platform itself and made the whole thing accessible through the Codio UI.

You can browse the entire registry of Bower components and then manage installation and uninstallation.

