---
title: "Auto Starting Services"
class_name: docs
full_width: true
---


Your Box will be put to sleep under the conditions [explained here](/docs/ide/boxes/overview/).

When you open your project, the Box will start instantly, by default, any services will start automatically.

## Autostarting using startup.sh
You can also create and configure the `startup.sh` file in the root of your project. This file will typically contain something like this

```bash
sudo service apache2 start
```

If you experience problems with auto starting (which should rarely happen) then you can add a stop line beforehand

```bash
sudo service apache2 stop
sudo service apache2 start
```

This makes sure that all flags are cleared out beforehand.

## Testing your startup.sh file
The best way to test your `startup.sh` file is to select the 'Project->Restart Box' menu item.

## Checking which services are running
To check your services status type the following

```bash
$ ps ax

 PID TTY      STAT   TIME COMMAND
    1 ?        SNs    0:00 /sbin/init
  508 ?        SN     0:00 upstart-udev-bridge --daemon
  588 ?        SNs    0:00 /lib/systemd/systemd-udevd --daemon
  756 ?        SN     0:00 upstart-socket-bridge --daemon
  757 ?        SNsl   0:00 rsyslogd
  758 ?        SN     0:00 upstart-file-bridge --daemon
  935 ?        SNs    0:00 dhclient -1 -v -pf /run/dhclient.eth0.pid -lf /var/lib/dhcp/dhclient.eth0.leases eth0
 1253 ?        SNs    0:00 cron
 1257 ?        SNs    0:00 /usr/sbin/sshd -D
 1640 ?        SNsl   0:00 /usr/sbin/mysqld
 1667 ?        SNs    0:00 /usr/sbin/apache2 -k start
 1676 ?        SN     0:00 /usr/sbin/apache2 -k start
 1677 ?        SN     0:00 /usr/sbin/apache2 -k start
 1678 ?        SN     0:00 /usr/sbin/apache2 -k start
 1679 ?        SN     0:00 /usr/sbin/apache2 -k start
 1680 ?        SN     0:00 /usr/sbin/apache2 -k start
 1706 ?        SNs+   0:00 /sbin/getty -8 38400 console
 1708 pts/0    SNs+   0:00 /sbin/getty -8 38400 tty1
 1864 ?        SNs    0:00 /sbin/getty -8 38400 tty4
 1866 ?        SNs    0:00 /sbin/getty -8 38400 tty2
 1868 ?        SNs    0:00 /sbin/getty -8 38400 tty3
 1870 ?        SNs    0:00 sshd: codio [priv]
 1872 ?        SNs    0:00 sshd: codio [priv]
 1883 ?        RN     0:00 sshd: codio@pts/4
 1884 pts/4    SNs    0:00 -bash
 1899 ?        SN     0:00 sshd: codio@pts/5
 1900 pts/5    SNs+   0:00 -bash
 1927 pts/4    RN+    0:00 ps ax
```

You can also check specific services by typing

```bash
sudo service servicename status
```

You can use `kill <PID>` to stop a process from the command line.
