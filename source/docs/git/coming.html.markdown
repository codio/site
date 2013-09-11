---
title: Commands coming soon
class_name: docs
full_width: true
---

The following list contains the git commands coming soon and which parameters will be supported. They are listed in the order in which they will be released.

  - [**fetch**](http://git-scm.com/docs/git-fetch)
	--all
	-n, --no-tags
	-t, --tags
	-p, --prune
	-v, --verbose

  - [**diff**](http://git-scm.com/docs/git-diff)
	[<path>...]
	<commit> [--] [<path>...]
	<commit> <commit> [--] [<path>...]
	<commit>..<commit> [--] [<path>...]
	<commit>...<commit> [--] [<path>...]

  - [**tag**](http://git-scm.com/docs/git-tag)
	-a, --annotate
	-f, --force
	-d, --delete
	-n<num>
	-l <pattern>, --list <pattern>

  - **help** (will show Codio supported commands and parameters)

and this list are commands that are **already supported** but where some parameter support is not yet available

  - [**checkout**](http://git-scm.com/docs/git-checkout)
	-b <branch> <remote>/<remotebranch> checkout tracking branch.
<path>... resets the given path.  

  - [**log**]((http://git-scm.com/docs/git-log))
	--follow
	-<number>, -n <number>, --max-count=<number> (default: 20)
	--since=<date>, --after=<date>
	--until=<date>, --before=<date>
	--author=<pattern>, --committer=<pattern>
	--grep-reflog=<pattern>
	--grep=<pattern>
	--all-match
	-i, --regexp-ignore-case
	--merges
	--no-merges
	--pretty[=<format>], --format=<format>


  - [**push**](http://git-scm.com/docs/git-push)
	-u <remote> <branch> setup tracking remote branch
	-f, --force

  - [**commit**](http://git-scm.com/docs/git-commit)
  	--amend

  - [**branch**](http://git-scm.com/docs/git-branch)
	-v, --verbose
	-m, --move
	--set-upstream 
	--unset-upstream
	--track
	--no-track
	-u <upstream>, --set-upstream-to=<upstream>

