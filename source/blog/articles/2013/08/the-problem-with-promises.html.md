---
title: The Problem with Promises
author: Joel Moss
date: 2013-08-06
tags: Engineering
class_name: blog
full_width: true
image: blog/promises.svg
---

We use [Promises](http://promisesaplus.com/) as much as possible in our Javascript code, because they save us from callback hell, and produce much more readable and organised code. Simply put, a Promise represents a value that may or may not yet be available.

We use [jQuery's Deferred object](http://api.jquery.com/category/deferred-object/) when working with Promises, which is a slightly loose implementation of the [Promises/A+ spec](http://promisesaplus.com/). It might not be the ["correct"](http://domenic.me/2012/10/14/youre-missing-the-point-of-promises/) way, but it works as expected.

We're doing a little refactoring of the core IDE and decided that the [RSVP](https://github.com/tildeio/rsvp.js) Promises library was a more "correct" implementation, and so we started using that in the refactor branch. However, it turns out that RSVP and other Promise libraries that adhere to the spec include a nasty little gotcha that we feel is completely unacceptable when building production applications.

It all boils down to point [3.2.6.2](http://promisesaplus.com/#point-50) of the spec:

> If either onFulfilled or onRejected throws an exception, `promise2` must be rejected with the thrown exception as the reason.

Usually, when an exception is raised in Javascript, it is reported immediately by the browser as an error, which makes it very easy to act upon and see exactly when and where any issues arise. You can then use an [exception tracking service](http://errorception.com) to report on errors as and when they happen, and respond accordingly.

The Promises/A+ spec states that when an exception is raised anywhere within your Promised code, the promise will be rejected. This includes *ANY and ALL exceptions*, which means the promise will swallow your exceptions - all the time, every time!

The nature of an exception is such that you do not and cannot know every time, when and where they will happen. Yes, you can - and should - catch common errors and handle them accordingly. But any unexpected errors are much harder to catch. So if your Promises swallow every one of these errors, you now have to write code to handle them. It now becomes almost like using `try/catch` all over the place, and if you find yourself doing that, then you're doing it wrong!

## The Options

**[RSVP](https://github.com/tildeio/rsvp.js) makes things worse**, because if you don't catch your Promise rejections, then any exceptions will be completely ignored. You will never know if an error occurred, and when or where it happened.

**[Q](http://documentup.com/kriskowal/q/) handles this a little better** by not swallowing exceptions when you don't catch its rejections. But that means you now have to ensure that you catch rejections in *every* Promise, and handle them.

**[jQuery](http://jquery.com/) is even better still**, because it does not swallow our exceptions.

## In Conclusion

So we ended up back with jQuery which lets **us** decide how to handle exceptions. Any exception in a Promise is handled exactly as you would expect, and raises it immediately. It does not swallow it up, leaving you to wander why the hell your code is not working.