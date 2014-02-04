---
title: Rsync Target Type
class_name: docs
full_width: true
---

Rsync is a great way of working with remote servers. It behaves much the same as the SFTP deployment type but rather than deploying all files, it deploys only files that have changed.

You can use a password and/or a public key for authentication.

![rsync dialog](/img/docs/deploy-rsync.png)

##Base Path
We recommend you set the base path field for remote servers as [described here](/docs/deployment/basepath). This will be useful when using the [Preview](/docs/ide/inline-preview) feature.

##Public Key Authentication
Codio auto-generates a public key that is uniquely associated with your user account. You can find this public key in the [User Settings dialog](/docs/settings-prefs/account-settings/public-key). You should make sure that this public key is added to your remote server.

##Protocol
There are two options available

- **SSH** : (recommended) uses an SSH connection to transfer
- **RSYNC Daemon** : this requires you to set up an rsync daemon on the remote server. This is a more complex procedure and so should generally be avoided.


##Specifying a Port
If you want to override the default SFTP port (22) then you can add the port number to the domain name as shown below

	mydomain.com:1234 

##User Name
You will need to supply a valid user name for your remote server regardless of the authentication method.

##Password Authentication
If you are using a public key then you can leave the password field empty.

If you do not want to use a public key, then you will need to use a password for authentication. Simply provide the details in the Codio dialog. 

##Delete Missing Folders
This removes any folders from the remote server that are not present in the Codio project.
