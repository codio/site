---
title: SSH Terminal Access
class_name: docs
full_width: true
---

You can access a remote server directly from within Codio from the Tools->SSH menu item. This will open up a dialog where you can provide your connection credentials.

![ssh parameters](/img/docs/ssh-parms.png)

The terminal tab will then open up.

![ssh parameters](/img/docs/ssh-tab.png)

We will very shortly be introducing a history function so Codio can remember your remote servers and then access them without you having to enter the connection details each time. 

##Password and Public Keys
Codio will attempt to connect to the remote server using your user Public Key. If the public key cannot be found on the remote server, then you will be required to enter the password for your user name on the remote.

To put your [Codio public key](/docs/settings-prefs/account-settings/public-key) onto the remote server, you should go to the Codio->Account menu item and then select SSH Key. You can then either manually add the public key to your authorized_keys file on the remote or you can press the button to have it copied over automatically (which is a lot less effort).
