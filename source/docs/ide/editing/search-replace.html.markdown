---
title: "Search and replace"
class_name: docs
full_width: true
---

Codio supports local and global search and replace. You can access these feature by hotkey or from the Find menu.

Hotkey shortcuts can be seen in the Find menu. You can override these from [Preferences](/docs/ide/customization/codio-prefs).

## Local
Search and replace is supported on the currently selected file.

The hotkeys are defined in Preferences and the defaults are

```ini
;Find.
; Type: hotkey
key_find = Cmd+F

;Find next.
; Type: hotkey
key_find_next = Cmd+G

;Find previous.
; Type: hotkey
key_find_prev = Shift+Cmd+G

;Replace.
; Type: hotkey
key_replace = Cmd+Alt+F

;Replace all.
; Type: hotkey
key_replace_all = Shift+Cmd+Alt+F
```

## Global
Global search and replace are available within the Find menu under Find in project and Replace in project.

You can search using regular expressions, ignore case and whole word settings. The buttons on the left of the input fields control these settings.

<img alt="authtoken" src="/img/docs/global-search.png" class="simple"/>

Once the search operation has completed you will see matches listed in a Codio tab. Double click on the highlighted match to open up that file in a new tab.

<img alt="global search dialog" src="/img/docs/search-matches.png" class="simple"/>


## Pattern & Wildcard Matching (Globs)
When you are searching, you can specify a search pattern in the 'Where' field.

Lets say you have the following project

```bash
|-- lib
|  |-- index.js
|  |-- hello_world.js
|-- index.html
|-- 404.html
|-- app.js
`-- gruntfile.coffee
```

then you can use globs to select files in this way:

* All files ending in `.js`: `**/*.js`.
  * `index.js`
  * `hello_world.js`
  * `app.js`
* All files ending in `.html` in the root folder: `*.html`
  * `index.html`
  * `404.html`
* All files in `lib`: `lib/*.*`
  * `index.js`
  * `hello_world.js`
* All files ending in `.html` or `.coffee`: `**/*{.html,.coffee}`
  * `index.html`
  * `404.html`
  * `gruntfile.coffee`
* All files beginning with `index`: `**/index*`
  * `index.js`
  * `index.html`

### Basic Rules

Any character that appears in a pattern, other than the special pattern characters described below, matches itself. The NULL character may not occur in a pattern. A backslash escapes the following character; the escaping backslash is discarded when matching. The special pattern characters must be quoted if they are to be matched literally.

The special pattern characters have the following meanings:

* `*` Matches any string, including the null string. When the globstar shell option is enabled, and `*` is used in a filename expansion context, two adjacent `*`s used as a single pattern will match all files and zero or more directories and subdirectories. If followed by a `/`, two adjacent `*`s will match only directories and subdirectories.

* `?` Matches any single character.

* `[…]` Matches any one of the enclosed characters. A pair of characters separated by a hyphen denotes a range expression; any character that sorts between those two characters, inclusive, using the current locale's collating sequence and character set, is matched. If the first character following the `[` is a `!` or a `^` then any character not enclosed is matched. A `-` may be matched by including it as the first or last character in the set. A `]` may be matched by including it as the first character in the set.

  A character class matches any character belonging to that class. The word character class matches letters, digits, and the character `_`.

  Within `[` and `]`, an equivalence class can be specified using the syntax `[=c=]`, which matches all characters with the same collation weight (as defined by the current locale) as the character c.

  Within `[` and `]`, the syntax [.symbol.] matches the collating symbol symbol.

* `?(pattern-list)` Matches zero or one occurrence of the given patterns.

* `*(pattern-list)` Matches zero or more occurrences of the given patterns.

* `+(pattern-list)` Matches one or more occurrences of the given patterns.

* `@(pattern-list)` Matches one of the given patterns.

* `!(pattern-list)` Matches anything except one of the given patterns.
