---
title: "Auto Starting Services"
class_name: docs
full_width: true
---

> **DEPRECATION NOTICE**
>
> This section only concerns G1 (first generation) Boxes. For G2 Boxes, Box Parts is not available, and you should use the [apt](https://help.ubuntu.com/community/AptGet/Howto) package manager.
>
> We are currently rolling out a new generation of Codio Boxes that will provide far greater power and control for you, as well as improved stability. These new Boxes provide full `sudo` (root) access, which means you no longer need to use the Box Parts package management system to install software. Instead, you can use the [apt](https://help.ubuntu.com/community/AptGet/Howto) package manager, which provides thousands of software packages that are maintained by the Ubuntu community.
>
> Second generation projects and stacks are identified with a `G2` label, and we will be gradually updating all our Certified Stacks, Packs and Units to use the G2 platform.

Your Box will be put to sleep under the conditions [explained here](/docs/ide/boxes/overview/).

When you open your project, the Box will start instantly but, by default, any services will not start automatically.

##Autostarting using the Install Software tab
You can access the Installed software tab as [described here](/docs/ide/boxes/installsw/). Services that support auto starting will have a checkbox in the Autostart column. Once you have installed a service, you can check the box.

##Autostarting using startup.sh
You can also create and configure the `startup.sh` file in the root of your project. This file will typically contain something like this

```bash
parts start apache2 myotherservice
```

The Box Parts command line utility is explained in [this section](/docs/ide/boxes/installsw/box-parts/).

If you experience problems with auto starting (which should rarely happen) then you can add a parts stop line beforehand

```bash
parts stop apache2 myotherservice
parts start apache2 myotherservice
```

This makes sure that all parts flags are cleared out beforehand.

##Testing your startup.sh file
The best way to test your `startup.sh` file is to select the 'Project->Restart Box' menu item.

##Checking which services are running
To check your services status type the following

```bash
$ ps ax

  PID TTY      STAT   TIME COMMAND
    1 ?        Ss     0:00 /sbin/init
   12 ?        S      0:00 /sbin/plymouthd --mode=boot --attach-to-session
   15 ?        Ss     0:00 /usr/sbin/sshd -D
   19 ?        S      0:00 mountall --daemon
  420 ?        Ss     0:00 /home/codio/.parts/packages/apache2/2.4.7/bin/httpd -k start
  421 ?        Sl     0:00 /home/codio/.parts/packages/apache2/2.4.7/bin/httpd -k start
  449 ?        Sl     0:00 /home/codio/.parts/packages/apache2/2.4.7/bin/httpd -k start
  477 ?        Sl     0:00 /home/codio/.parts/packages/apache2/2.4.7/bin/httpd -k start
  505 ?        Ss     0:00 sshd: codio [priv]
  517 ?        S      0:00 sshd: codio@pts/0
  518 pts/0    Ss     0:00 -bash
  637 pts/0    R+     0:00 ps ax
```

This is more reliable than `parts status`, which can sometimes incorrectly report the status.

You can use `kill <PID>` to stop a process from the command line.
