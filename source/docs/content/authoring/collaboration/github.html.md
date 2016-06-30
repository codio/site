---
title: "Git and GitHub"
class_name: docs
full_width: true
---

GitHub is a free resource that is used by many millions of developers to remotely store their collaborative code. 

### Create a GitHub account
You should create an account now so you can work with it from your Codio account.

### Linking Codio to GitHub
Although it is not necessary, we strongly recommend you link you Codio account to GitHub. Doing so will automatically copy the necessary public keys from Codio ro GitHub. This means you will never have to enter a password when running certain Git commands.

1. Go to you account settings (click on your user name if in the dash board, or Codio->Account if you are in the IDE). 
1. Click on the Applications tab.
1. Locate the GitHub section and press the connect button. You need to have created a GitHub account before doing this.

<div class="video">
<div class="video-wrapper">
<iframe src="https://player.vimeo.com/video/172913160" width="640" height="435" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>
</div>

### GitHub Repositories
A repository, usually referred to as a 'repo', is a GitHub project that stores your code project. When thinking about Codio, you should have a repo for each Codio unit that you are collaborating on.

### Git
Git is the tool you will use to manage your code. Git is installed on every Codio box and can be accessed from the terminal. 

Each Codio project has its workspace already initialized as a local Git repository. Open up the terminal in a Codio project and type `git status` to see it is up and running.

### Git tutorials
It is beyond the scope of this documentation to provide a Git tutorial. However, below are some links to get you going. If you have never used Git before, there is undoubtedly a learning curve, but you should bear in mind that what you will be learning is not just good for Codio content but will also stand you in very good stead for any coding you are doing.

- [GitHub Tutorials](https://guides.github.com/)

### Local repositories
One thing that those new to Git need to understand is that for a single project, there can be repositories located in many different places. There is the 'authoritative' repository which is usually the one you keep on GitHub. However, you also have a Git repository on your Codio box. Other people will also have their local repositories, whether in their own Codio project or on their local PCs.

When you use commands like `git add` and `git commit`, you are working with your local repository. In most cases, this will be on your Codio box. 

When you want to push these changes to the main, authoritative repository, you will use `git push`. 

If you want to check whether another user has pushed their changes to the main repository, you pull those changes down to your local repository using `git pull`.

### Using Git with Codio content
When working with Codio content, you will find that you (usually) only need to use the following commands ...

1. `git status` is a very useful helper command. Git will tell you about new files that it is not tracking as well as any changes to files it is tracking. If you are in doubt about the status, just run it.
1. `git add -A` tells Git to track all new files. By default, Git will not track files until you run this command. If you create new files afterwards, you will need to run the same command again to ensure they are also tracked.
1. `git commit -am 'a message explaining what you have changed since your last commit'`. A commit adds any changes to tracked files into the local repository (the one on your Codio box).
1. `git push` pushes your **committed** changes to the remote, authoritative (usually GitHub) repository.
1. `git pull` pulls down any changes from the remote repository and merges them into your own project. If someone has been working on the exact same lines of code you will get a conflict, which Git will tell you about. You will need to resolve these in the affected file. A later section explains this.

### Summary
That's the basics. On the next pages, we'll see how we manage the full workflow in more detail.

