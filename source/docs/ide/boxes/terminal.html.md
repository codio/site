---
title: "Terminal Window"
class_name: docs
full_width: true
---

You can access the Terminal window 

- from the 'Tools->Terminal' menu item
- or by pressing the terminal icon in the bar at the top of the file tree. 

<img alt="terminal icon" src="/img/docs/terminalicon.png" class="simple"/>

This will open up a terminal window in a new IDE panel. You can have multiple terminals open simultaneously.

Note that you can create tabs and panels anywhere you like using Codio's [Panels and Tabs](/docs/ide/panels/) features.

<img alt="terminal" src="/img/docs/terminal.png" class="simple"/>

##Terminal Settings
You can modify various Terminal settings from the Codio->Preferences menu.

The available settings (and their defaults) are listed below. Preferences can be modified at the User level as [described here](/docs/ide/customization/codio-prefs). You can also force settings at the Project level but these will then override for all users looking at this project, so should be used sparingly.

```ini
[terminal]

;Font size.
; Type: int 
font_size = 12

;Terminal theme.
; Type: string 
theme = dark

;Number of lines available in the scroll history.
; Type: int 
scrollback = 3000

;Quick Connect
; Type: hotkey 
show-connect-dialog = 

;Connections Manager
; Type: hotkey 
show-connections-manager = 

;Terminal. SSH connection to the box
; Type: hotkey 
backend-connection = Shift+Alt+T
```
