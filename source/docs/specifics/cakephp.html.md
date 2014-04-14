---
title: "CakePHP"
class_name: docs
full_width: true
---


This tutorial shows you how to create a CakePHP 3 project and work with it in Codio. Thanks to [Ceeram](http://ceeram.github.io/) for this tutorial.

[CakePHP](http://cakephp.org) is a rapid development framework for PHP which uses commonly known design patterns like Association Data Mapping, Front Controller and MVC. Our primary goal is to provide a structured framework that enables PHP users at all levels to rapidly develop robust web applications, without any loss to flexibility. 

##Create a Project

1. From the Codio Dashboard, create a new Empty template project.
1. Open a Terminal window from the Tools->Terminal window
1. Remove the initial git folder, we will init a new one later: `rm -rf .git/`


##Install PHP, Apache and MySQL/MariaDB
We now need to install a few components

1. `parts install php5 php5-apache2 mysql composer` automatically installs PHP5, Apache, MySQL and Composer. If you need a different version of PHP, refer to the [PHPBrew tutorial](../php-brew).
1. Let's start up our services with `parts start apache2 mysql`

##Installing other PHP Modules
Codio installs standard modules (Sqlite, MySQL, Multibyte, OpenSSL) by default with the PHP5 installation. You can add many more PHP modules using [Box Parts](/docs/boxes/box-parts). From the Terminal, just enter `parts search php` to see a list of all PHP related Box Parts.

##Bake the Cake
We already installed Composer above, so let's now install CakePHP itself using Composer.

1. Run the following command: `composer create-project -s dev cakephp/app ~/workspace --prefer-dist`. The `dev` stability flag will not be needed anymore for CakePHP 3 stable versions.
1. Add your project to git version control with the following commands: `git init`, `git add .` and `git commit -m "initial commit"`
1. Why not configure an autostart so you don't have to manually start each time you restart your project. Create a new file called `startup.sh` in the root of your project and copy and paste the following lines into it

        parts stop apache2 mysql
        parts start apache2 mysql

##Try it out

1. From the Codio Preview menu (the right most Codio menu) select the drop down menu and check 'New Browser Tab' and select 'Box URL'.

You should now see the familiar CakePHP landing page in a browser window.
