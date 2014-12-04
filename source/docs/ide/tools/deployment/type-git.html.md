---
title: Git Target Type
class_name: docs
full_width: true
---

The Git target type allows you to deploy to any remote Git server. You supply the usual Git access details.

If you prefer, you can deploy to any remote Git server using the command line. Simply [access your Box Terminal](/docs/boxes/terminal/).

##Existing Remote
If you imported your project from a remote Git repo or used `git add remote` from the command line, you will see existing remotes listed in the 'Remote' dropdown box and you can select it.

##Adding a Remote
You can add a new remote by selecting 'Add remote ...' from the dropdown. You can then enter your remote details.

##Committed Files
Codio will only do the equivalent of e `git push remote-name current-branch` and so you need to have staged and committed your files first from the Command Line.
