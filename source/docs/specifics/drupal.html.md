---
title: "Drupal"
class_name: docs
full_width: true
---

Drupal is quickly installed with Codio. Just follows these steps and you should be up and running with Drupal very quickly.

##Create a Project

1. From the Codio Dashboard, create a new Empty template project. 
1. Once you are in the IDE, delete any files present.
1. Open a Terminal window from the Tools->Terminal window

##Download from the Drupal site
You can get the latest version of Drupal from the [Drupal website](https://drupal.org/project/drupal). 

1. Check the [Drupal website](https://drupal.org/project/drupal) to see what the latest release version is. At the time of writing, it is 7.26.
1. Note down the latest version number ready to modify the url specified in the next step.
1. From the terminal, `wget http://ftp.drupal.org/files/projects/drupal-7.26.tar.gz` 
1. Unzip the download file using `tar zxvf drupal-7.26.tar.gz`
1. Copy all the files down to the root level (including hidden files) `mv drupal-7.26/{*,.*} ~/workspace` (you can ignore the `mv: cannot move `drupal-7.26/.' to `/home/codio/workspace/.': Device or resource busy` warnings).
1. Let's clean up the now empty folder with `rm -r drupal-7.26`
1. Let's get the default settings file ready `cp sites/default/default.settings.php sites/default/settings.php`
1. And finally, let's allow the installer to write to the configuration file with `chmod a+w sites/default/settings.php`
1. ... and the folder `chmod a+w sites/default`

##Install PHP, Apache and MySQL
We now need to get all these components installed so that Drupal will run. This is very easy with Codio luckily.

1. `parts install php5 php5-apache2 mysql` which automatically installs PHP5,Apache and MySQL.
1. Let's start up our services with `parts start apache2 mysql`
1. Why not configure an autostart so you don't have to manually start each time you restart your project. Create a new file called `startup.sh` in the root of your project and copy and paste the following lines into it

        parts stop apache2 mysql
        parts start apache2 mysql

##Quick Check
Now check things are running at a basic level before continuing with the rest of the config. From the Preview menu (the rightmost Codio menu) select the dropdown list and click on 'Box URL'. 

You should see the Drupal installer open up in a new browser tab. Don't go through this, though, until we've set up a MySQL database.

##Setting up a MySQL Database
We now need to get a MySQL database setup and usable by Drupal.

1. Log into the MySQL shell `mysql -u root -p`
1. Press Enter when asked for a password (you can/should set one up, but by default there is none after the install).
1. You should now see the '>' prompt. Enter the following `CREATE DATABASE drupal;`
1. We'll create a user `CREATE USER drupaluser@localhost;`
1. ... and a password `SET PASSWORD FOR drupaluser@localhost= PASSWORD("password");`
1. Now we'll grant that user all privileges `GRANT ALL PRIVILEGES ON drupal.* TO drupaluser@localhost IDENTIFIED BY 'password';`
1. Let's flush privileges `FLUSH PRIVILEGES;`
1. and exit the MySQL shell by entering `exit`

##Run the Drupal Installer for real
Now we can let the Drupal Installer do the rest. 

1. From the Preview menu (right most Codio menu) select 'Box URL' again and continue through the installer's steps.
1. When you get to the database connection part, make sure you enter `drupal` for the database name, `drupaluser` for the username and `password` for the password (unless you decided to use different settings when setting up the MySQL database).

##All done!
That should be it. You should now have Drupal fully up and running.

