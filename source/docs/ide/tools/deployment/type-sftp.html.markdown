---
title: SFTP Target Type
class_name: docs
full_width: true
---

The SFTP target type allows you to deploy to any SFTP server. You can use a password and/or a public key for authentication.

![sftp dialog](/img/docs/deploy-sftp.png)

##Base Path
We recommend you set the base path field for remote servers as [described here](/docs/ide/tools/deployment/basepath). This will be useful when using the [Preview](/docs/ide/features/inline-preview) feature.

##Public Key Authentication
Codio auto-generates a public key that is uniquely associated with your user account. You can find this public key in the [User Settings dialog](/docs/dashboard/settings/public-key). You should make sure that this public key is added to your remote server.

##Specifying a Port
If you want to override the default SFTP port (22) then you can add the port number to the domain name as shown below

```bash
mydomain.com:1234
```

##User Name
You will need to supply a valid user name for your remote server regardless of the authentication method.

##Password Authentication
If you are using a public key then you can leave the password field empty.

If you do not want to use a public key, then you will need to use a password for authentication. Simply provide the details in the Codio dialog. You can use both a public key and a password if you like.

##Empty Destination Path
Be very careful when checking this box. It will brutally remove all content from specified location on the remote server before the deploy starts.
