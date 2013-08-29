---
title: Settings
class_name: docs
full_width: true
---

Codio provides a very familiar way to manage all of your user specific settings. Your default setings are supplied by Codio and you can see what the defaults are by clicking on the Show/Hide Defaults button.

Here is an example of user settings that override the Codio defaults ...

	[editor]
	theme=eclipse
	font_size=13

	[code-beautifier]
	indent_level=4
	indent_with_tabs=true

##Sections
A setting must be placed within a Section. Section names are contained within square brackets.

##What settings are available?
If you press the Show/Hide Defaults button you will be shown a read-only list of all available settings. You can scroll through the list to explore what is available.

Default settings look something like this 

	;Brace style.
	; Type: list. 
	; Values: 
	;  collapse : collapse
	;  expand : expand
	;  end-expand : end-expand
	brace_style = collapse

From here, you can see the setting name (brace_style) as well as the data type (list) and the available values (in the case of a list).

##Autocomplete
To make your life easier, you can use the Codio autocomplete feature for both the setting name and possible values.

Position the cursor within your settings and press ctrl+space. Depending on where your cursor is located you will see a tailored set of options.

If you are on the first line of the file, you will see that you only have Sections available.

If you are within a Section, you will see all available settings for that section.

