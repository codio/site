---
title: Deploying to a Target
class_name: docs
full_width: true
---

There are two menu locations for deploying your projects.

## `Tools > Deployment > Deploy`
This let's you deploy to any of your deployment targets. You are shown a log if any errors occur.

![deploy screen](/img/docs/deploy-menu.png)

##Preview / Deploy button
[Described here](/docs/inline-preview), this offers deployment via a simple button press. If you check either of the 'Deploy' or 'Deploy & Preview' options, Codio will deploy to the default target when the button is pressed. The default target can be see under the 'Default Deployment Target' menu option.

You can change the default deployment target either from the menu as shown, or from the `Tools > Deployment > Manage Target` dialog, where you can press the default target button in the listed targets.

![deploy screen](/img/docs/deploy-button.png)

##Base Path
When using remote servers, you should make sure that you have [set your base path correctly](/docs/deployment/basepath) so Preview knows where to locate your files on the remotes.

If you encounter any errors when using Deploy & Preview, you should try the `Tools > Deployment > Deploy` option as this gives you a full error log.

![deploy screen](/img/docs/deploy-basepath.png)