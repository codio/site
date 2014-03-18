---
title: "Laravel"
class_name: docs
full_width: true
---


This tutorial shows you how to create a Laravel project and work with it in Codio. At the bottom, you will find a link that tells you how to deploy it to the FortRabbit PHP deployment platform for production.

##Create a Project

1. From the Codio Dashboard, create a new Empty template project. .
1. Open a Terminal window from the Tools->Terminal window


##Install PHP, Apache and MySQL/MariaDB
We now need to install a few components

1. `parts install php5 mysql composer` automatically installs PHP5, Apache, MySQL and Composer. If you need a different version of PHP, refer to the [PHPBrew tutorial](../php-brew).
1. Later versions of the PHP installer may not install Apache, so you may need to manually run `parts install apache`. Once the installation is complete, type `parts list` and you will see whether Apache2 is automatically installed or not.
1. Let's start up our services with `parts start apache2 mysql`
1. Why not configure an autostart so you don't have to manually start each time you restart your project. Create a new file called `startup.sh` in the root of your project and copy and paste the following lines into it

        parts stop apache2 mysql
        parts start apache2 mysql


##The Laravel Bits
We already installed Composer above, so let's now install Laravel itself using Composer then move the files down to the root and finally tidy up the empty laravel folder. Enter each of the following in the terminal window.

1. composer create-project laravel/laravel --prefer-dist
1. mv laravel/{*,.*} ~/workspace    
1. rm laravel -r

##Try it out

1. To save editing `~/.parts/etc/apache2/https.conf`, rename `server.php` in the root of the project to `index.php` either from the filetree or enter `mv server.php index.php`
1. From the Codio Preview menu (the right most Codio menu) select the drop down menu and select 'Box URL'.

You should now see Laravel up and running in a browser window. Do not set the 'Inside Codio' option as this Laravel scaffold does not allow it to run in an IFrame.
