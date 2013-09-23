---
title: Securing Project Previews
author: Joel Moss
date: 2013-04-29
tags: changelog
class_name: blog
full_width: true
image: blog/preview-auth.png
---

We are always extremely mindful of ensuring that your Codio experience is as secure and safe as possible. So with this in mind, we just rolled out a change in the way that you preview private projects. Previously, we used a cookie to authenticate such requests. This was done to ensure that only those with read permissions could actually preview. However, this method is prone to abuse and could allow an attacker to preview your private projects, regardless of whether they had permission to do so.

This mornings release completely removes this dependence on cookies to authenticate when previewing. Instead, you will be prompted to enter your Codio login if and when you preview a private project.

Please note, that you will not be prompted to authenticate when previewing public projects - for obvious reasons.