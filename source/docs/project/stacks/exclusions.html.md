---
title: "Excluding files & folders"
class_name: docs
full_width: true
---

When you create a Stack, it will base the Stack on the contents of the `/home/codio` folder but omit your code workspace.

If you want to exclude other files or folders then you should follow these steps

- Create a file `~/.codio/stack_exclusions` in the Project you will be basing the Stack on.
- add the paths to any file or folder you wish to be excluded from the Stack
- add paths that are relative to `~/`
- currently, globbing and wildcards are not supported
- one path per line
- do not start the line with a `/`

