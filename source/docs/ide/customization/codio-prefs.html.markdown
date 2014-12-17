---
title: User Preferences
class_name: docs
full_width: true
---

You can access the User Preferences using the menu item `Codio > Preferences > User` when you are in a project.

![Codio Annotations](/img/docs/prefs-menu.png)

User Preferences are the full collection of settings that apply to you, the logged in user. They cover all aspects of Codio usage from code editor settings (tab stops, indentation, colors, fonts etc.) through to hotkey keyboard shortcut mappings.

![Codio Annotations](/img/docs/prefs-user.png)

Codio allows you to fully customize all these preferences and the User level and the [Project level](/docs/ide/customization/project-prefs).

Codio does the following to manage the final preferences for the logged in user...

1. Codio defaults are taken
2. Any user overrides are then applied
3. Any project level preferences are finally applied, if any

##Default Preferences
When you create your account, you will be assigned the default settings. You can see these on the right hand side. These settings are read-only, so you cannot modify them. You can browse through this file to see the complete set of preferences available.

Default settings look something like this

```ini
;Brace style.
; Type: list.
; Values:
;  collapse : collapse
;  expand : expand
;  end-expand : end-expand
brace_style = collapse
```

You can see the setting name ('brace_style' with a default value of 'collapse') as well as the data type (list) and the available values (in the case of a list).

##User Preferences
User preferences can be made from the main menu `Codio > Preferences > User`.

User preference overrides are made in left hand pane. When your account is created, this will be empty. Here is an example of user settings that override the Codio defaults ...

```ini
[editor]
theme=eclipse
font_size=13

[code-beautifier]
indent_level=4
indent_with_tabs=true
```

##Keyboard shortcuts & Hotkeys
Within the default settings (right hand pane) you can see how you can map your own keyboard shortcuts.

The defaults will display appropriately for Mac or Linux/PC users. If you override these shortcuts in the left hand pane, then these not Mac/PC/Linux aware. If you are a Mac user and you specify Cmd keys, then you should be aware that these will not be accessible from PC/Linux machines. If you need to have your custom shortcuts working on all machines then avoid using Cmd.

##Using Autocomplete
Be sure to use the Codio autocomplete feature for both the setting name and possible values.

Position the cursor within the left pane and press ctrl+space.

If you are on the first line of the file, you will see that you only have Sections available. If you are within a Section, you will see all available settings for that section.

Having selected a preference, press '=' and then ctrl+space to bring up the autocomplete window again. Depending on the preference type (list or boolean), you will see the available options for that preference.


##Searching for preference settings
If you want to find a preference setting in the default pane, the best thing is to search. This will highlight any matching text.
