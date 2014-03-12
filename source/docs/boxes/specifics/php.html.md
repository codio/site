---
title: "PHP"
class_name: docs
full_width: true
---

PHP is not preinstalled on Codio Boxes but it is extremely easy to install. We currently offer PHP5 but you can also install [PHPBrew](/docs/boxes/specifics/php-brew) for PHP version management if you need to. Here's how to install PHP5 on your Codio Box. It takes 10 seconds.

1. [Create a new project](/docs/console/creating).
1. Once you're in the IDE, select the 'Tools->Terminal' menu item to open up a terminal window.
1. Enter `parts install php5' on the command line (this will also install apache2, aprm apr_util and libmcrypt and several PHP modules); [click here](/docs/boxes/box-parts) to read more about installing other system components, known as Box Parts.
1. PHP is now installed and ready to use.
1. Enter `parts start apache2` to start Apache.

##Accessing your application
Once your PHP app is up and running, you can access your project from a browser or API call etc. 

You can access your PHP project from the Codio preview menu (the right most Codio menu option). Select the menu dropdown then select 'Box URL' which accesses it on Port 3000. Or you can use 'Box URL SSL' which accesses it on Port 9500 over HTTPS.

![preview menu](/img/docs/preview-deploy.png)

You can find out more about [configuring the Preview menu button](/docs/ide/inline-preview). 

There is also general information about [accessing Boxes over HTTP/HTTP and Port ranges](/docs/boxes/ext-access).

##Autostarting Apache
When you close a project, your Box is automatically shut down after a couple of minutes (but don't worry, it starts so fast when you open your project again you won't even notice). However, your services (Apache is probably the one you're interested in) won't automatically start unless you run `parts start apache2` each time you load your project.

You can set services to start on Box startup by creating and editing a `startup.sh` file [as described here](/docs/boxes/startup) in the root of your project. Try this

    parts stop apache2
    parts start apache2

##Configuring Apache
We set Apache up to automatically point to your workspace, so you should be able to access your `index.php`, for example, without any further configuration.

If you want to change your Apache configuration, then you can edit the `~/.parts/etc/apache2/httpd.conf` file.

##PHP Modules
Initially, the PHP5 Box Parts installation includes several PHP modules. You can see the pre-installed modules here : [https://github.com/codio/boxparts/blob/master/lib/autoparts/packages/php5.rb#L33-L50](https://github.com/codio/boxparts/blob/master/lib/autoparts/packages/php5.rb#L33-L50).

In addition, we offer many other modules than can be manually installed. These are listed here : [https://github.com/codio/boxparts/tree/master/lib/autoparts/packages](https://github.com/codio/boxparts/tree/master/lib/autoparts/packages). If you type `parts search php` in a terminal window, you will all PHP related parts clearly listed.

If you want to install one of these Modules, enter `parts install <module_name>`.

##Managing different PHP versions
We have a [tutorial](/docs/boxes/specifics/php-brew) that describes how to install [PHPBrew](https://github.com/c9s/phpbrew) on your Codio Boxes. This lets you install and switch between different versions of PHP.

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

