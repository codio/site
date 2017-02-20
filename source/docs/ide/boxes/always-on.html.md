---
title: "Always-On Boxes"
class_name: docs
full_width: true
---

Always-On Boxes is now available for all paid subscribers. You can enable Box(es) to be Always-On. This means that it will remain active whether you are in the IDE or even logged out. If your project is archived due to inactivity (usually 30 days since last opened), this process removes it from the active fileserver and will also mean that it can no longer be 'Always-On'. The number of Always-On Boxes you can have depends on the subscription plan

### Marking a Project as Always On
You can set a Box to Always-On from the 'Project->Settings' menu if you're in the IDE. If you're in the Dashboard, select Projects to get the listing, then press the gear icon on the right side of the Project listing. You will be shown the settings screen where you can enable the Always On switch.

### Keeping terminal processes running
When you exit your project in the IDE and return to the Dashboard, any processes that were started within a terminal window will terminate.

You can prevent this in one of two ways.

#### The simple way
One simple way to avoid this issue is to append `&` to the terminal command that starts your process. You will see output as usual but may need to press the enter key to get a fresh command prompt.

Then, you will need to enter the following command before you close the terminal window or exit your project and return to the dashboard.

```bash
disown -a
```

#### tmux
As an alternative, you can install tmux.
