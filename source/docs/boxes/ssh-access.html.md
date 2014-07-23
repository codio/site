---
title: "SSH into your Box"
class_name: docs
full_width: true
---

To access your Box via SSH, you should follow the steps below. 

Until we have Always On Boxes (coming as soon as we can get them to you) you will have to have your Codio Project open in order for the Box to be started and ready to receive incoming SSH connections.

##Generating Key Pairs
There are several sites that explain generating SSH keys well. 

- Windows: [http://kb.siteground.com/how_to_generate_an_ssh_key_on_windows_using_putty/](http://kb.siteground.com/how_to_generate_an_ssh_key_on_windows_using_putty/). Please note that for Windows, you should generate SSH2 RSA key type
- Mac : [https://help.github.com/articles/generating-ssh-keys#platform-mac](https://help.github.com/articles/generating-ssh-keys#platform-mac)
- Linux: [https://help.github.com/articles/generating-ssh-keys#platform-linux](https://help.github.com/articles/generating-ssh-keys#platform-linux)

##Find your local SSH Public Key
This is pretty easy to do. On a Mac or Linux box you can get your public key in one of two ways

- **either** copy to the clipboard from your local machine's terminal using `pbcopy < ~/.ssh/id_rsa.pub`
- **or** open the file `~/.ssh/id_rsa.pub` and copy it to the clipboard. Be careful with some editors that include control characters that you don't want to be copied across.

On a Windows machine you'll probably be using putty, so grab your key from there.

##Upload your Public Key
You need to upload the public key you just found in the above steps. Once you have it copied to the clipboard, choose the 'Project->Upload public key to the Box' menu item and paste in the key. Press the 'Upload' button.

If you want to view/check the Public key(s) you have uploaded into your project, open the terminal and run `cat ~/.ssh/authorized_keys`. 

##Connect from your local Terminal
You can find your SSH URL in one of two ways

1. Open up a new terminal window. The Terminal will show something like this

    ![ssh terminal](/img/docs/sshterminal.png)
    
1. Select the 'Project->Box Info' menu item and the dialog will show you your SSH connection deails.

In both cases, you should see connection details like this

`External ssh connection: ssh://codio@ssh1.codio.com:29119`

You can now connect to your Box from any Terminal window using (in the above example)

`ssh codio@ssh1.codio.com -p 29119`

If you get a message `Permission denied (publickey)` then you have not uploaded your SSH Public Key correctly.

You cannot connect to a Codio Box without using a Public Key.