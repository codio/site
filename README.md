Codio Website
==============

This is the repository for the Codio website. It is primarily a [Middleman](http://middlemanapp.com/) application, which is a static site generator.

We encourage you to send us pull requests for anything that you think may fix or improve the site.


### Requirements ###

This repository is hosted on Github as a Git repo at [https://github.com/codio/site](https://github.com/codio/site). You will therefore need to install Git so you can check out the code and run it locally.

You will also need the latest version of Ruby 1.9.3, along with RubyGems and Bundler.

### Getting Started ###

First check out the code to your local machine. Once you have the code checkout out locally, and you have Ruby and Bundler installed, install the required Ruby Gems by running:

    $ bundle install

If this command fails, you most likely do not have Bundler installed. So run this:

    $ gem install bundler

Once your bundle is installed, you can simply run `middleman` in your terminal to start a local server that will serve the site.

Make sure you run the `middleman` command while in the directory where the app resides.

Now just open up your browser and go to http://localhost:4567


### Making Changes ###

All the source code (HTML, CSS, Javascript, etc.) is located within the `/source` directory. Changes that you make to any file within this directory can be viewed in your browser at the above URL. (Don't forget to refresh your browser.)

Once you have made your changes, simply commit them and push them up to the remote at Github.


### Lost? Need help? ###

Gimme a shout at jmoss@codio.com or on Skype at joelmoss.info.
