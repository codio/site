---
title: "Language server protocol"
class_name: docs
full_width: true
---

The Language Server protocol is used to integrate features like auto complete, go to definition, find all references.

**Java, OCAML and Python** are currently available.

Python Example:
<img alt="Python" src="/img/docs/pythonexample.png" class="simple"/>

## Implementing LSP support

Enable LSP support in your [User](/docs/ide/customization/codio-prefs/) (or [Project](/docs/ide/customization/project-prefs/)) Preferences, entering
```
[codio-lsp]
enable_lsp_support = true
```
If you are [authoring](/docs/content/authoring/) content for use in a course/class, we recommend enabling as a [project preference](/docs/ide/customization/project-prefs/) as these will be applied over any preferences users may set

## Installing language server protocols

To install language server protocols, go to the menu **Tools->Install Software** and locate the relevant component.  Press the install button in the relevant row. The installation may take a few minutes and you should then [Restart](/docs/ide/boxes/restart-reset/) your Box before proceeding.

## Autocomplete

Autocomplete is not automatically triggered as in HTML/CSS/JS files. To invoke autocomplete for language server protocol implemented files, use :

```
Mac: Shift+Space
Others: Ctrl+Space
```
If you wish to change the default preference to something else you can. See [User Preferences](/docs/ide/customization/codio-prefs/) for more on this


