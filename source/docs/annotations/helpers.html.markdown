---
title: Helper keyboard shortcuts
class_name: docs
full_width: true
---

Codio offers a couple of simple shortcut keys to make life easier when adding tokens and annotations.

##ALT+A - Add new token
If you want to insert a token into any source file, use ALT+A. This will insert the correct comment format plus the basics, so something like this

- **HTML** : `<!-- @codio: -->`
- **Javascript** : `// @codio: ` 
- **CSS** : `/* @codio: */`
- **Java, C, Objective-C, C#** : `// @codio: ` 
- and so on

You should then complete the token with the `tour` or `snippet` directive plus a label, so something like

`  // @codio:tour myLabel`

or 

`  // @codio:snippet myOtherLabel`

Don't forget that you will also need to put a closing token at the end of your code snippet

`  // @codio:/tour myLabel`

##SHIFT+ALT+A - Jump to token in annotations.codio
Once you have completed the setup of your token, you can press shift+alt+a to jump to the corresponding location in the `annotations.codio` file.

If the token+label does not yet exist, one will be created. If it does, it will jump to that place in the file. You can then add your markdown content.


