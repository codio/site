---
title: "Search and replace"
class_name: docs
full_width: true
---

Codio supports local and global search and replace. You can access these feature by hotkey or from the Find menu.

Hotkey shortcuts can be seen in the Find menu. You can override these from [Preferences](/docs/settings-prefs/codio-prefs/).

##Local
Search and replace is supported on the currently selected file. 

The hotkeys are defined in Preferences and the defaults are

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

##Global 
Global search and replace are available within the Find menu under Find in project and Replace in project.

You can search using regular expressions, ignore case and whole word settings.

##Pattern & Wildcard Matching (Globs)
When you are searching, you can specify a search pattern in the 'Files' field.


### Basic Rules

Any character that appears in a pattern, other than the special pattern characters described below, matches itself. The NUL character may not occur in a pattern. A backslash escapes the following character; the escaping backslash is discarded when matching. The special pattern characters must be quoted if they are to be matched literally.

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

### Comparisons to other glob implementations

> From the readme of node-glob.


While strict compliance with the existing standards is a worthwhile goal, some discrepancies exist between node-glob and other implementations, and are intentional.

If the pattern starts with a `!` character, then it is negated. Multiple `!` characters at the start of a pattern will negate the pattern multiple times.

If a pattern starts with `#`, then it is treated as a comment, and will not match anything.  Use `\#` to match a literal `#` at the start of a line.

The double-star character `**` is supported. This is supported in the manner of bsdglob and bash 4.1, where `**` only has special significance if it is the only thing in a path part.  That is, `a/**/b` will match `a/x/y/b`, but `a/**b` will not.
