# Codio Website

This is the repository for the Codio website. It is primarily a
[Middleman](http://middlemanapp.com/) application, which is a static site generator.

We encourage you to send us pull requests for anything that you think
may fix or improve the site.

## Requirements

This repository is hosted on Github as a Git repo at
[https://github.com/codio/site](https://github.com/codio/site). You
will therefore need to install Git so you can check out the code and
run it locally.

You will also need the latest version of Ruby 2.1.3, along with
RubyGems and Bundler.

Also you need to install ImageMagick for some image magick that is
happening.

## Getting Started

First check out the code to your local machine. Once you have the code
checkout out locally, and you have Ruby and Bundler installed, install
the required Ruby Gems by running:

```bash
$ bundle install
```

If this command fails, you most likely do not have Bundler
installed. So run this:

```bash
$ gem install bundler
```

Once your bundle is installed, you can simply run `middleman` in your
terminal to start a local server that will serve the site.

Make sure you run the `middleman` command while in the directory where the app resides.

Now just open up your browser and go to http://localhost:4567


## Making Changes

* Checkout a new branch `git checkout -b my_awesome_branch`
* Make your changes,
  All the source code (HTML, CSS, Javascript, etc.) is located within
  the `/source` directory. Changes that you make to any file within this
  directory can be viewed in your browser at the above URL.
* Once you have made your changes, simply commit them and push them up
  to the new remote branch at Github.


## Lost? Need help?

Give Joel (jmoss@codio.com) or Friedel (fziegelmayer@codio.com) a
shout if you need any help.
