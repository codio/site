---
title: "Terminal Window"
class_name: docs
full_width: true
---

You can access the Terminal window from the 'Tools->Terminal' menu item. This will open up a terminal window in a new IDE tab. You can also have multiple terminals open simultaneously.

As of June 2015 a subscription is now required to access the terminal. Existing users are not affected.

Note that you can create tabs and panels anywhere you like using Codio's [Panels and Tabs](/docs/ide/panels/) features.

![console terminal](/img/docs/terminal.png)

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
