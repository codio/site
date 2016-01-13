---
title: "Stack Guidelines"
class_name: docs
full_width: true
---

> **IMPORTANT NOTICE**
>
> We are currently rolling out a new generation of Codio Boxes that will provide far greater power and control for you, as well as improved stability. These new Boxes provide full `sudo` (root) access, which means you no longer need to use the Box Parts package management system to install software. Instead, you can use the [apt](https://help.ubuntu.com/community/AptGet/Howto) package manager, which provides thousands of software packages that are maintained by the Ubuntu community.

When creating a Stack, here are some ideas on strategy and how to make them as useful as possible.

## Starting Stack
When you create a Stack, you should first create a new Project from the closest Stack that meets your requirements. You can also use the Base Stack and then [install your own components](/docs/ide/boxes/installsw/box-parts/).


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

## Example (from the 2nd Generation Codio Certified LAMP Stack)

```markdown
# LAMP

## Using this Stack
This Codio Stack gives you a complete **LAMP** stack ready to use and with all services up and running.

## Related Stacks & Starter Packs
There are various other Stacks and Starter Packs that may be of interest. Please search the listing for

- Stack : **LEMP**
- Stack : **LAPP**
- Stack : **LAMP** + Composer
- Starter Pack : **Laravel** (LAMP + Composer + Laravel)

## Components Installed
This Stack contains the following major component versions

- **PHP** 5.5.9
- **Apache** 2.4.7
- **MySQL** 14.14 Distrib 5.5.46

## Configuration Files
You can find configuration files in the following locations

- **PHP config file** : `/etc/php5/apache2/php.ini`
- **Apache config** : `/etc/apache2/apache2.conf`
- **MySQL default config file** :  `/etc/mysql/my.cnf`

## General Information

### Apache Server
Apache should be started by default. You can manually start, stop and restart it using the following terminal commands:
```
$ sudo service apache2 start
$ sudo service  apache2 stop
$ sudo service  apache2 restart
```

### MySQL

#### Start, Stop, Restart the MySQL server
MySQL should be started by default. You can manually start, stop and restart the MySQL server using the following terminal commands:
```
$ sudo service mysql start
$ sudo service mysql stop
$ sudo service mysql restart
```

#### Connecting to the MySQL monitor
Assuming the MySQL server is started, you can connect to it using `mysql` from the terminal. Exit using `ctrl+c`.

#### Root Password
If you want to set the root password, use the following command from the terminal
```
mysqladmin -u root password NEWPASSWORD`
```

## Codio Documentation
Please be aware of the following useful links 

- [How to Access your Box](/docs/boxes/)
- [If your firewall only allows access to port 80](/docs/boxes/access/ext-access/)
- [Creating Codio menu items to avoid repetitive terminal commands](/docs/boxes/runmenu/)
- [Using Git in Codio](/docs/ide/editing/git/)
- [Customizing the IDE settings](/docs/ide/customization/)
- [Restarting your Box](/docs/boxes/restart-reset/)
- [Creating multiple code editing panels in the IDE](/docs/ide/panels/)

## Stack Specific Links

- [PHP](http://php.net)
- [Apache](http://httpd.apache.org)
- [MySQL](http://dev.mysql.com)

## Updating Components
If this Stack is not using any of the latest components, please email support@codio.com and we will update it.
```
