---
title: "PHP"
class_name: docs
full_width: true
---

PHP is not preinstalled on Codio Boxes but it is extremely easy to install. We currently offer PHP5 but can also add [other versions on request](/docs/boxes/request-language). Here's how to install it ...

1. [Create a new project](/docs/console/creating).
1. Once you're in the IDE, select the 'Tools->Terminal' menu item to open up a terminal window.
1. Enter `parts install php5' on the command line (this will also install apache2, aprm apr_util and libmcrypt); [click here](/docs/boxes/box-parts) to read more about installing other system components, known as Box Parts.
1. PHP is now installed and ready to use.

##Autostarting Apache
When you close a project, your Box is automatically shut down after a couple of minutes (but don't worry, it starts so fast when you open your project again you won't even notice). However, your services won't automatically restart unless you tell Codio to start them.

This is simply done by editing the `startup.sh` file [as described here](/docs/boxes/startup).

##Configuring Apache
We set Apache up to automatically point to your workspace, so you should be able to access your `index.php`, for example, without any further configuration.

If you want to change your Apache configuration, then you can edit the `~/.parts/etc/apache2/httpd.conf` file.

##Accessing your application
Once your PHP app is up and running, you can access your project from a browser or API call etc. This is easily using done using [Preview button](/docs/ide/inline-preview). When you click it, you will see the URL to your Box, which will look something like this 

`word1-word2.codiodev.com:port`

TODO : Update URL when in production

##Important Reading Material
We strongly recommend you read up on the following before going too much further

- [Configuring single terminal/console commands from the 'Run' menu](/docs/boxes/run)
- [Restarting and resetting Boxes](/docs/boxes/restart-reset)
- [How to install Box Parts (everything from languages to middleware to databases)](/docs/boxes/box-parts)
- [Requesting new Box Parts](/docs/boxes/request-language)
- [Auto starting Box Parts services](/docs/boxes/startup)

