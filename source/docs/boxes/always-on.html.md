---
title: "Always-On Boxes"
class_name: docs
full_width: true
---

Always-On Boxes is now available in Beta for all paid subscribers. 

For the duration of the Beta, you can enable a single Box to be Always-On. This means that it will remain active whether you are in the IDE or even logged out.

When we come out of beta, we will provide a means of enabling more than one Box to be Always-On.

You can set a Box to Always-On from the 'Project->Settings' menu if you're in the IDE. If you're in the Dashboard, then press the gear icon on a project item to change its settings.

##Keeping processes running
When you exit your project in the IDE and return to the Dashboard, any processes that were started within a terminal window will terminate.

You can prevent this in one of two ways.

###The simple way
One simple way to avoid this issue is to append `&` to the terminal command that starts your process. You will see output as usual but may need to press the enter key to get a fresh command prompt. 

Then, you will need to enter the following command before you close the terminal window or exit your project and return to the dashboard.

```bash
disown -a
```

###tmux
As an alternative, you can install tmux (available as a Box Part, `parts install tmux`). 