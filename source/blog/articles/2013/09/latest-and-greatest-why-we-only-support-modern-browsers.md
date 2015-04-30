---
title: 'The Latest and Greatest - Why we only Support Modern Browsers'
author: Joel Moss
date: 2013-09-30
class_name: blog
tags: Product News
full_width: true
image: blog/browsers.jpg
---

So we've been getting a few questions about our browser support recently, in particular why it is that we only support the most recent versions of the most popular browsers. So I thought I'd answer that question here.

Basically, it all boils down to two things...

## Maintainability

Codio is an extremely complex beast, built up of several individual applications and all needing to live together in perfect harmony. So needless to say, it takes a fair bit of work to maintain, and ensure that everything keeps working as it should.

Also, as you will most likely know, building a web application is an entirely different experience than building server side applications. Most of the time, this experience is great, but the one big thing that sets web development apart is the endless struggle to make your app look and work great in dozens and dozens of browser and OS combinations.

We have to test each browser on every popular operating system, and we have to do this continually. Of course, there are tools and services out there that can help us with this, but it is still very hard and extremely resource intensive. Because of our "Ship It" mantra, we need to move and react fast, and this includes browser testing.


## Functionality

Codio is an environment designed and built to make your life easier. It includes some pretty unique features, as well as a lot of features that you all expect to see in the the best IDEs and text editors.

Old browsers can severely restrict and constrain what we are able to build. For example, our support for multi-panel layouts wouldn't be possible without the latest FlexBox features of CSS3.

We simply wouldn't be able to deliver the best features and the best user experience to you, if we still had to support old browsers. We would only be shipping new features, improvements and bug fixes every couple of weeks, instead of every day, like we do currently.

We believe that you deserve the latest and greatest, so we only support the latest and greatest browsers:

- Chrome 21 or later
- Firefox 22 or later
- IE 10 or later
- Safari 6 or later
- Opera 12 or later