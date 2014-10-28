---
title: "PHPBrew Version Manager"
class_name: docs
full_width: true
---

This tutorial explains how to install PHPBrew on a Codio Box. 

Start by opening up a Terminal window (Tools->Terminal).

##Install PHP
If you have not already done so, install PHP and the required modules

	parts install php5 php5-zlib php5-apache2

##Download PHPBrew

	mkdir /home/codio/bin
	curl -L -O https://raw.github.com/c9s/phpbrew/master/phpbrew
    chmod +x phpbrew
    mv phpbrew /home/codio/bin/phpbrew 
    chmod +x /home/codio/bin/phpbrew

##Intialize Scripts
Let's first add the PATH to `~/.bash_profile` 

	echo 'export PATH="$HOME/bin:$PATH"' >> ~/.bash_profile

and reload `~/.bash_profile`

```
. ~/.bash_profile
```
Ignore the terminal error `-bash: cd: workspace/: No such file or directory` if you see it.

##Initialize PHPBrew
We initialize PHPBrew by entering

	phpbrew init

You should now see a chunk of text starting with

	Phpbrew environment is initialized, required directories are 

			/home/codio/.phpbrew                                        
                                                                                                                                                                                  
##Update your `.bash_profile` file

	echo 'export PHPBREW_SET_PROMPT=1' >> ~/.bash_profile
    echo 'source /home/codio/.phpbrew/bashrc' >> ~/.bash_profile

##Reload shell data
```
. ~/.bash_profile
```

... or simply close the Terminal window and open it again.

## Let's get going
Now we can start playing with PHPBrew. To see all PHPBrew commands enter

	phpbrew

Then start Apache

	parts start apache2

###Create a simple PHP file and preview it
Let's create a very simple PHP file in Codio. Add `index.php` to the root of your project and then paste in the following

	<?php
	  echo phpinfo();
	?>

From the [Preview menu](/docs/ide/inline-preview/) (right most menu option) select "Box URL SSL". You should now see, in a Preview tab inside Codio, the running version of PHP listed along with lots of other bumph.

![phpbrew phpinfo](/img/docs/phpbrew-phpinfo.png)

###Install a different version of PHP
We can list all known versions of PHP by entering

	phpbrew known

You can also try installing versions that are not listed.


To install PHP 5.4.26 with default modules and apache2 support, we enter

	phpbrew install 5.4.26 +default +apxs2

This can take a few minutes, so be patient. Once it's finished, enter

	phpbrew list

and you should see

	Installed versions:
		* (system)  
		php-5.4.26 (/home/codio/.phpbrew/php/php-5.4.26) 

##Installing PHP modules
PHPBrew can also install PHP modules. You can list all available modules like this

	phpbrew variants

This also gives instructions on how to install modules.

###Switch Versions
To switch version, enter

	phpbrew switch 5.4.26

###Remove parts php5
We now need to remove the version of PHP installed by Codio Box Parts, as PHPBrew now manages your PHP installation.

    parts uninstall php5

### Set new PHP for Apache
You now need to edit `~/.parts/etc/apache2/config/php.conf`. The best way to do this is enter

	nano ~/.parts/etc/apache2/config/php.conf

You should modify the `PHPIniDir` line to suit your installed version of PHP Copy the following to the clipboard

	PHPIniDir /home/codio/.phpbrew/php/php-5.4.26/etc/php.ini
	AddHandler php5-script .php     
	DirectoryIndex index.php

- move the cursor to the bottom and use backspace key to delete everything
- paste from the clipboard making sure you end up with the same 3 lines in the exact same format you see above
- press ctrl+x (not cmd for Mac users) to save then 'Y' to confirm then enter 


Now we need to restart Apache

	parts restart apache2

Now do another Preview using Box URL SSL from the menu. You should now see you are running the correct version.

![phpbrew phpinfo2](/img/docs/phpbrew-phpinfo2.png)



