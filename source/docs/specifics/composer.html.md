---
title: "Composer"
class_name: docs
full_width: true
---

If you are a PHP user, you may well want to use the [Composer package manager for PHP](getcomposer.org). This tutorial explains how to install Composer on a Codio Box and shows a couple of examples of scaffolding out new Symfony and Laravel projects.

You should also read the [PHP Introduction](/specifics/php).

##Create a Project
If you are already in a project, then you can ignore these steps.

1. From the Codio Dashboard, create a new Empty template project. 
1. Open a Terminal window from the Tools->Terminal window


##Installing Composer
We use [Box Parts](/docs/boxes/box-parts) to install Composer. The basic installation of Composer is done from the Terminal with 

    parts install composer
    
However, if you are starting from scratch, you may want to install several typical components like this 

    parts install php5 php5-apache2 composer mysql


##Using Composer to create a new Project
Some packages will scaffold out an entire project for you. Here are two examples.

###Symfony
This example shows how to use Composer to install the Symfony framework. You can find a [full Symfony Tutorial](/docs/specifics/symfony) in our docs.

1. `composer create-project symfony/framework-standard-edition` to tell Composer to install Symfony. When asked to provide missing parameters, just press enter through all the questions.
1. `mv framework-standard-edition/{*,.*} ~/workspace  ` moves the contents of the `framework-standard-edition` folder down to the root folder (ignore warnings).
1. `rm framework-standard-edition -r` to remove the now empty `framework-standard-edition` folder.


###Laravel
This example shows how to use Composer to install the Laravel framework. You can find a [full Laravel Tutorial](/docs/specifics/symfony) in our docs.

1. `composer create-project laravel/laravel --prefer-dist` to install Laravel
1. `mv laravel/{*,.*} ~/workspace` to move the installed contents down to the workspace folder
1. `rm laravel -r` to remove the now empty `laravel` folder.





