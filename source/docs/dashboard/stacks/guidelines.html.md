---
title: "Stack Guidelines"
class_name: docs
full_width: true
---

When creating a Stack, here are some ideas on strategy and how to make them as useful as possible.

## Starting Stack
When you create a Stack, you should first create a new Project from the closest Stack that meets your requirements. You can also use the Base Stack and then [install your own components](/docs/boxes/installsw/box-parts/).


## Long Description
You should include a full description of your Stack that appears when someone clicks on it within the Stacks listing. This information will also be available to users in Projects by going to `Project>Stack Info` in their Project, which should open automatically. Check out some of Codio Certified Pack long descriptions. 

Below is a template you could use. 

```markdown
# Title
Put the name of your Stack here.

## Using the Stack
Describe how the user should get started.

## Starter Pack
If there are related Starter Packs you have created from this Stack that include code files, detail them here.

## Components Installed
It can be helpful to others or even to you later on to describe the installed Components and versions. 

## Configuration Files
Detail where any component configuration files can be found. As you install components from `Tools>Install Software` a log file of all this information will be opened.

## General Information
Include any general information on the use and operation of any installed components.

## Codio Documentation
We recommend you include useful links to the Codio Documentation.

##Stack Specific Links
Provide useful links on the Stack components.
```

## Example (from the Codio Certified LAMP Stack)
```
# LAMP

## Using this Stack
This Codio Stack gives you a complete **LAMP** stack ready to use and with all services up and running. To use this Stack, press the `USE STACK` button at the top right of the page.

Once you have created a Project based on the Stack and you are in the IDE, you can find the information contained in this file by going to `Project>Stack Info` in your Project.

## Related Stacks & Starter Packs
There are various other Stacks and Starter Packs that may be of interest. Please search the listing for

- Stack : **LEMP**
- Stack : **LAPP**
- Stack : **LAMP** + Composer
- Starter Pack : **Laravel** (LAMP + Composer + Laravel)

## Components Installed
This Stack contains the following major component versions

- **PHP** 5.5.15
- **Apache** 2.4.9
- **MySQL** 5.6.15
- **Git**

## Configuration Files
You can find configuration files in the following locations

- **PHP config file** : `/home/codio/.parts/etc/php5/php.ini`
- **Apache config** : `/home/codio/.parts/etc/apache2/httpd.conf`
- **MySQL default config file** :  `/home/codio/.parts/packages/mysql/5.6.15/my-new.cnf`
- **Default document root** : `/home/codio/workspace`

## General Information
### PHP
PHP is fully installed along with Pear, php5-pdo-mysql, php5-zlib and php5-gd. 

There are many other useful PHP related components you can install including

- PHP modules (curl, Image Magick, oAuth, zip and many more)
- Composer

The easiest way to install additional components is to select the `Tools->Install Software` option and then search for 'PHP'. You will see a full list of installable modules.

For more information on installing software, please refer to the [documentation](/docs/boxes/installsw/box-parts/).

### Apache Server
The Apache server should already be started. You can restart it at any time in the following ways

- from a terminal window enter 
$ parts restart apache2 
$ parts stop apache2 
$ parts start apache2
- Go to `Tools>Install Software>Installed Software` and locate Apache2, from where you can stop, start or restart the service.

### MySQL

#### Start, Stop, Restart the MySQL server
MySQL should be started by default. You can manually start, stop and restart the MySQL server with the from the `Tools->Install Software` menu or using the following terminal commands
$ parts start mysql
$ parts stop mysql
$ parts restart mysql


#### Connecting to the MySQL monitor
Assuming the MySQL server is started, you can connect to it using `mysql` from the terminal. Exit using `ctrl+c`.

#### Root Password
If you want to set the root password, use the following command from the terminal

mysqladmin -u root password NEWPASSWORD


## Codio Documentation
Please be aware of the following useful links 

- [How to Access your Box](/docs/boxes/)
- [If your firewall only allows access to port 80](/docs/boxes/access/ext-access/)
- [Installing additional software components onto your Codio Box](/docs/boxes/installsw/box-parts/)
- [Creating Codio menu items to avoid repetitive terminal commands](/docs/boxes/runmenu/)
- [Using Git in Codio](/docs/ide/editing/git/)
- [Customizing the IDE settings](/docs/ide/customization/)
- [Restarting your Box](/docs/boxes/restart-reset/)
- [SSH into your Box](/docs/boxes/access/ssh-access/)
- [Creating multiple code editing panels in the IDE](/docs/ide/panels/)

## Stack Specific Links

- [PHP](http://php.net)
- [Apache](http://httpd.apache.org)
- [MySQL](http://dev.mysql.com)

## Updating Components
If this Stack is not using any of the latest components, please email support@codio.com and we will update it.
````



