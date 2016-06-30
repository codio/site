---
title: "Your own authoritative repos"
class_name: docs
full_width: true
---

This scenario may not arise if you are working on a fork of someone else's repo. However, you may want to create your own repos and be the authoritative owner.

In this case, there are two ways people can collaborate

1. Other people can fork your repo as described in the previous sections. This is the recommended approach when collaborating with other people you don't know well.
1. You can invite other GitHub users to work directly on your repo, without the need to fork. This is a faster, simpler way of doing things. However, it is important that a) you know and trust those users and b) that you make sure they use Git branches. 

If the second option applies, then they create their Codio project directly from your repo as described on the previous page. However, when they try to push back to the repo, they will get an error as they do not have permissions to push directly into your repo.

The good news is that you can allow this by applying the necessary permissions in GitHub. 

1. Go to the repo in your GitHub account.
1. Click the settings button near the top of the page.
1. Press the Collaborators link on th left side.
1. Add collaborators. You will need to know their GitHub name but can also search.

### Pulling changes
Regardless of whether you are the owner or any other collaborator. You should regularly pull in changes from the remote repo. There might not be any but the general approach is to pull often. This way you reduce the likelihood of lots of conflicts to deal with in one go. 

- `git pull origin master` is the usual command but can vary if you are using branches.

### Branches
It is very much recommended practice to use branches when collaborating. Branches are very powerful and allow you to develop anything you want in a safe way. 

It is beyond the scope of this documentation to cover branches. However, once you are comfortable with the basics of Git, it is strongly recommended that you use and are comfortable with branches. You will really enjoy using them and they allow you to perform and even push any form of experiment without a) running the risk of messing up the master branch or b) creating another repo to experiment in.

[Git branches](https://www.atlassian.com/git/tutorials/using-branches/) is a detailed tutorial but you will find lots of others if you [Google it](https://www.google.co.uk/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=git%20tutorial%20branches).