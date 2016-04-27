---
title: "Installing software packages"
class_name: docs
full_width: true
---

### For G2 (second generation) Boxes

These new Boxes provide full `sudo` (root) access, so you can use the [apt](https://help.ubuntu.com/community/AptGet/Howto) package manager, which provides thousands of software packages that are maintained by the Ubuntu community.

See also [Stacks](/docs/dashboard/stacks/listing/) where you can create new Projects and Boxes from pre existing Stack libraries.

As of June 2015 a subscription is required to install software packages. Existing users are not affected.

#### Install Software tab
We are currently rolling out packages for G2 Boxes to install software packages onto a Codio Box. You can access these from the `Tools->Install software` menu item. This allows you to perform the following actions

- search for packages
- install packages onto your Box

#### Autostarting
Services that require to be started will auto start on installation.

You can manually start, stop and restart services using the following terminal commands:

```
$ sudo service <package-name> start
$ sudo service <package-name> stop
$ sudo service <package-name> restart
```

### For G1 (first generation) Boxes

> **DEPRECATION NOTICE**
>
> This section only concerns G1 (first generation) Boxes.

Codio provides a rich set of so-called Box Parts that are very rapidly installable packages that can be installed either using our Install Software screen (`Tools->Install software` menu item) or via the command line.

See also [Stacks](/docs/dashboard/stacks/listing/) where you can create new Projects and Boxes from pre existing Stack libraries.

As of June 2015 a subscription is required to install software packages. Existing users are not affected.

You can also install software by downloading and compiling from source code.

#### Install Software tab
The easiest way to install software packages onto a Codio Box is from the `Tools->Install software` menu item. This allows you to perform the following actions

- search for packages
- install packages onto your Box
- manually start and stop services
- see which services are running
- specify which services should auto start when your Box starts up
- uninstall packages

![Install Software](/img/docs/install-software.png)

#### Autostarting
Services that support auto starting will have a checkbox in the Autostart column. Once you have installed a service, you can check the box. Please refer to the [Autostarting services](/docs/ide/boxes/startup/) section for more details.

#### Command Line
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

#### Preinstalled packages
The are a several packages preinstalled on all G1  Codio Boxes.

- NodeJS (uses nvm)
- Ruby (uses rbenv)
- Python 2.7.3 (Python 2.7.8 and 3.4 available as additional Box Parts)
- Git, Mercurial and SVN
- C/C++ Compilers
- Java

Additionally, most common Ubuntu utilities are preinstalled.

#### The Box Parts Repository
We are continuously updating Box Parts centrally and these are pulled down automatically. If you see a Box Part in the central [Box Parts Repository](https://github.com/codio/boxparts/tree/master/lib/autoparts/packages), but don't see it when you type `parts search` then run the following to download the repo on to your Box.

```
parts update
```

Regardless of whether we have added a brand new Box Part or have modified an existing one, you should run `parts update` and then `parts install <partname>` to update your Box Part properly.

##Finding Box Parts
You can get a complete list of available Box Parts with the following command in the Terminal

```
parts search
```

If you want to use a few characters to narrow the list down, just enter

```
parts search php
```

and all parts whose name or description contains 'php' will be listed.

##Installing Box Parts
You can install one or more Box Parts as follows

```
parts install <partname-1> <partname-2> ... <part-name-n>
```

You will then see the installation taking place in the Console.

##Starting, Stopping and Restarting Services
Once you have installed a component, you may need to start it as a service.

```
parts start <package-name>
parts restart <package-name>
parts stop <package-name>
```

and to request the service status, use

```
parts status <package-name>
parts status (lists the status of services provided by all installed packages)
```

When you close and restart your project (and therefore the Box), you will need to restart your services on restart. This can be done automatically or manually as [described here](/docs/ide/boxes/startup/).

##Parts folder and config files
Box Parts installs things in a special location where you have full access and control

```
~/.parts
```

If you take a look inside that folder, you will find everything you are likely to need. Configuration files, for example, live in

```
~/.parts/etc
```

So to configure Apache, you would edit the `~/.parts/etc/apache2/httpd.conf` file (using Nano/Vim).
