---
title: "Syncing with Dropbox"
class_name: docs
full_width: true
---

Syncronizing with Dropbox is done using a [Box Part](/docs/boxes/box-parts). This tutorial explains the steps and the caveats.


##IMPORTANT: FOR GIT USERS
If you are using Git, you run a risk of corrupting your Git repo if you use Dropbox. The reason for this is that Dropbox is permamenently syncing folders and if you are also working on the same code on your local machine using a desktop editor, then you could end up with both Codio and your local machine trying to operate on the Git repo simultaneously. 

Of course, this will not damage a remote Git repo such as GitHub/BitBucket, and so you can clone things back from the remote repo, but you could lose work you have not pushed to that remote repo.

So, for Git users, the safest approach is to stick to using GitHub or BitBucket to syncronize between Codio and your desktop.

##Installing the Dropbox Box Part
To install Dropbox, open up a Terminal window from the Tools->Terminal menu and then enter the following.

    parts install dropbox
    
##Linking Codio to Dropbox
Now, we are ready to initialize the connection between Codio and Dropbox. Enter the following

    dropbox_init

This starts a script running that displays a link similar to this

    https://www.dropbox.com/cli_link?host_id=abcdc16c2abcd586f7543f33972b4b4d04

Copy & paste this into a new browser tab in order to verify the link. Then, go back to the terminal and you should this message ...

    Trying to exclude folders, please wait...    
    This computer is now linked to Dropbox. Welcome Freddy 

Do not kill this process and wait for it to complete and return you to the command prompt. Beware of scrolling the terminal window in case it has completed and you do not see it. If in doubt, press enter a couple of times and you will see the command prompt even if scrolled up.

##The Dropbox Folder
Dropbox works by syncing the contents of the `/home/codio/Dropbox` folder. Because you likely only want to sync your Codio workspace, we later see how to set up a symlink in that folder that points to your workspace.
    
##Start Dropbox on your Codio Box
You will need to start the Dropbox service on Codio as follows

    parts start dropbox
    
If you want Dropbox to start each time you open your project (Boxes are shut down when you close projects currently) then you should create a `startup.sh` file in the root of your project and add the following lines

    parts stop dropbox
    parts start dropbox

##Checking the Sync status
You should now check to see how sycning is progressing as follows ...

    dropbox.py status 
    
Because of Dropbox issues, it can happen that our attempt to exclude existing folders fails. If the above status check takes a long time (it should be done in a few seconds) then you can check to see what folders are being excluded using `dropbox.py exclude`. If you do not see your existing Dropbox folders listed, then run this command `dropbox.py exclude add /home/codio/Dropbox/*`.

When `dropbox.py status` says 'Up to date' you are ready to move on.

##Files initially on Codio but not in Dropbox
If you have your files in Codio and want to get them into Dropbox, you should now create a symlink with the following command (change `myproject` to something appropriate) ...

    ln -s /home/codio/workspace /home/codio/Dropbox/myproject

Check the status and you should soon see your `myproject` folder and files within your Dropbox folder.

##Files initially on Dropbox but not in Codio
If you have a project ready and waiting in Dropbox and you want to get it into Codio, then having followed the above steps, Dropbox will be syncronizing already. However, because we do not want to have all Dropbox folders on your Codio Box, we have explicitly excluded everything. You now need to remove the exclusion. Enter 

    dropbox.py exclude

and you will see all your current Dropbox folders listed. Let's say your project folder is called `myproject`, you now need to remove the exclusion with the following command

    dropbox.py exclude remove myproject
    
At this point, Dropbox will fetch that folder. Run `dropbox.py status` to see when it is completed. 

You will now find your project in the `~/Dropbox` folder. Let's move the entire contents to the Codio workspace with ...

    mv ~/Dropbox/myproject/{*,.*} ~/workspace 

We now remove the `myproject` folder from the Dropbox folder with

    rm -r ~/Dropbox/myproject
    
And finally, we tell Dropbox to sync with the Codio workspace by setting up a new symlink

    ln -s /home/codio/workspace /home/codio/Dropbox/myproject

Again, check the status with `dropbox.py status` and once it says 'Up to date', you're done.

##Adding future exclusions
If add **any** new Dropbox folders, these will be automatically synced with your Codio Box (into the `~/Dropbox` folder). This will waste space on your Box and so you should add exclusions using the followinf command

    dropbox.py exclude add <folder or filename>
    




