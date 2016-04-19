---
title: "PHP"
class_name: docs
full_width: true
---

PHP is not preinstalled on Codio Boxes but it is extremely easy to install. We currently offer PHP5 but you can also install [PHPBrew](/docs/specifics/php-brew) for PHP version management if you need to. Here's how to install PHP5 on your Codio Box. It takes 10 seconds.

1. [Create a new project](/docs/console/creating).
1. Once you're in the IDE, select the 'Tools->Terminal' menu item to open up a terminal window.
1. Enter `parts install php5 php5-apache2` on the command line (php5-apache includes required modules for PHP and also installs apache2, aprm apr_util and libmcrypt and standard PHP modules)
1. You can also install many more PHP modules and other system components using [Box Parts](/docs/ide/boxes/box-parts).
1. PHP is now installed and ready to use.
1. Enter `parts start apache2` to start Apache.

##Accessing your application
Once your PHP app is up and running, you can access your project from a browser or API call etc.

You can access your PHP project from the Codio preview menu (the right most Codio menu option). Select the menu dropdown then select 'Box URL' which accesses it on Port 3000. Or you can use 'Box URL SSL' which accesses it on Port 9500 over HTTPS.

![preview menu](/img/docs/preview-deploy.png)

You can find out more about [configuring the Preview menu button](/docs/ide/inline-preview).

There is also general information about [accessing Boxes over HTTP/HTTP and Port ranges](/docs/ide/boxes/ext-access).

##Autostarting Apache
When you close a project, your Box is automatically shut down after a couple of minutes (but don't worry, it starts so fast when you open your project again you won't even notice). However, your services (Apache is probably the one you're interested in) won't automatically start unless you run `parts start apache2` each time you load your project.

You can set services to start on Box startup by creating and editing a `startup.sh` file [as described here](/docs/ide/boxes/startup) in the root of your project. Try this

    parts stop apache2
    parts start apache2

##Configuring Apache
We set Apache up to automatically point to your workspace on port 3000 (HTTP) and 9500 (HTTPS), so you should be able to access your `index.php`, for example, without any further configuration.

If you want to change your Apache configuration, then you can edit the `~/.parts/etc/apache2/httpd.conf` file.

##Installing other PHP Modules
Codio installs standard modules (Sqlite, MySQL, Multibyte, OpenSSL) by default with the PHP5 installation. You can add many more PHP modules using [Box Parts](/docs/ide/boxes/box-parts). From the Terminal, just enter `parts search php` to see a list of all PHP related Box Parts.

If you ever upgrade to a new PHP version, then you will need to reinstall all PHP modules Box Parts.

##Managing different PHP versions
We have a [tutorial](/docs/specifics/php-brew) that describes how to install [PHPBrew](https://github.com/c9s/phpbrew) on your Codio Boxes. This lets you install and switch between different versions of PHP.

##Out of Memory
At the time of launching Boxes, each Box is restricted to 512MB of RAM. We will be adding more memory options soon, but in the meantime, you can get memory issues if you have Apache and MySQL open and running and then run a Composer task, for example.

The best solution in the meantime is to `parts stop apache2 mysql` and then run Composer before restarting the services with `parts start apache2 mysql`.

##Important Reading Material
We strongly recommend you read up on the following before going too much further

- [Configuring single terminal/console commands from the 'Run' menu](/docs/ide/boxes/run)
- [Restarting and resetting Boxes](/docs/ide/boxes/restart-reset)
- [How to install Box Parts (everything from languages to middleware to databases)](/docs/ide/boxes/box-parts)
- [Auto starting Box Parts services](/docs/ide/boxes/startup)
