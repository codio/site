---
title: "Node"
class_name: docs
full_width: true
---

Node, preinstalled on all Codio boxes, is made available via the Node Version Manager, [nvm](https://github.com/sstephenson/rbenv). With a few simple commands it allows you to install multiple versions of Node and switch between them as and when you wish.

At the time of writing, your Codio Box has Node v0.10.25 installed for you. Open up the terminal and run the following to check this:

```bash
node --version
# v0.10.25
```

To install a different version of Node:

```bash
nvm install 0.8
# Now using node v0.8.26 
```

You can now switch versions easily:

```bash
nvm use 0.10
nvm use 0.8
```

Checkout the [nvm Github repo](https://github.com/creationix/nvm) for documentation.

## The npm Package Manager
You can install Node modules using the npm package manager. Check out [howtonode.org](http://howtonode.org/introduction-to-npm) for a good introduction to npm.

##Accessing your application
Once your Node app is up and running, you can access your project from a browser or API call etc. This is easily using done using [Preview button](/docs/ide/inline-preview). When you click it, you will see the URL to your Box, which will look something like this 

`word1-word2.codiodev.com:port`

TODO : Update URL when in production


##Important Reading Material
We strongly recommend you read up on the following before going too much further

- [Configuring single terminal/console commands from the 'Run' menu](/docs/boxes/run)
- [Restarting and resetting Boxes](/docs/boxes/restart-reset)
- [How to install Box Parts (everything from languages to middleware to databases)](/docs/boxes/box-parts)
- [Requesting new Box Parts](/docs/boxes/request-language)
- [Auto starting Box Parts services](/docs/boxes/startup)
