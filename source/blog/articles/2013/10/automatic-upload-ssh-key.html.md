---
title: Automatically Upload your Codio Public SSH Key
author: Joel Moss
date: 2013-10-29
tags: 'Product News'
class_name: blog
full_width: true
image: blog/public-key-upload.png
---

Today we're making it even easier to work with server-side code and your development environments. We're about to ship several new features and improvements; the first of which is the ability to automatically upload your Codio SSH Public key to your server.

Codio creates a public key pair for you, which you can then use to make secure connections over SSH and SFTP. Up until now, you had to copy and paste this public key manually, and upload to your server.

**Not any more you don't!**

Just go to the `Codio > Account...` menu item and click the `SSH Key` tab. You will see your public key. You will also see a button `Upload Public Key`, which when clicked will prompt you to enter the credentials of the server where you wish to upload your key. Once complete, your key will be uploaded within seconds.

You can now deploy over SFTP or Rsync safely and securely, as they will use your Codio key-pair wherever possible.

Quick, easy, painless!