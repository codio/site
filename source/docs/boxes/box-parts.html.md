---
title: "Box Parts"
class_name: docs
full_width: true
---

The main things that are preinstalled with Codio are Node.JS, Ruby and Python. But what about the hundreds of other languages, databases and components that you might want for your development environment?

##Preinstalled
The main components that are preinstalled are

- NodeJS (use nvm; please [refer to this section](/docs/boxes/node-ruby) for information on running NodeJS under nvm)
- Ruby (uses rbenv; please [refer to this section](/docs/boxes/node-ruby) for information on running Ruby under rbenv)
- Python 2.7.3 (Python 3.0 available as Box Part)

##The Box Parts Repository
We are continuously updating Box Parts. Box Parts are all stored in a central repository on GitHub. We update this repository regularly and then add the contents to the 'Base Image' that runs in your box. If you see a Box Part in the central [Box Parts Repository](https://github.com/codio/boxparts/tree/master/lib/autoparts/packages), but don't see it when you type `parts search` then run the following to download the repo on to your Box.

	parts update

Regardless of whether we have added a brand new Box Part or have modified an existing one, you should run `parts update` and then `parts install <partname>` to update your Box Part properly.

##Box Parts
Codio's Box Parts allow you to install any extra components that you may need. The following list shows the majority of the Parts we currently offer as standard. Read on to see how to get the full repo list.

- **Preinstalled Languages** : NodeJS (with nvm), Ruby (with rbenv), Python 2.7.3, Java
- **Language** Box Parts : PHP5 (Composer Box Part available), Lua, Free Pascal
- **Database** Box Parts : MongoDB, MySQL, PostgreSQL, Redis, Memcached
- **Web Server** Box Parts : Nginx, Apache2, Apache Portable Runtime
- **System Utility** Box Parts : Ack, Ant, cmake, libmcrypt, Maven, The Silver Searcher
- **Other** Box Parts : Composer for PHP, Image Magick, MeteorJS, PhantomJS, Tig

##Requesting Additional Box Parts
Any Codio users can request that the Codio team add additional Box Parts to the standard repository. Once added, it will become a standard item and available to all users.

Codio subscribers will be given preference when it comes to adding new Box Parts.

To request a new Box Part to be added to Codio, [click here](/docs/boxes/request-language).

##The 'parts' Command Line tool
Using Box Parts is really easy. To start off with, open up a Terminal window from the 'Tools->Terminal' menu item.

If you enter `parts` on the command line, you will see something like this

	usage: parts COMMAND [ARGS...]

	Some useful commands are:
	  parts install PACKAGE...   # Install one or many packages
	  parts uninstall PACKAGE... # Uninstall one or many packages
	  parts purge PACKAGE...     # Uninstall and remove leftover data
	  parts list                 # List all installed packages
	  parts search [SEARCH_TERM] # Search for a package or list all 
	  parts start PACKAGE...     # Start one or many services 
	  parts stop PACKAGE...      # Stop one or many services 
	  parts restart PACKAGE...   # Restart one or many services 
	  parts status [PACKAGE...]  # Show status of one or many services 
	  parts update               # Update Box Parts

###Listing Available Box Parts
To list the available Box Parts, enter 

    `parts search`

If we add new Box Parts after you created your project, then you should refresh the list with `parts update`.

`parts search` will show you something like this (first few lines only)

	ack (2.12)                   Ack: A tool like grep, optimized for ...
	ant (1.9.2)                  Ant: A pure Java build tool, simpler ...
	apache2 (2.4.7)              Apache Web Server: A cross-platform ...
	apr (1.5.0)                  Apache Portable Runtime: Software ...
	apr_util (1.5.3)             Apache Portable Runtime Utilities: ...
	cmake (2.8.11.2)             CMake: A cross-platform, open-source ...
	composer (1.0.0-alpha8)      Composer: PHP5 Dependency management
	...
	... etc
	...

###Installing Box Parts
You can install one or more Box Parts as follows

	parts install <partname-1> <partname-2> ... <part-name-n>

You will then see the installation taking place in the Console.

##Starting, Stopping and Restarting Services
Once you have installed a component, you may need to start it as a service.

	parts start <package-name>
	parts restart <package-name>
	parts stop <package-name>

and to request the service status, use

	parts status <package-name>
	parts status (lists the status of services provided by all installed packages)

When you close and restart your project (and therefore the Box), you will need to restart your services on restart. This can be done automatically or manually as [described here](/docs/boxes/startup).

##Parts folder and config files
Box Parts installs things in a special location where you have full access and control

	~/.parts

If you take a look inside that folder, you will find everything you are likely to need. Configuration files, for example, live in

	~/.parts/etc

So to configure Apache, you would edit the `~/.parts/etc/apache2/httpd.conf` file (using Nano/Vim).


