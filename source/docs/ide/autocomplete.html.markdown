---
title: Autocomplete
class_name: docs
full_width: true
---

Autocomplete is supported within HTML, CSS and Javascript files. Just type away and we will automatically show you matches for what you are typing. 

If you don't like your auto-complete auto-completing, just set the preference `automatic_completions = false`.

##HTML Tags
Auto complete is context sensitive, so you will only be shown Tags that are relevant to your location within the HTML file.

For example, if you are not within `<body></body>`, you will see a much reduced set of options in the auto complete popup. However, place your cursor inside the `<body></body>` tags and you will see the full list of standard HTML tags.

##HTML Attribtues
If you have entered `<a `, then invoke auto complete, you are presented with a list of relevant attributes for the `<a>` tag.

##Tern & Javascript
We support intelligent autocomplete using TernJS. Tern also support explicit directives in the `.tern-project` file you can place in the root of your project.

This file looks like this

```json
{
  "libs": [
    "browser",
    "jquery"
  ],
  "loadEagerly": [
    "importantfile.js"
  ],
  "plugins": {
    "requirejs": {
      "baseURL": "./",
      "paths": {}
    }
  }
}
```

Please refer to the [Tern documentation](http://ternjs.net/doc/manual.html#configuration) for full details on how to configure this file.


##CSS
Use ctrl+space within your CSS to invoke auto complete.