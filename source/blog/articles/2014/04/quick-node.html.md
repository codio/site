---
title: Quick Start with Node.js in less than Five Steps
author: Friedel Ziegelmayer
date: 2014-04-03
tags: Guides
class_name: blog
full_width: true
---

# Quick Start with Node.js in less than Five Steps

## 1. Setup
First we create a new empty project and delete the `index.html`.
If you want you can add some info to the `README.md`.

## 2. Write some Code
Create a new file called `index.js` and write the worlds most simple
http server in Node.js.

```javascript
// Load the core http module.
var http = require('http');

// Create a new server that always responds with a text file
// containing "Hello World"
var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
});

// Start the server on port 3000
server.listen(3000);

// Print out a nice message so you know that the server started
console.log('Server running on port 3000');
```

## 3. Run some Code
Go to `Tools > Terminal` to open the terminal and then
type in `node index.js` and hit enter.
Now you should see something like this:

```bash
codio@samuel-mothed:~/workspace$ node index.js
Server running at port 3000
```

## 4. Marvel at your work
Open the "Box URL" preview and see a simple text file containing
`Hello World` served in your browser.
