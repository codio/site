---
title: "Joomla"
class_name: docs
full_width: true
---

Joomla is quickly installed with Codio. Just follows these steps and you should be up and running very quickly.

##Create a Project

1. From the Codio Dashboard, create a new Empty template project. 
1. Open a Terminal window from the Tools->Terminal window

##Download from the Joomla site

1. Check the [Joomla website](http://joomlacode.org/gf/project/joomla/frs) to see what the latest **Full Package** release version is. At the time of writing, it is 3.3.1.
1. Note down the latest version number ready to modify the url specified in the next step.
1. From the terminal, `wget http://joomlacode.org/gf/download/frsrelease/19524/159414/Joomla_3.3.1-Stable-Full_Package.tar.gz ` 
1. Unzip the download file using `tar zxvf Joomla_3.3.1-Stable-Full_Package.tar.gz`
1. Now delete the zip file `rm Joomla_3.3.1-Stable-Full_Package.tar.gz`
1. Let's create a config file `touch configuration.php`
1. We'll temporarily make it globally executable `chmod 777 configuration.php`

##Install PHP, Apache and MySQL
We now need to get all these components installed so that Joomla will run. This is very easy with Codio luckily.

1. `parts install php5 php5-apache2 php5-pdo-mysql php5-zlib mysql ` which automatically installs PHP5, Apache, MySQL and all other required modules.
1. Let's start up our services with `parts start apache2 mysql`
1. Why not configure an autostart so you don't have to manually start each time you restart your project. Create a new file called `startup.sh` in the root of your project and copy and paste the following lines into it

        parts stop apache2 mysql
        parts start apache2 mysql

##Installing other PHP Modules
Codio installs standard modules (Sqlite, MySQL, Multibyte, OpenSSL) by default with the PHP5 installation. You can add many more PHP modules using [Box Parts](/docs/boxes/box-parts). From the Terminal, just enter `parts search php` to see a list of all PHP related Box Parts.

##Quick Check
Now check things are running at a basic level before continuing with the rest of the config. From the Preview menu (the rightmost Codio menu) select the dropdown list and click on 'Box URL'. 

You should see the Joomla installer open up in a new browser tab. Don't go through this, though, until we've set up a MySQL database.

##Setting up a MySQL Database
We now need to get a MySQL database setup and usable by Joomla.

1. Log into the MySQL shell `mysql -u root -p`
1. Press Enter when asked for a password (you can/should set one up, but by default there is none after the install).
1. You should now see the '>' prompt. Enter the following `CREATE DATABASE joomla;`
1. We'll create a user `CREATE USER joomlauser@localhost;`
1. ... and a password `SET PASSWORD FOR joomlauser@localhost= PASSWORD("password");`
1. Now we'll grant that user all privileges `GRANT ALL PRIVILEGES ON joomla.* TO joomlauser@localhost IDENTIFIED BY 'password';`
1. Let's flush privileges `FLUSH PRIVILEGES;`
1. and exit the MySQL shell by entering `exit`

##Run the Joomla Installer for real
Now we can let the Joomla Installer do the rest. 

1. From the Preview menu (right most Codio menu) select 'Box URL' again and continue through the installer's steps.
1. When you get to the database connection part, make sure you enter `joomla` for the database name, `joomlauser` for the username and `password` for the password (unless you decided to use different settings when setting up the MySQL database).

##All done!
That should be it. You should now have Joomla fully up and running.

Finally, just set the permission of the configuration file back 

    chmod 755 configuration.php

