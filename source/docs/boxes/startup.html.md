---
title: "Auto Starting Services"
class_name: docs
full_width: true
---

When your Box starts up, by default services (such as Apache) will not be started. 

To prevent you having to start services manually you can configure the file `startup.sh` in the root of your project to startup required services whenever your Box boots up. This file will typically contain something like this

	parts start <part-name-1>
	parts start <part-name-2>
	...
	parts start <part-name-n>

