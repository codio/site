---
title: SSH Key
class_name: docs
full_width: true
---

If you are looking to find out how to SSH into your Codio Box, [look here](/docs/boxes/ssh-access).

Codio automatically generates a public key for your account. This key can then be used whenever Codio attempts communication with an external server that requires public/private key based authentication such as SSH or SFTP access.

![public key dialog](/img/docs/prefs-account-ssh.png)

##Where is it used?
Codio makes use of the public key in the following places

- [SFTP deployment target](/docs/deployment/type-sftp)
- [RSYNC deployment target](/docs/deployment/type-rsync)
- [SSH Terminal](/docs/ssh)
- [Git](/docs/git)

In both cases, you will need to install the public key onto the remote system. In the case of SFTP, you should know how to do this already.

##Adding your public key to a remote server
If you want to get your Codio public key onto a remote server, just press the Upload Public Key button. You enter your user credentials on the remote and Codio will get it installed in the `~/.ssh/authorized_keys` file.

![SSH Upload](/img/docs/prefs-account-ssh-dialog.png)

##Adding your public key to GitHub
If you are working with GitHub, then you need to install the public key. Firstly, locate your settings by pressing the 'Edit your profile' button.

![github setting](/img/docs/git-edit-profile.png)

Next, copy the public key to the clipboard. Then locate the 'SSH Keys' option and add a new SSH key, pasting the public key in.

![github public key](/img/docs/git-ssh.png)

