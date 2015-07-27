---
title: SSH Key
class_name: docs
full_width: true
---

If you are looking to find out how to SSH into your Codio Box, [look here](/docs/ide/boxes/access/ssh-access/).

Codio automatically generates a public key for your account. This key can then be used whenever Codio attempts communication with an external server that requires public/private key based authentication such as SSH or SFTP access.

![public key dialog](/img/docs/prefs-account-ssh.png)

##Where is it used?
Codio makes use of the public key in the following places

- [SFTP deployment target](/docs/ide/tools/deployment/type-sftp)
- [RSYNC deployment target](/docs/ide/tools/deployment/type-rsync)
- [SSH Terminal](/docs/ide/tools/ssh)
- [Git](/docs/ide/editing/git)

In both cases, you will need to install the public key onto the remote system. In the case of SFTP, you should know how to do this already.

##Adding your public key to a remote server
If you want to get your Codio public key onto a remote server, just press the Upload Public Key button. You enter your user credentials on the remote and Codio will get it installed in the `~/.ssh/authorized_keys` file.

<img alt="authtoken" src="/img/docs/prefs-account-ssh-dialog.png" class="simple"/>

##Adding your public key to GitHub or BitBucket
If you are working with GitHub or BitBucket, then you need to install the public key. Codio makes this very easy for you. Goto `Codio>Account` and select GitHub or BitBucket tab and select 'Upload your public key to GitHub/BitBucket'

![SSH Public](/img/docs/prefs-account-gh1.png)

You will be redirected to your GitHub/BitBucket account and asked to authorise the application

On accepting this you will then be redirected back to your Codio account.
