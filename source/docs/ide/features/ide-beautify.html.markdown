---
title: Code Beautification
class_name: docs
full_width: true
---

You can format your code by pressing the keyboard shortcut as defined in the [User Preferences](/docs/ide/customization/codio-prefs). By default, it is

- key_format_code = Cmd+Shift+B (for a Mac)
- key_format_code = Ctrl+Shift+B (for anything else)

It will indent your code correctly and manage spaces and other cool things.

For example, if you start our with this

```js
if ('this_is'==/an_example/){of_beautifer();}else{var a=b?(c%d):e[f];}
```

Then after beautifying, you will end up with this

```js
if ('this_is' == /an_example/) {
    of_beautifer();
} else {
    var a = b ? (c % d) : e[f];
}
```
##Settings
If you look within the [code-beautifier] section of the Codio Preferences, you will see the various beautification settings available.

Don't forget, you can force these at the [Project level preferences](/docs/ide/customization/project-prefs) if you want to have consistently beautified code regardless of who edits your code.
