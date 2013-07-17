---
title: Finding a component
class_name: docs
full_width: true
---

One of the difficulties you may have is finding the Bower component you are looking for. Bower itself relies upon component developers to implement a `bower.json` file correctly. If they don't, then all Bower can do is pull in the entire repository including source code, tests etc. This is a sign that Bower is not really supported and if you think it should be then raise an issue on Github with that project.

##Using the Codio component browser
You can browse Codio components easily enough using the main component browser built right into Codio. Sometimes it is not easy to find the exact component you are looking for. If you look for 'handlebars' for example, you get a lot of matches. 

There are various ways to get quickly to the component you need.

##You already know the component name
If you are already familiar with Bower and you know the Bower command you would execute from the command line, so something like

	bower install handlebars

Then you can enter that name directly in the field at the top of the Codio screen.

![bower folder](/img/docs/bower-install-manual.png)

This will perform the exact same operation in the background. 

##Shims
Some projects provide what are known as 'shims', which is simply a repository that contains only the bare essentials you need to consume that project.

Handlebars.js is a good example. If you search the component directory you will find more than one possible match

- [handlebars-wycats](https://github.com/wycats/handlebars.js) which points to https://github.com/wycats/handlebars.js
- [handlebars.js](https://github.com/wycats/handlebars.js), which confusingly also points to https://github.com/wycats/handlebars.js
- [handlebars](https://github.com/components/handlebars.js) which points to https://github.com/components/handlebars.js - this is the 'shim' library (see image below)

![bower folder](/img/docs/bower-handlebars-shim.png)


###Warning About Shims
One thing you need to be aware of is that a Shim library is a copy of the original base repository and is not linked to the original. If a new version of the original appears, then some manual step is taken by someone to also update the corresponding Shim. 

Until this is done, it is the Shim is out of date. All you can do is to open an issue with both the Shim and the original to ask them to get them in sync.

In the case of many components, this is done quickly but you might want to check.

###Who maintains the Shims
They are maintained by [https://github.com/components/components](https://github.com/components/components).

At the bottom of the readme, you can see that they are inviting issues to get raised or pull requests.

###Full list of Shims
The Github repo is located at [https://github.com/components](https://github.com/components). This is not Bower specific but seems to be used by Bower for this purpose. Other package managers also go here for components, which is why you will see files like `component.json`.

###Bower.json
The bower.json file is the file that Bower expects to find.

