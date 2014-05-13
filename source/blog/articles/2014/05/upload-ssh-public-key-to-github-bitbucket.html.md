---
title: Upload Public SSH key to GitHub and BitBucket
author: Joel Moss
date: 2014-05-13
tags: Changelog
class_name: blog
full_width: true
---

We just made it even easier for you to connect your Codio projects with your GitHub and/or BitBucket repositories.

If you open up the `Codio > Account...` menu item, and then click the `GitHub` or `BitBucket` icons within the dialog that popped up, you will see the ability to automatically upload your Codio public SSH key to your connected GitHub/BitBucket account.

Once you have done that, you can connect to these services securely via your SSH public/private key pair that is associated with your Codio account. This is really useful when using Git, as you can communicate with your remote repo without having to enter any authentication details every time you push or pull. This is because your Codio SSH keypair is used.

![Upload your public SSH key to GitHub and BitBucket](blog/ssh-upload.png)