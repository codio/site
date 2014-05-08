---
title: "SSH into your Box"
class_name: docs
full_width: true
---

To access your Box via SSH, you should follow the steps below. 

Until we have Always On Boxes (coming as soon as we can get them to you) you will have to have your Codio Project open in order for the Box to be started and ready to receive incoming SSH connections.

##Generating Key Pairs
We will be updating this document shortly with full details. In the meantime, please look for information on Google.

##Find your local SSH Public Key
This is pretty easy to do. On a Mac or Linux box you can get your public key in one of two ways

- **either** copy to the clipboard from your local machine's terminal using `pbcopy < ~/.ssh/id_rsa.pub`
- **or** open the file `~/.ssh/id_rsa.pub` and copy it to the clipboard. Be careful with some editors that include control characters that you don't want to be copied across.

On a Windows machine you'll probably be using putty, so grab your key from there.

##Upload your Public Key
You need to upload the public key you just found in the above steps. Once you have it copied to the clipboard, choose the 'Project->Upload public key to the Box' menu item and paste in the key. Press the 'Upload' button.

##Connect from your local Terminal
You can find your SSH URL in one of two ways

1. Open up a new terminal window. The Terminal will show something like this
1. Select the 'Project->Box Info' menu item and the dialog will show you your SSH connection deails.

In both cases, you should see connection details like this

`External ssh connection: ssh://codio@ssh1.codio.com:19450`

You can now connect to your Box from any Terminal window using (in the above example)

`ssh codio@ssh1.codio.com -p 19450`

If you get a message `Permission denied (publickey)` then you have not uploaded your SSH Public Key correctly.

You cannot connect to a Codio Box without using a Public Key.