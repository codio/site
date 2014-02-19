---
title: "Accessing Boxes & Ports"
class_name: docs
full_width: true
---

When Codio creates a new project, it will generate a unique subdomain name for it. This name will consist of two words as follows

    word1-word2.codiodev.com:port
   
When we move our Boxs release into production, this will change to something friendlier, like

	word1-word2.cod.io

*TODO: update domain name once on production servers*

##Preview Menu
Codio offers a fully customizable Preview menu so you can preview both static files (.html) and server side files (.php, .rb etc.) with a single click. 

- [Preview documentation](/docs/ide/inline-preview)

##Ports
You can configure external access to your project over ports 1024 - 9999, so you'll need to configure your Web Server, Node.JS etc., to use a port within this range.

