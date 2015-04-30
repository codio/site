---
title: Improving Performance - Tab Switching
author: Friedel Ziegelmayer
date: 2013-09-27
tags: Product News
class_name: blog
full_width: true
---

As you might know we have switched our editor from [Ace] to [CodeMirror]. The optimisations that we already had in place are now obsolete. So I've started looking at optimising the way we use [CodeMirror].

## Where to optimise?

I started my adventure by importing the complete [Node.js] repository into Codio and simply opening, reading and editing different files. I immediately noticed that when I opened multiple large files and switched between those, it would take a fair bit of time. So there I had found my first place to optimise... tab switching.

## Measure it

I opened up the dev tools and started profiling.

![](/img/blog/flames-javascript-cpu-profile-running.png)

And when I looked at the time it took for switching tabs, I saw that it took a total time of about two seconds to simply switch between two tabs.

![](/img/blog/flames-graph-before.png)

The image above shows the flame chart I recorded for switching. The two seconds can be seen if you look at the vertical axis, while the horizontal axis shows the call stack at a given moment. For more information on flame charts see this [article] on [html5rocks].

## Find the biggest time thief

Looking at these call stacks I found that the most time-consuming method was `CodeMirror.refresh()`, which repaints the whole display area of the instance to update all information. But what was more concerning was that a single call was taking so long. I realised that this method was called not only once, but three times.


## Optimizations: 1st Round

With my new knowledge I went into the code tracing the stack calls and then eliminating two of the three calls to `CodeMirror.refresh` when switching from one tab to another. My work did not go unrewarded, I ended up with this new graph resulting in an overall switch time of about 450ms...

![](/img/blog/flames-graph-middle.png)

## Optimizations: 2nd Round

My newly gained speed made me happy, but after looking again into the graph I could still see two call stack spikes which took about the same amount of time, and both ended up re-rendering the CodeMirror instance. So looking a little closely, I could see that the first time was caused by `CodeMirror.swapDoc` and the second by `CodeMirror.refresh`. When you look at the source code for these two [here](https://github.com/marijnh/CodeMirror/blob/master/lib/codemirror.js#L3207) and [here](https://github.com/marijnh/CodeMirror/blob/master/lib/codemirror.js#L3199), you can see that they both end up calling the same methods, which results in a complete repaint of CodeMirror.

To understand what was happening, I need to explain what happens when you switch a tab. For performance reasons we only keep one CodeMirror instance around and if you switch from one tab to another we call `swapDoc` to change the document that is being displayed. To accommodate for size changes and highlighting changes, we call `refresh` at the end of the switching process. But with my knowledge that `swapDoc` already does everything we need to do, I just moved `swapDoc` to the end of the process, (of course there were some other problems that this entailed but it was not too bad) and voila, only one repaint of CodeMirror when switching tabs. Which now gave a switch time of just 167ms.

![](/img/blog/flames-graph-after.png)

## Roundup

As you've seen, profiling, measuring and looking at these great data points that the dev tools provide, gives you an easy way to find and track down performance problems. And when you look at this data, it's immediately clear that it really pays off!

               | **Before** | **1st Round** | **2nd Round**
---------------|--------|-----------|----------
**Total Time**&nbsp;&nbsp;&nbsp; | 2055ms | 450ms     | 167ms



[Ace]: http://ace.c9.io
[CodeMirror]: http://codemirror.net
[Node.js]: http://nodejs.org
[article]: http://www.html5rocks.com/en/Tutorials/developertools/revolutions2013/#toc-flame-chart
[html5rocks]: http://www.html5rocks.com