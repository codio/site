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

##PHP Modules
Initially, the PHP5 Box Parts installation includes several PHP modules. You can see the pre-installed modules here : [https://github.com/codio/boxparts/blob/master/lib/autoparts/packages/php5.rb#L33-L50](https://github.com/codio/boxparts/blob/master/lib/autoparts/packages/php5.rb#L33-L50).

In addition, we offer many other modules than can be manually installed. These are listed here : [https://github.com/codio/boxparts/tree/master/lib/autoparts/packages](https://github.com/codio/boxparts/tree/master/lib/autoparts/packages). If you type `parts search php` in a terminal window, you will all PHP related parts clearly listed.

By about February 21st 2014, we will be removing all pre-installed modules from the PHP5 base Box Parts installation and have them all as individual Box Parts instead.

##Out of Memory
At the time of launching Boxes, each Box is restricted to 512MB of RAM. We will be adding more memory options soon, but in the meantime, you can get memory issues if you have Apache and MySQL open and running and then run a Composer task, for example.

The best solution in the meantime is to `parts stop apache2 mysql` and then run Composer before restarting the services with `parts start apache2 mysql`.

##Important Reading Material
We strongly recommend you read up on the following before going too much further

- [Configuring single terminal/console commands from the 'Run' menu](/docs/boxes/run)
- [Restarting and resetting Boxes](/docs/boxes/restart-reset)
- [How to install Box Parts (everything from languages to middleware to databases)](/docs/boxes/box-parts)
- [Requesting new Box Parts](/docs/boxes/request-language)
- [Auto starting Box Parts services](/docs/boxes/startup)

