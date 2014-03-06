---
title: "PHPBrew Version Manager"
class_name: docs
full_width: true
---

This tutorial explains how to install PHPBrew on a Codio Box. 

Start by opening up a Terminal window (Tools->Terminal).

##Install PHP
If you have not already done so, install PHP

	parts install php5

##Download PHPBrew

	curl -O https://raw.github.com/c9s/phpbrew/master/phpbrew
	chmod +x phpbrew
	mkdir /home/codio/bin
	cp phpbrew /home/codio/bin/phpbrew
	rm phpbrew

##Intialize Scripts
Let's first add the PATH 

	export PATH="$HOME/bin:$PATH"

We should also add it to `~/.bash_profile` so it is remembered between sessions

	nano ~/.bash_profile

Now do the following if you don't know nano

1. Use the down arrow key and move to the bottom of the file
1. Copy and paste this : `export PATH="$HOME/bin:$PATH"`
1. Hit Control+X (Mac users, use ctrl, not cmd)
1. Press 'Y' to confirm you want to save changes
1. Press Enter to confirm the file name

You should now be back at the command prompt.

##Initialize PHPBrew
We initialize PHPBrew by entering

	phpbrew init

You should now see a chunk of text starting with

	Phpbrew environment is initialized, required directories are 

		/home/codio/.phpbrew                                        
                                                                                                                                                                                  
##Update your `bashrc` file

	nano ~/.bashrc

Now copy and paste each of these lines in this order

	export PHPBREW_SET_PROMPT=1	
	source /home/codio/.phpbrew/bashrc

Finally, 

1. Hit Control+X (Mac users, use ctrl, not cmd)
1. Press 'Y' to confirm you want to save changes
1. Press Enter to confirm the file name

##Restart your Terminal shell and get going
Close the Terminal window and open up another one. Now we can start playing with PHPBrew. To see all PHPBrew commands enter

	phpbrew


###Create a simple PHP file and preview it
Let's create a very simple PHP file in Codio. Add `index.php` to the root of your project and then paste in the following

	<?php
	  echo phpinfo();
	?>

From the [Preview menu](/docs/ide/inline-preview/) (right most menu option) select "Box URL SSL". You should now see, in a Preview tab inside Codio, the running version of PHP listed along with lots of other bumph.

![phpbrew phpinfo](/img/docs/phpbrew-phpinfo.png)

###Install a different version of PHP
Now let's install PHP 5.4.14, for example. 

We can list all known versions of PHP by entering

	phpbrew known

You can also try installing versions that are not listed.

To install PHP 5.4.14, we enter

	phpbrew install 5.4.14

Now you will have a long wait as a new version has to be compiled. It takes a few minutes. Once it's finished, enter

	phpbrew list

and you should see

	Installed versions:
		* (system)  
		php-5.4.14 (/home/codio/.phpbrew/php/php-5.4.14) 

###Switch Versions
To switch version, enter

	phpbrew switch 5.4.14

Now do another Preview using Box URL SSL from the menu. You will see that we are still using 5.5.8 (or whatever the default version was installed by `parts install php5').

To change this fully, we need to [work in progress]







