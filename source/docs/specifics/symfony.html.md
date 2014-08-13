---
title: "Symfony"
class_name: docs
full_width: true
---

[Symfony](http://symfony.com/) is an open source PHP web development framework - a set of tools and methodology to help you build great applications. Some of the traits of this framework are its speed, flexibility, scalability, and stability. You can use it for a full blown web application but also for smaller functionalities needed for your project. 

##Create a Project

1. From the Codio Dashboard, create a new Empty template project. 
1. Open a Terminal window from the Tools->Terminal window


##Download from the Symfony site

1. Check the [Symfony website](http://symfony.com/download) to see what the latest version is. At the time of writing, it is 2.5.3.
1. Note down the latest version number ready to modify (if necessary) the url specified in the next step.
1. From the terminal, `wget http://symfony.com/download?v=Symfony_Standard_Vendors_2.5.3.tgz` being sure to check the version number.
1. Don't worry about the odd looking filename.
1. Unzip the download file using `tar -zxvf download?v=Symfony_Standard_Vendors_2.5.3.tgz`
1. Delete the zip file `rm download?v=Symfony_Standard_Vendors_2.5.3.tgz`
1. `mv Symfony/{*,.*} ~/workspace` moves the contents of the Symfony folder down to the root folder (ignore warnings).
1. Delete the now empty Symfony folder `rm -rf Symfony`


##Install PHP, Composer, Apache and MySQL

We now need to get all these components installed so that Symfony will run. This is very easy with Codio luckily.

1. Enter `parts install php5 php5-apache2 mysql composer` to install PHP5, Apache and MySQL. 
1. Let's start up our services with `parts start apache2 mysql`
1. Why not configure an autostart so you don't have to manually start each time you restart your project. Create a new file called `startup.sh` in the root of your project and copy and paste the following lines into it

        parts stop apache2 mysql
        parts start apache2 mysql

##Installing other PHP Modules
Codio installs standard modules (Sqlite, MySQL, Multibyte, OpenSSL) by default with the PHP5 installation. You can add many more PHP modules using [Box Parts](/docs/boxes/box-parts). From the Terminal, just enter `parts search php` to see a list of all PHP related Box Parts.

##Settings and Tweaks
We need to make a few tweaks to the system for Symfony. Firstly, we need to modify the `php.ini` file to specify the time zone. You can edit the php.ini file using nano but we'll do the quick and dirty way and just append it to the end of the file. You'll then need to restart Apache as well:

    echo date.timezone = UTC >> ~/.parts/etc/php5/php.ini
    parts restart apache2
    
Now we need to remove the IP address checking in the `web/config.php` file. Just delete the following code block from the top of the file

    if (!in_array(@$_SERVER['REMOTE_ADDR'], array(
        '127.0.0.1',
        '::1',
    ))) {
        header('HTTP/1.0 403 Forbidden');
        exit('This script is only accessible from localhost.');
    }

and remove this code in `web/app_dev.php`

    // This check prevents access to debug front controllers that are deployed by accident to production servers.
    // Feel free to remove this, extend it, or make something more sophisticated.
    if (isset($_SERVER['HTTP_CLIENT_IP'])
        || isset($_SERVER['HTTP_X_FORWARDED_FOR'])
        || !in_array(@$_SERVER['REMOTE_ADDR'], array('127.0.0.1', 'fe80::1', '::1'))
    ) {
        header('HTTP/1.0 403 Forbidden');
        exit('You are not allowed to access this file. Check '.basename(__FILE__).' for more information.');
    }

##Preview Setup
You can now run the Symfony config application. From the Preview menu (the rightmost Codio menu, which initially says 'Project index (static)') select the dropdown list and click on 'Configure'. Then paste the following code into the file, replacing the existing contents. 

    {
    // Configure your Run and Preview buttons here.

    // Run button configuration
      "commands": {
            "PHP Version": "php --version"
      },

    // Preview button configuration
      "preview": {
            "Symfony Config": "http://{{domain}}:3000/web/config.php",
            "Symfony Config SSL": "https://{{domain}}:9500/web/config.php"
      }
    }

The `commands` entries are shortcuts to Terminal commands and the `preview` entries are shortcuts to browser previews. You can [read more about this](/docs/boxes/run/) in our docs.

##Preview
Now you can preview the Symfony setup by going to the Preview menu and selecting 'Symfony Config' from the drop down menu.

If you get a 503 error then you probably have not started Apache, so enter the following

    parts start apache2 mysql

If you see a Major Warning (which won't let you proceed) then you have probably not 

##Configuring Symfony
Assuming you can now see the Symfony configuration screen, click on the link near the bottom 'Configure Symfony online'.

You'll get to the page where you configure MySQL. We already installed MySQL earlier, so all we need to do is leave all the default exactly as they are and press 'next' twice and you'll see that your Symfony application is fully configured.



