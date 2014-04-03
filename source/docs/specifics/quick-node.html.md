---
title: "Node.js Hello World app"
class_name: docs
full_width: true
---

## 1. Setup
1. From the Codio Dashboard, select the 'Create Project' tab
1. From the dropdown list, select 'Empty project' then press 'Create project'.
1. You will now be taken to the IDE. Feel free to delete the `index.html` file.
1. If you want, you can add edit the `README.md` file by pressing clicking on the 'Code' link in the status bar at the bottom of the opened README file.

## 2. Write some Code
From the 'File->New File' menu, create a new file called `index.js` and write the worlds most simple http server in Node.js.

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

## 3. Run your Code
Go to `Tools > Terminal` to open the terminal and then type in `node index.js` and hit enter. 

Now you should see something like this:

```bash
codio@samuel-mothed:~/workspace$ node index.js
Server running at port 3000
```

## 4. Marvel at your work
From the Preview dropdown menu (the right most Codio menu item, which will intially say 'Project Index'), select the 'Box URL' item and your Node application will serve up a simple `Hello World` in your browser.

## 5. More about Node on Codio
There is [another useful documentation section](/docs/specifics/node) on Node and Node version management using NVM.

