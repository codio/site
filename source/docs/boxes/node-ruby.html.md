---
title: "Important Node & Ruby Stuff"
class_name: docs
full_width: true
---

Node and Ruby come pre-installed with your Codio project. To give you maximum flexibility, they are available with their respective version managers (rbenv and nvm).

##NodeJS
Here you go Joel.


##Ruby

Ruby is made available via [rbenv](https://github.com/sstephenson/rbenv), which is a version manager for Ruby. With a few simple commands it allows you to install multiple versions of Ruby and switch between them as and when you wish.

By default your Codio Box has Ruby 2.0.0p353 instaled for you. Open up the terminal and run the following to check this:

```bash
ruby -v
# => ruby 2.0.0p353
```

To install a different Ruby:

```bash
rbenv install 2.1.0
```

You can now switch versions easily:

```bash
rbenv global 2.1.0
ruby -v
# => ruby 2.1.0p0
```

Checkout the [rbenv Github repo](https://github.com/sstephenson/rbenv) for full documentation on rbenv.

### Installing Gems

You can install Ruby Gems in the normal way, and without requiring `sudo` access:

```bash
gem install rails
```

After you install a Gem, you must tell rbenv. This is especially important if the Gem you installed includes command line binaries you want to run. So after installing Gems, tell rbenv:

```bash
rbenv rehash
```
