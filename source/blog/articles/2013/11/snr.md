---
title: Search and Replace with SnR
author: Friedel Ziegelmayer
date: 2013-11-11
tags: Product News
class_name: blog
full_width: true
---

As you might have noticed, today marked the release of [global search and replace](/blog/2013/11/search-replace) in Codio. It's built using the tried and tested tools, [ack] and perl. While we were building this we realized that it would be great to have a simple command line tool to do both search and replace based on these two tools. So today I present the software that came out of that wish: [SnR]. We've open sourced it and released it as a [Node package](https://npmjs.org/package/snr). The source is publicly available on [Github](https://github.com/codio/snr).

## What?
As already discussed SnR gives you a simple command line interface to search and replace built on top of [ack] and perl, and it works like this:

```bash
# Inside your project folder
$ snr --replace "console.log" "console.info" "**/*.js"
```

## How?
To get started just make sure you have perl and Node (with NPM) installed, and then run `npm install -g snr`. That's it, now you can go and replace all the things.

For simple usage take a look at these examples:

```bash
# Find all occurences of foo inside all python files
$ snr foo "**/*.py"
src/index.js
301-        // catch (e) {
302-        //     //:todo change to correct bar
303:        //     foo(e);
304-        //     //bar(e);
305-        // }
Found 1 match(es) in 1 file(s).
# Replace all occurences of foo with bar inside all python files
$ snr --replace bar foo "**/*.py"
Replaced 1 match(es) in 1 file(s).
```
and for more advance usage:

```bash
$ snr --help
usage: snr [OPTION]... PATTERN [FILES OR DIRECTORIES OR GLOBS]
options:
    -i, --ignore-case       Ignore case distinctions in PATTERN.
    -Q, --literal           Quote all metacharacters; PATTERN is literal.
    --max-result-count=NUM  Stop after NUM results.
    --replace=REPlACE       Replace all matches with REPLACE.
    -h, --help              Print this help and exit.
    -v, --version           Print the current version.
    -C NUM, --context=NUM   Print NUM lines of output context.
    -w, --word-regexp       Force PATTERN to match only whole words.
    --color-lineno=COLOR    Set the color for filenames, matches, and line
                            numbers.
```


## What's next?
There is even more goodness inside. You can use SnR as a module inside your node app as well, just install it and `require('snr')` to get started. More info on that can be found on the [github repo].



[ack]: http://beyondgrep.com/
[SnR]: https://npmjs.org/package/snr
[github repo]: https://github.com/codio/snr
