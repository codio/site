---
title: "Firewall, network & home configurations"
description: "School and home settings"
class_name: docs
full_width: true
---

Codio is usually usable without any special settings and can be run from anywhere in your browser. However, some school or university firewall settings may require special configuration.

This page contains information for 

- School network system administrators
- Students and teachers who may be using this from home

## Firewall settings
The following is a list of ports and URLs that Codio access from time to time. We have put these in priority order.

- ***.codio.com** the main Codio site and application
- ***.codio.io** domains that are auto-generated or each user project
- **api.keen.io** statistics gathering to measure student time spent in units   (stats)
- ***.typekit.net** web fonts
- **fonts.gstatic.com** web fonts
- **fast.fonts.net** web fonts
- ***.cloudfront.net** our CDN for speeding up static content
- **cdn.mathjax.org** CDN for mathematical formalae engine
- **gravatar.com** used for user gravatars (pictures)

- ***.intercom.io**, **cdnjs.cloudflare.com** and ***.pubnub.com** are highly recommended as they reate to  the help and support application (Intercom) built into Codio.


## Ports
We recommend opening the following ports

- **80 and 443** for standard communications
- **3000** is a standard port for user projects
- **9500** us a standard SSL port for user projects

## Working from home
The only thing we are aware of that may interfere with home usage is anti-virus/firewall settings that may make the experience slow.

You should check your settings and ensure that items in the above "Firewall settings" list are not added to your exclusion list.



