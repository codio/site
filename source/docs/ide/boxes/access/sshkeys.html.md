---
title: "Codio Box SSH Keys"
class_name: docs
full_width: true
---

Codio generates a key-pair that can be used for services like Github, so you can upload your public key to those systems (read [this section](/docs/ide/boxes/access/ssh-access/) for details on how to upload Github and Bitbucket public keys with a single button press).

You can find your Codio public key as [described here](/docs/dashboard/settings/public-key).

When you create a new Codio project, your user keys are automatically copied into your project and can be found in the `~/.ssh` folder. You will need to open up a Terminal window to access this folder and the keys stored in the `id_rsa` file.

