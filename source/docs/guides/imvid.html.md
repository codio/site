---
title: "Images, Videos & Hyperlinks"
class_name: docs
full_width: true
---

You can insert these in your section editor using Markdown.

##Hyperlinks
Creating a hyperlink on a piece of text is easy.

```
Go to [Google](google.com) to look stuff up.
```

##Images
Inserting an image is similar. Here are some examples. PNG and JPG image types are supported. Note that the 2nd, 3rd and 4th examples point to images within your project.

Generally speaking, you should put your images in the `.guides/img` folder in order to keep the rest of your workspace free of extraneous content for the benefit of the student. 

```
![optional alt tag](http://any-url-you-like.png)
![](image-in-project-root.jpg)
![](.guides/img/best-place-for-images.png)
```

##Videos
Including a video is also possible. We currently support YouTube only, but can add Vimeo if requiredm so please email support@codio.com if you need this.

```
![320x240](http://www.youtube.com/watch?v=U52xNyaS5R0&feature=youtu.be)
```

- `[320-240]` is the size we want to render the video
- `http://www.youtube.com/watch?v=U52xNyaS5R0&feature=youtu.be` it's very important that you use this format and not one you get directly from YouTube. In YouTube, find your video and then copy and paste the video id (`U52xNyaS5R0` in our example).


