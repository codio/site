---
title: "Creating a repo from Codio"
class_name: docs
full_width: true
---

You should create repos for each Codio project (Unit) you want to collaborate on. There is no single button presson way of creating a GitHub repo from a Codio project. The steps are explained below and you can also watch the video.


### Create a new GitHub repo

<div class="video">
<div class="video-wrapper">
<iframe src="https://player.vimeo.com/video/172919256" width="640" height="435" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>
</div>


1. Make sure your code is committed to your local repo.
1. Go to your GitHub account and create a new repo. 
1. In Codio, set up Git to point to this *remote* using `git remote add origin git@github.com:fmay/test.git`
1. Push your changes to the remote using `git push -u origin master`

That's all. Now you can check your GitHub repo and you will find your code there. 

After using `git push -u origin master` for the first time, you only need to use `git push`.