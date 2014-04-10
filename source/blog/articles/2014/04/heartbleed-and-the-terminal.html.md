---
title: HeartBleed and the Terminal
author: Joel Moss
date: 2014-04-10
tags: Changelog
class_name: blog
full_width: true
---

## HeartBleed

First of all, you may have heard of something called the HeartBleed bug that has been causing havoc all over the internet this week. I won't detail what this is, as [this site](http://heartbleed.com/) does a great job of that already. However, I want to put your minds at rest and let you know that Codio is patched and updated to protect against this bug. All our servers are now running an updated version of OpenSSL that protects us and you from this exploit. Several other security measures have been put in place to further increase security.

## Terminal Issues

This week we encountered some pretty annoying issues which caused the Terminal to keep disconnecting on a regular basis. I wanted to let you all know about the cause of this - as it affected most of you, and what we did to fix it.

First, a little background...

Over the last few weeks, we have been working very hard on improving stability across the Codio platform. One particular area of focus has been on the real-time and collaborative parts of the system. We use an open source library called [ShareJS](http://sharejs.org/), which is based on the technology used in Google Docs.

We also use ShareJS to help with several other synchronisation tasks. One such task is to monitor the active/inactive state of Boxes. ShareJS knows when you have your project open and what that project is. So when a Project is closed, ShareJS tells the system that the Box is now inactive, and should be shut down.

Unfortunately this mechanism broke during an update we applied earlier this week, and is why some of you kept getting disconnected from your Terminal. Fortunately, this didn't affect code editing in any way. This is because we do not rely on a running container for code editing.

The frustrating part of this bug was that it was extremely random. You could be connected to the Terminal for an hour completely unaffected, but then lose connection every 10 minutes thereafter. It was also something that none of us here could reproduce locally or on our staging environment. It only occured on production.

This resulted in a fair bit of stabbing in the dark, and hoping to find something that stuck. It was hard enough to find where the problem was, let alone fix it.

Eventually however, after lots of bug hunting by several of our team, and after several commits, we did fix this yesterday morning. We've been keeping a very close on things since then and are happy to report that no further issues have been experienced by us or reported by you.

We are still working to improve stability even more, and we are making great progress. We thank you for your patience this week and hope that you are still enjoying Codio as much as we are.