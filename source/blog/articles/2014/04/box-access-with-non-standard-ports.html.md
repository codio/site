---
title: Box Access to Non-Standard Ports
author: Joel Moss
date: 2014-04-30
tags: 'Product News'
class_name: blog
full_width: true
image: blog/port_80_blocked.png
---

Most of you will know that you can access your Boxes via a unique domain name - something like `https://my-box.codio.io`. This domain serves your project root via a static web server, which is great for quickly previewing your client-side code. It also supports HTTP and HTTPS traffic.

What you may not know, is that you can also run your custom HTTP based servers and applications via almost any non-standard port. Ports `1024` - `9499` are reserved exclusively for HTTP access, and ports `9500` - `9999` are reserved exclusively for HTTPS access.

For example, you could run a Ruby on Rails or NodeJS Express application on your Box, and it would be available via a URL such as `http://my-box.codio.io:3000`. Again, quick and easy!

Well unfortunately, some of you work in an environment that sits behind a firewall, which usually means that access to any non-standard port is blocked. Most of the time, this simply means you can access sites over the standard port 80 and 443.

We listened and found a nifty little solution that bypasses this problem completely, allowing you to access your applications via any port.

So alongside the URL's detailed above, you can also access the same port by passing it within the domain name itself. So as an example, if your application runs over port 3000 you would usually attempt to access it at `http://my-box.codio.io:3000`. But if that port is blocked by your internet provider or network, just open up `http://my-box-3000.codio.io` instead and you'll be laughing.

Simply move the port number from the end of the domain, and place at the end of your box name, separating it with a hyphen.