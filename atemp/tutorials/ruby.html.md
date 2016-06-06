---
title: "Ruby"
class_name: docs
full_width: true
---

Ruby, preinstalled on all Codio Boxes, is made available via [rbenv](https://github.com/sstephenson/rbenv), which is a version manager for Ruby. With a few simple commands it allows you to install multiple versions of Ruby and switch between them as and when you wish.

By default your Codio Box has Ruby 2.0.0p353 installed for you. Open up the terminal and run the following to check this:

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

### Updating Ruby List

You can update your ruby list to see the all the current versions. In your terminal run:

```bash
cd ~/.rbenv/plugins/ruby-build
```

and then:

```bash
git pull
```

And then running

```bash
rbenv install --list
```
will show the latest versions available and you can install it as above. If there is a version of Ruby that is not available raise a request [here](https://github.com/sstephenson/ruby-build/issues2)


### Installing Gems

You can install Ruby Gems in the normal way, and without requiring `sudo` access:

```bash
gem install rails
```

**Important** : after you install a Gem, you must tell rbenv. This is especially important if the Gem you installed includes command line binaries you want to run. So after installing Gems, tell rbenv:

```bash
rbenv rehash
```

##Accessing your application
Once your Ruby app is up and running, you can access your project from a browser or API call etc. This is easily using done using [Preview button](/docs/ide/inline-preview). When you click it, you will see the URL to your Box, which will look something like this

`word1-word2.codio.io:port`


##Important Reading Material
We strongly recommend you read up on the following before going too much further

- [Configuring single terminal/console commands from the 'Run' menu](/docs/ide/boxes/run)
- [Restarting and resetting Boxes](/docs/ide/boxes/restart-reset)
- [How to install Box Parts (everything from languages to middleware to databases)](/docs/ide/boxes/box-parts)
- [Auto starting Box Parts services](/docs/ide/boxes/startup)
