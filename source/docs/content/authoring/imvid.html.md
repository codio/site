---
title: "How to add media to your online course"
class_name: docs
full_width: true
---

You can insert these in your section editor using Markdown.

We would recommend that you check out our [Guides Cheat Sheet](https://bitbucket.org/codiocontent/guides-cheat-sheet) and import into your Codio account to review. See [here](/docs//project/creating/) for more information on importing.

##Images
Inserting an image is similar. Here are some examples. PNG and JPG image types are supported. Note that the 2nd and 3rd examples point to images within your project.

Generally speaking, you should put your images in the `.guides/img` folder in order to keep the rest of your workspace free of extraneous content for the benefit of the student.

```markdown
![optional alt tag](http://any-url-you-like.png)
![](image-in-project-root.jpg)
![](.guides/img/best-place-for-images.png)
```

##Videos

Including embedded videos are also possible using the standard `<iframe>` html tag.


###YouTube
  
If you wish to embed a YouTube video, go to the Share option and select 'Embed' to obtain the code snippet

<img alt="authtoken" src="/img/docs/guides/guides_youtube.png" class="simple"/>

```
<iframe width="560" height="315" src="//www.youtube.com/embed/1JNhoVbmNAo" frameborder="0" allowfullscreen></iframe>
```

###Vimeo
  
  If you wish to embed a Vimeo video, go to the Share option and select 'Embed' to obtain the code snippet

<img alt="authtoken" src="/img/docs/guides/guides_vimeo.png" class="simple"/>

```
<iframe src="//player.vimeo.com/video/110479088" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="http://vimeo.com/110479088">Codio - Innovation in Computer Programming Education</a> from <a href="http://vimeo.com/user20752628">Codio</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
```

##Hyperlinks
Creating a hyperlink on a piece of text is easy.

```markdown
Go to [Google](google.com) to look stuff up.
```



##iframes

You can also embed an iframe using the standard `<iframe>` html tag.

If you wish to embed from Google Docs, go to File>Publish to Web and select 'Embed' to obtain the code snippet


![](/img/docs/guides/guides_publish.png)