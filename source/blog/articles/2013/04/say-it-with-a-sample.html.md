---
title: "Codio: Annotations - Say it with a sample"
author: Freddy May
date: 2013-04-10
tags: tutorials, programming, development, coding, teaching, learning
class_name: blog
full_width: true
published: true
---

While we were building the Codio IDE, we suddenly realized that we have in our hands a unique platform that helps people explain code - any programming language, any skill level, not just beginners. It is ideal for:

- Development tutorials (any skill level)
- API samples and explanations
- Developer documentation samples and tutorials
- Documenting and explaining advanced frameworks, libraries etc.
- Example code projects of any sort and any level

##Tell us what you think
We will offer this as a completely free platform, but it will require real effort a) to add the annotation features and b) to provide the infrastructure. It is really important to us to know that people are behind our efforts.

So if you like what you see, <a href="http://twitter.com/home/?status=Codio is an awesome platform for code examples and tutorials, any language, any skill level" target="_blank">Tweet about us</a>, <a href="http://www.facebook.com/CodioHQ" target="_blank">like us on Facebook</a> or just leave a comment at the bottom of this page. The more support we get for this, the more we'll throw at it.

##Getting behind Education
One of our real hopes is that Codio provides a new way for schools, universities and other programming courses to teach, based on real working code, and in a way that does not require the learner to assemble a full development stack before being able to start tinkering. By offering these features and a real web IDE for free, we hope to clear away a few obstacles.

##Video Overview
This post describes things step by step, but if you prefer a video run-through, [click here](http://www.youtube.com/v/ypR9CUG1Tjo?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&).

##What's missing from most tutorials
We all know what most tutorials look like. It doesn't matter if it is a tutorial for a complete newbie or something that is explaining a complex framework, API or library.

Below is an example of a high quality tutorial from webplatform.org, which you can scroll through or you can <a href="http://docs.webplatform.org/wiki/tutorials/creating_and_modifying_html" target="_blank">open the full page</a>.

<iframe style="width:700px; height:400px" src="http://docs.webplatform.org/wiki/tutorials/creating_and_modifying_html"></iframe>

It is very well written indeed, but there is a lot to digest here, and this is usually the case with web and video tutorials.

When I am learning about a something new, there are two things I always yearn for:

- The tutorial seamlessly wrapped up with a **real, fully working code example**
- Interactivity - being able to run, explore, fork, edit etc.

... and this is exactly what Codio: Annotations offers.

##The same tutorial run in Codio
So, let's see how Codio can change the approach to the same tutorial

##Better - Step 1
You can load any development project already today. Just include a link (<a href="https://codio.com/fmay/HTML-Create-and-Modify/tree/App/index.html" target="_blank">try clicking here</a>) from within your page or use a Codio widget to go to the project. Try it out and see what it feels like.

[![Drag and Drop in the File Explorer](blog/codio-widget.png)](https://codio.com/fmay/HTML-Create-and-Modify/tree/App/index.html)

##Better - Step 2
But there are lots of situations where I want to make things even more seamless and avoid having to leave the tutorial page. You can embed the Codio IDE straight into your web page as shown below. It's a simple project, but have a quick explore ...

<iframe style="width:800px; height:600px" src="https://codio.com/fmay/HTML-Create-and-Modify/tree/App/index.html"></iframe>

From the Codio IDE, your sample can be:

- Viewed and explored
- Forked and edited
- Downloaded
- Run (if it is an HTML5+CSS+JS project)

##Better - Step 3
The following steps have not been built yet, but will be with your support. The screenshots below are mockups.

Imagine being able to explore the code freely by clicking on the icons within the IDE wherever you see one. I will explain further down how this can all be set up in your source project using your regular IDE.

![Example Annotation](/img/blog/exp-settabfromlink.png)

You can see rich text (as shown), images, audio or video depending on the icon you click on.

##Better - Step 4
If I want to, I can put the entire tutorial itself into the project and then get a guided tour through the code, either by click on the navigation buttons ...

![Example Annotation](/img/blog/exp-guided.png)

... or by scrolling through the embedded tutorial, which syncs automatically with the associated piece of code.

![Example Annotation](/img/blog/exp-scroll-1.png)

##Better - Step 5
The final piece in the jigsaw is also really important - how to find great tutorials. We will build a curated area where each tutorial can be posted. Anyone who has built one can:

- Add tags
- Post it to a language area
- And within that, a subject matter area
- Allow users to vote on it
- Encourage users to post comments to other learners and to the author so it can be improved

It will look something like this ...

![Example Annotation](/img/blog/exp-curation.png)

##How does a developer build a Codio tutorial?
We want to make this as easy and unobtrusive as possible. Here are the key points:

- It should work for any programming language
- You should be able create the content from absolutely any IDE
- It should not mess up your source code or interfere with the way you would want to write code naturally
- You should be able to import effortlessly from a ZIP file, Git or Mercurial repo so that future modifications and updates are a no-brainer

The screenshot below shows how tokens are added into the source file ...

![Example Annotation](/img/blog/ks-tokens.png)

And this one shows how you construct the annotations file. This provides both guided tours, scrolling as well as the project structure annotations.

![Example Annotation](/img/blog/ks-annotation-file.png)

<a name="support"></a>
##Please support us
If you agree that Codio is a force for good whether in education or for professional development, then doing any of the following will really help us know we are pointed in the right direction:

- <a href="http://twitter.com/home/?status=Codio is an awesome platform for code examples and tutorials, any language, any skill level" target="_blank">Tweet your support</a>
- <a href="http://www.facebook.com/CodioHQ" target="_blank">Like us on Facebook</a>
- Add a comment at the bottom of this page
- Just let others know about Codio: Annotations

Thanks!

The Codio Team


