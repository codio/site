---
title: "CodeIgniter"
class_name: docs
full_width: true
---

CodeIgniter is a great Model-View-Controller framework for PHP development so you can write applications much quicker and more efficiently.

There's not much to installing CodeIgniter into a Codio project. Here's a quick run-through to show you how it's done.

##Create a Project

1. From the Codio Dashboard, create a new Empty template project. 
1. Once you are in the IDE, delete any files present.
1. Open a Terminal window from the Tools->Terminal window

##Download from the CodeIgniter site

1. Check the [CodeIgniter website](http://ellislab.com/codeigniter/user-guide/installation/downloads.html) to see what the latest version is. At the time of writing, it is 2.1.4.
1. Note down the latest version number ready to modify (if necessary) the url specified in the next step.
1. From the terminal, `wget http://ellislab.com/asset/ci_download_files/CodeIgniter_2.1.4.zip` being sure to check the version number.
1. Unzip the download file using `unzip CodeIgniter_2.1.4.zip`
1. Now delete the zip file `rm CodeIgniter_2.1.4.zip`


##Install PHP, Apache (and MySQL)

1. `parts install php5 mysql` which automatically installs PHP5+Apache and MySQL.
1. Later versions of the PHP installer may not install Apache, so you may need to manually run `parts install apache`. Once the installation is complete, type `parts list` and you will see whether Apache2 is automatically installed or not.
1. Let's start up our services with `parts start apache2 mysql`
1. Why not configure an autostart so you don't have to manually start each time you restart your project. Create a new file called `startup.sh` in the root of your project and copy and paste the following lines into it

        parts stop apache2 mysql
        parts start apache2 mysql

##Preview
You can now run your project. From the Preview menu (the rightmost Codio menu) select the dropdown list and click on 'Box URL'. 

You should see the basic CodeIgniter page open up in a new browser tab. 

