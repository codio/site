---
title: "Wordpress"
class_name: docs
full_width: true
---


Wordpress is quickly installed with Codio. Just follows these steps and you should be up and running with Wordpress very quickly.

##Create a Project

1. From the Codio Dashboard, create a new Empty template project. .
1. Open a Terminal window from the Tools->Terminal window

##Download from the Wordpress site

1. From the terminal, `wget http://wordpress.org/latest.tar.gz` 
1. Unzip the download file using `tar -xzvf latest.tar.gz`


##Install PHP, Apache and MySQL
We now need to get all these components installed so that Wordpress will run. This is very easy with Codio luckily.

1. `parts install php5 php5-apache2 php5-pdo-mysql php5-zlib mysql ` which automatically installs PHP5, Apache, MySQL and all other required modules.
1. Let's start up our services with `parts start apache2 mysql`
1. Why not configure an autostart so you don't have to manually start each time you restart your project. Create a new file called `startup.sh` in the root of your project and copy and paste the following lines into it

        parts stop apache2 mysql
        parts start apache2 mysql

##Installing other PHP Modules
Codio installs standard modules (Sqlite, MySQL, Multibyte, OpenSSL) by default with the PHP5 installation. You can add many more PHP modules using [Box Parts](/docs/boxes/box-parts). From the Terminal, just enter `parts search php` to see a list of all PHP related Box Parts.

##Setting up a MySQL Database
We now need to get a MySQL database setup and usable by Wordpress.

1. Log into the MySQL shell `mysql -u root -p`
1. Press Enter when asked for a password (you can/should set one up, but by default there is none after the install).
1. You should now see the '>' prompt. Enter the following `CREATE DATABASE wordpress;`
1. We'll create a user `CREATE USER wordpressuser@localhost;`
1. ... and a password `SET PASSWORD FOR wordpressuser@localhost= PASSWORD("password");`
1. Now we'll grant that user all privileges `GRANT ALL PRIVILEGES ON wordpress.* TO wordpressuser@localhost IDENTIFIED BY 'password';`
1. Let's flush privileges `FLUSH PRIVILEGES;`
1. and exit the MySQL shell by entering `exit`

##Modify a couple of small things for Codio

We now need to make a small modification to get things to run smoothly on your Codio Box. 

1. Open the \wordpress folder, right click on `wp-config-sample.php` and rename to `wp-config.php`

Open the file to edit the contents

1. At line 19, change `define('DB_NAME', 'database_name_here');` to `define('DB_NAME', 'wordpress');`

1. At line 22, change `define('DB_USER', 'username_here');` to `define('DB_USER', 'wordpressuser');`

1. At line 25, change `define('DB_PASSWORD', 'password_here');` to `define('DB_PASSWORD', 'password');`


*Note: If you used different details when setting up MySQL, enter these instead*

We now need to add in couple of lines to tell WordPress the site's urls

1. Above line 17, enter 
    `define('WP_HOME','http://word1-word2.codio.io:3000/wordpress');`
    `define('WP_SITEURL','http://word1-word2.codio.io:3000/wordpress');`

1. Find your Box URL by clicking on right hand drop down, `Project Index (static)` to identify your URL and replace `word1-word2` in the 2 lines just entered


##Run the Wordpress Installer for real
Now we can let the Wordpress Installer do the rest. 

1. From the Preview menu (right most Codio menu) select 'Box URL' again.
1. Append `/wordpress/wp-login.php` to the URL and continue through the installer's steps.


To work happily on port 3000, we need to install a Wordpress Plugin

1. Goto Plugins
1. search for `permalink-fix-disable-canonical-redirects-pack` and install
1. Activate the Plugin


##All done!
From the menu bar select 'Codio Site' (unless you used a different Site Title in the WordPress installer) and you now have Wordpress fully up and running.

