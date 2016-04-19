---
title: "Laravel"
class_name: docs
full_width: true
---

[Laravel](http://laravel.com/) is a clean and classy framework for PHP web development. Freeing you from spaghetti code, Laravel helps you create wonderful applications using simple, expressive syntax. Development should be a creative experience that you enjoy, not something that is painful. Enjoy the fresh air.

This tutorial shows you how to create a Laravel project and work with it in Codio.

##Create a Project

1. From the Codio Dashboard, create a new Empty template project. .
1. Open a Terminal window from the Tools->Terminal window


##Install PHP, Apache and MySQL/MariaDB
We now need to install a few components

1. `parts install php5 php5-apache2 mysql composer` automatically installs PHP5, Apache, MySQL and Composer. If you need a different version of PHP, refer to the [PHPBrew tutorial](../php-brew).
1. Let's start up our services with `parts start apache2 mysql`
1. Why not configure an autostart so you don't have to manually start each time you restart your project. Create a new file called `startup.sh` in the root of your project and copy and paste the following lines into it

        parts stop apache2 mysql
        parts start apache2 mysql

##Installing other PHP Modules
Codio installs standard modules (Sqlite, MySQL, Multibyte, OpenSSL) by default with the PHP5 installation. You can add many more PHP modules using [Box Parts](/docs/ide/boxes/box-parts). From the Terminal, just enter `parts search php` to see a list of all PHP related Box Parts.

##The Laravel Bits
We already installed Composer above, so let's now install Laravel itself using Composer then move the files down to the root and finally tidy up the empty laravel folder. Enter each of the following in the terminal window.

1. `composer create-project laravel/laravel --prefer-dist`
1. `mv laravel/{*,.*} ~/workspace`
1. `rm laravel -r`

##Try it out

1. To save yourself the hassle of editing `~/.parts/etc/apache2/httpd.conf`, rename `server.php` in the root of the project to `index.php` either from the filetree or enter `mv server.php index.php`
1. From the Codio Preview menu (the right most Codio menu) select the drop down menu and check 'New Browser Tab' and select 'Box URL'.

You should now see Laravel up and running in a browser window. Do not set the 'Inside Codio' option as this Laravel scaffold does not allow it to run in an IFrame.
