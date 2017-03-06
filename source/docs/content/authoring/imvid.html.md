---
title: "How to add media to your online course"
class_name: docs
full_width: true
---
You can insert Audio, Images and Videos.
## Audio
You can insert and play audio files within your project.

On the page(s) you wish to play Audio, go to the 'Settings' area where you can define the Source audio file along with any actions you may wish to occur at specific stages during the duration of the audio file playing.

<img alt="authtoken" src="/img/docs/guides/media.png" class="simple"/>

- Source Name - select the source file either from .guides/media folder if already uploaded to the project or upload directly from your PC where it will then be stored in the .guides/media folder
- Add Action where you can add actions to occur as the media plays:
	
		Open file
		Close file
		Open Terminal
		Close Terminal
		Run command
		Highlight
		Close all tabs
		Pause


## Images
Inserting an image is similar. Here are some examples. PNG and JPG image types are supported. Note that the 2nd and 3rd examples point to images within your project.

Generally speaking, you should put your images in the `.guides/img` folder in order to keep the rest of your workspace free of extraneous content for the benefit of the student.

```markdown
![optional alt tag](http://any-url-you-like.png)
![](image-in-project-root.jpg)
![](.guides/img/best-place-for-images.png)
```

## Videos

Including embedded videos are also possible using the standard `<iframe>` html tag.


### YouTube
  
If you wish to embed a YouTube video, go to the Share option and select 'Embed' to obtain the code snippet

<img alt="authtoken" src="/img/docs/guides/guides_youtube.png" class="simple"/>

```
<iframe width="560" height="315" src="//www.youtube.com/embed/1JNhoVbmNAo" frameborder="0" allowfullscreen></iframe>
```

### Vimeo
  
  If you wish to embed a Vimeo video, go to the Share option and select 'Embed' to obtain the code snippet

<img alt="authtoken" src="/img/docs/guides/guides_vimeo.png" class="simple"/>

```
<iframe src="//player.vimeo.com/video/110479088" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="http://vimeo.com/110479088">Codio - Innovation in Computer Programming Education</a> from <a href="http://vimeo.com/user20752628">Codio</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
```

## Hyperlinks
Creating a hyperlink on a piece of text is easy.

```markdown
Go to [Google](google.com) to look stuff up.
```



## iframes

You can also embed an iframe using the standard `<iframe>` html tag.

If you wish to embed from Google Docs, go to File>Publish to Web and select 'Embed' to obtain the code snippet


![](/img/docs/guides/guides_publish.png)

## Example Project

https://codio.com/codio-units/java-example is a project that you can [fork](/docs/ide/features/fork/) into your own Codio account and shows you how to create code tests and setup automatic marking. We would also recommend that you check out our [Guides Cheat Sheet](https://bitbucket.org/codiocontent/guides-cheat-sheet) and import into your Codio account to review. See [here](/docs/project/creating/) for more information on importing.