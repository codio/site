---
title: "Firewall, network & home configurations"
description: "School and home settings"
class_name: docs
full_width: true
---

Codio can usually run from anywhere in your browser without any special settings. However, some school or university firewall settings may require special configuration.

This page contains information for 

- School network system administrators
- Students and teachers who may be using Codio from home

## Firewall settings
The following is a list of ports and URLs that Codio access from time to time. We have put these in priority order.

- __*.codio.com__ the main Codio site and application
- __*.codio.io__ domains that are auto-generated for each user project
- __api.keen.io__ statistics gathering to measure student time spent in units   (stats)
- __*.typekit.net__ web fonts
- __fonts.gstatic.com__ web fonts
- __fast.fonts.net__ web fonts
- __*.cloudfront.net__ our CDN for speeding up static content
- __cdn.mathjax.org__ CDN for mathematical formulae engine
- __*.youtube.com & *.vimeo.com__ for video's included in Course content
- __gravatar.com__ used for user gravatars (pictures)

- __*.intercom.io__, __cdnjs.cloudflare.com__ and __*.pubnub.com__ are highly recommended as they relate to  the help and support application (Intercom) built into Codio.


## Ports
We recommend opening the following ports

- **80 and 443** for standard communications
- **3000** is a standard port for user projects
- **9500** is a standard SSL port for user projects

## Working from home
Sometimes the anti-virus/firewall settings on your personal devices may interfere with home usage and make the experience slow.

You should check your settings and ensure that items in the above "Firewall settings" list are added to your exclusion list.



