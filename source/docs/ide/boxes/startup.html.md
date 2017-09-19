---
title: "Auto Starting Services"
class_name: docs
full_width: true
---

Your Box will be put to sleep under the conditions [explained here](/docs/ide/boxes/overview/). When you open your project, the Box will start and services will start automatically.

### Upstart
Codio current uses upstart. If you want to configure services to start when your box starts up, you should configure a `.conf` file. If you are not familiar with upstart, please Google it for configuration details.

**Important** - you need to specify the user account under which the service is run using `setuid codio`.

Below is an example `.conf` file that should be located in the `/etc/init` folder. 

```
# testservice - test service job file
description "Some description"
author "freddy <you@yours.com>"

# Stanzas
#
# Stanzas control when and how a process is started and stopped See a list of stanzas here:
# http://upstart.ubuntu.com/wiki/Stanzas When to start the service
start on runlevel [2345]
stop on runlevel [016]

# Automatically restart process if crashed
respawn

# Specify the user account which the service should run under testservice - test service job file
setuid codio

# Specify working directory if needed
chdir /home/codio/workspace

# Specify the process/command to start, e.g.
exec your-service-name
```