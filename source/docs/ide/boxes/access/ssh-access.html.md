---
title: "SSH into your Box"
class_name: docs
full_width: true
---

Unless your project is utilising [Always On Boxes](/docs/ide/boxes/always-on/) you will need to open your Codio Project in order for the Box to be started and ready to receive incoming SSH connections.

### Generating Key Pairs
There are several sites that explain generating SSH keys.

- Windows: [http://kb.siteground.com/how_to_generate_an_ssh_key_on_windows_using_putty/](http://kb.siteground.com/how_to_generate_an_ssh_key_on_windows_using_putty/). Please note that for Windows, you should generate SSH2 RSA key type
- Mac : [https://help.github.com/articles/generating-ssh-keys#platform-mac](https://help.github.com/articles/generating-ssh-keys#platform-mac)
- Linux: [https://help.github.com/articles/generating-ssh-keys#platform-linux](https://help.github.com/articles/generating-ssh-keys#platform-linux)

### Find your local machine's SSH public Key
This is pretty easy to do. On a Mac or Linux box you can get your public key in one of two ways

- **either** copy your local machine's public key to the clipboard from your local machine's terminal using `pbcopy < ~/.ssh/id_rsa.pub`
- **or** on your local machine, open the file `~/.ssh/id_rsa.pub` and copy it to the clipboard. Be careful with some editors that include control characters that you don't want to be copied across.

On a Windows machine you'll probably be using putty, so grab your key from there.

### Uploading your Public Key to your Codio Box
You need to upload the public key you just found in the above steps. Once you have it copied to the clipboard, open a terminal tab in your Codio project and enter this key into the `.ssh/authorized_keys` file. The easiest way to do this is to enter `nano .ssh/authorized_keys` which will open this file in the nano editor and you can paste it in.

You can view/check to see all/any Public key(s) you have uploaded into your project by opening the terminal and running `cat ~/.ssh/authorized_keys`.

### Enabling and Connecting to your Box from your local machine's Terminal

1. Go to 'Project>Settings' and to the [Forwarding Settings](/docs/ide/customisation/project-settings/) tab and click the 'Enable SSH Forwarding' button
1. The connection string you need to use is shown there

You will see connection details like this
`SSH Forwarding: ssh codio@forwarding.codio.com:29119`

You can now connect to your Box from any Terminal window using (in the above example)
`ssh codio@forwarding.codio.com -p 29119`

If you get a message `Permission denied (publickey)` then you have not uploaded your SSH Public Key correctly.

You cannot connect to a Codio Box without using a Public Key.