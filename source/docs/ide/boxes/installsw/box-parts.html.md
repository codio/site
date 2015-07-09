---
title: "Installing software packages"
class_name: docs
full_width: true
---

Codio provides a rich set of so-called Box Parts that are very rapidly installable packages that can be installed either using our Install Software screen (`Tools->Install software` menu item) or via the command line.

See also [Stacks](/docs/dashboard/stacks/listing/) where you can create new Projects and Boxes from pre existing Stack libraries.

As of June 2015 a subscription is required to install software packages. Existing users are not affected.

You can also install software by downloading and compiling from source code.

As covered in the next section, [Coding your own Packages](/docs/ide/boxes/installsw/parts-coding) you can also create your own Box Parts packages.

##Install Software tab
The easiest way to install software packages onto a Codio Box is from the `Tools->Install software` menu item. This allows you to perform the following actions

- search for Packages
- install packages onto your Box
- manually start and stop services
- see which services are running
- specify which services should auto start when your Box starts up
- uninstall packages

![Install Software](/img/docs/install-software.png)

##Autostarting
Services that support auto starting will have a checkbox in the Autostart column. Once you have installed a service, you can check the box. Please refer to the [Autostarting services](/docs/ide/boxes/startup/) section for more details.

##Command Line
You can also install Box Parts packages from the [command line](/docs/ide/boxes/terminal/).

Open up a Terminal window from the `Tools->Terminal` menu item.

Then, enter `parts` on the command line, you will see something like this

```bash
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
```

##Preinstalled packages
The are a several packages preinstalled on all Codio Boxes.

- NodeJS (uses nvm)
- Ruby (uses rbenv)
- Python 2.7.3 (Python 2.7.8 and 3.4 available as additional Box Parts)
- Git, Mercurial and SVN
- C/C++ Compilers
- Java

Additionally, most common Ubuntu utilities are preinstalled.

##The Box Parts Repository
We are continuously updating Box Parts centrally and these are pulled down automatically. If you see a Box Part in the central [Box Parts Repository](https://github.com/codio/boxparts/tree/master/lib/autoparts/packages), but don't see it when you type `parts search` then run the following to download the repo on to your Box.

```bash
parts update
```

Regardless of whether we have added a brand new Box Part or have modified an existing one, you should run `parts update` and then `parts install <partname>` to update your Box Part properly.

##Finding Box Parts
You can get a complete list of available Box Parts with the following command in the Terminal

```bash
parts search
```

If you want to use a few characters to narrow the list down, just enter

```bash
parts search php
```

and all parts whose name or description contains 'php' will be listed.

##Requesting Additional Box Parts
Any Codio users can request that the Codio team add additional Box Parts to the standard repository. Once added, it will become a standard item and available to all users.

Codio subscribers will be given preference.

To request a new Box Part, [create a new issue here](https://github.com/codio/boxparts/issues?page=1&state=open) and we'll get it dealt with as soon as we can.

##Installing Box Parts
You can install one or more Box Parts as follows

```bash
parts install <partname-1> <partname-2> ... <part-name-n>
```

You will then see the installation taking place in the Console.

##Starting, Stopping and Restarting Services
Once you have installed a component, you may need to start it as a service.

```bash
parts start <package-name>
parts restart <package-name>
parts stop <package-name>
```

and to request the service status, use

```bash
parts status <package-name>
parts status (lists the status of services provided by all installed packages)
```

When you close and restart your project (and therefore the Box), you will need to restart your services on restart. This can be done automatically or manually as [described here](/docs/ide/boxes/startup/).

##Parts folder and config files
Box Parts installs things in a special location where you have full access and control

```bash
~/.parts
```

If you take a look inside that folder, you will find everything you are likely to need. Configuration files, for example, live in

```bash
~/.parts/etc
```

So to configure Apache, you would edit the `~/.parts/etc/apache2/httpd.conf` file (using Nano/Vim).
