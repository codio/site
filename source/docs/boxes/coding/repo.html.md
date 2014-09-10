---
title: "It's Open Source"
class_name: docs
full_width: true
---

The entire Box Parts library with all available packages are [available on GitHub](https://github.com/codio/boxparts). 

If you want to see how our existing packages are built, then take a look in the `/lib/autoparts/packages` folder.

#Coding your own Package in Codio
It's very easy to start coding your Box Part ...

- Fork the [Box Parts repo](https://github.com/codio/boxparts) into your own GitHub account. 
- From your GitHub fork, copy the SSH (best) or HTTPS url to the clipboard (not the url in the browser address bar). Read [this section](docs/settings-prefs/account-settings/acct-github/) for information on how to upload your Codio public key to GitHub so you can use SSH rather than HTTPS.

![](/img/docs/github-clone-url.png)

- In Codio, create a new Project and select the Git tab and paste in the url. You will now have the Box Parts repo in Codio and you can start work.
- Open up the `lib/autoparts/packages` folder and you will see all existing Box Parts.
- Create a new `.rb` file and start coding

The [next docs section](/docs/boxes/coding/example) goes into the details of how to code a Box Part.


#Testing
Once you are ready to test your Box Part, you should copy your package from the command line as follows

```bash
cp ~/workspace/lib/autoparts/packages/mynewpackage.rb ~/.parts/autoparts/lib/autoparts/packages
```

Now you can try out all of [the usual Box Parts commands](/docs/boxes/box-parts).

#Once you're done
Once you are done developing your part ...

- Please test it thoroughly so we don't have to reject it
- Commit your changes and push back (git is preinstalled, so you can use normal git commands)
- In GitHub, open a Pull Request so we can add it to the full parts list.

#Private Packages
