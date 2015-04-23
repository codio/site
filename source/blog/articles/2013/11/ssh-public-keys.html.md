---
title: SSH Public Key Management
author: Freddy May
date: 2013-11-18
tags: 'Product News'
class_name: blog
full_width: true
---

Our focus is to make all aspects of the development process as smooth and easy as it possibly can be. One small but great example of something that is a real pain in the ass is the business of deploying public keys to a remote server.

##Why are they needed?
Codio has two main features that require access to remote servers:

- SSH Terminal - you can create and manage any number of remote servers directly from Codio. There's a [blog post](/blog/2013/11/ssh/) on this and you can also [read the docs](/docs/ssh).
- Deploying via SFTP and RSYNC

Most developers prefer to use SSH to access remote servers, as it avoids password entry completely and is more secure.

Codio generates public keys that can be found in the `Codio > Account` menu. One way of getting your Codio public key on to the remote server is to copy it and then SSH into your remote server and then add it to your `~/.ssh/authorized_keys` file. However, this is an unnecessary chore. We've made it so you can now upload your keys in 2 ways.

##From your Account dialog
The screenshot below shows how you just need to press the Upload Public Key button and that's it. You will be asked to enter your access details and that's it. You can access this dialog via the `Codio > Account` menu item.

![public key account](/img/blog/key-account.png)

##From the SSH Connection Manager
You can SSH into any remote server right from within Codio. In the connections listing, there's a button you can press that does the same thing as above.

![public key account](/img/blog/key-ssh.png)

