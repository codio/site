---
title: "Auto Starting Services"
class_name: docs
full_width: true
---

When your Box starts up, by default services will not be started. 

##Start services automatically with Startup.sh
To prevent you having to start services manually you can configure the file `/home/codio/startup.sh` to startup required services whenever your Box boots up. This file will typically contain something like this

	parts start <part-name-1>
	parts start <part-name-2>
	....
	parts start <part-name-n>

##Start services with Run menu
Starting services using `startup.sh` can slow the time it takes to start your project and so an alternative approach is to configure a similar script (how about `manual-start`) and then configure a [Run menu](/docs/boxes/run) to start your services with a menu button press. This means the IDE will load a bit faster (depending on the number of startup commands you are using).