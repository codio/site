---
title: Beautify Javascript
class_name: docs
full_width: true
---

You can format your Javascript code by pressing **ctrl+b** / **cmd+b**. It will indent your code correctly and manage spaces and other cool things.

For example, if you start our with this

	if ('this_is'==/an_example/){of_beautifer();}else{var a=b?(c%d):e[f];}

Then after beautifying, you will end up with this

	if ('this_is' == /an_example/) {
	    of_beautifer();
	} else {
	    var a = b ? (c % d) : e[f];

##Settings
In the current implementation, we make all the decisions for you. However, we'll soon be making the full complement of settings available to you.

