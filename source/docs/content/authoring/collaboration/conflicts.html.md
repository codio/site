---
title: "Conflicts"
class_name: docs
full_width: true
---

If two or more people happen to have modified the exact same lines of text or code then when you merge the affected file Git will detect a conflict and flag this.

This conflict will be detected when you perform a `git pull` operation, which pulls in changes from a remote repo to your own.

When this happens you need to resolve the conflict. Git will mark up the affected lines by modifying the file to include both your changes and the changes made by the other person. If you open the file, you will see something like this.

``` html
<html>
<head>
    <title></title>
</head>
<body>
<<<<<<< HEAD
Hello world local change
=======
Hello world from remote
>>>>>>> b5643b0d6027ecd5abe984a5d0de2999aafdbd7d
</body>
</html>
```

You should remove the markers so that only the correct content remains. It is up to you to decide whether you want to remote or local content to prevail.

``` html
<html>
<head>
    <title></title>
</head>
<body>
Hello world local change
</body>
</html>
```

After this, you can commit the changes and push again. 

The longer you leave things without pulling remote changes, the more likely there are to be conflicts. As a result, you should pull in changes from the remote repo often so you are not faced with masses of conflicts. The longer you leave it between pulls, the more out of sync your content will be.

<div class="video">
<div class="video-wrapper">
<iframe src="https://player.vimeo.com/video/173328972" width="640" height="435" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>
</div>




