---
title: Quick Connect
class_name: docs
full_width: true
---

The Quick Connect Option (**Tools > SSH > Quick Connect**) lets you access remote servers on an ad hoc basis. You just enter the remote server credentials : user name, hostname and optionally port.

Specify a friendly name if you want to save the connection details.

<img alt="ssh paramaters" src="/img/docs/ssh-parms.png" class="simple"/>

If you do not want to install a public key remotely, then Codio will connect to the remote server, which will prompt you for a password.

## Connect
When you press Connect, a tab will open up in the current panel and off you go. The connection details will not be saved.

## Connect & Save
This connects but also saves the connection details to the [SSH Connection Manager](/docs/ide/tools/ssh/ssh-manager/).


## Public Keys
If you want to add your Codio public key to the remote server, then you should Connect & Save. Then go to the SSH Connection Manager and press the public key button as [described here](/docs/ide/tools/ssh/ssh-manager).
