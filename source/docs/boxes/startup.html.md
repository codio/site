---
title: "Auto Starting Services"
class_name: docs
full_width: true
---

When your Box starts up, by default services will not be started. 

To prevent you having to start services manually you can configure the file `/home/codio/startup.sh` to startup required services whenever your Box boots up. This file will typically contain something like this

	parts start <part-name-1>
	parts start <part-name-2>
	....
	parts start <part-name-n>

This is the recommended procedure for starting services. It will not slow the loading of your project in the IDE as it is a background task.
