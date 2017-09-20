---
title: "GUI based output "
class_name: docs
full_width: true
---

If you are writing or using programs that have a GUI based output then please read this section. Whether you are using UI libraries like tkinter, qt or simply ubuntu applications that have a non web based UI, this section explains how to setup a virtual desktop.

## Sample Project
If you created the account for your Codio Trial account then you will find **Demo GUI Output** in your My Projects list. You will find instructions in the README.md file when you open the project.

If it is not there then [click here to install it in your projects list](https://codio.com/home/starter-packs/d9c00215-ec2a-46e7-b64e-85fab45b0872/). Press the **Use Pack** button to install.

### Uses and Limitations
X Server is a virtual desktop that is very effective for Codio's cloud based infrastructure. Any application that relies on a graphical user interface has its graphical output redirected to it and Codio's viewer is then able to display the virtual desktop in a browser. 

As you will see when trying out the sample applications in the demo project above, some of which have very complex UIs (notably SQLite and StartUML), you can get a very good experience indeed. The limitations start to be felt when using fast motion graphics where the virtual screen content is changing so fast that it cannot be rendered in real time over the internet. If you have better bandwidth you will experience better performance and vice-versa.


## Installing your own projects

### Installing X Server
To install X Server, go to the menu **Tools->Install Software** and locate X Server. Press the install button in the X Server row. The installation may take a few minutes and you should then [Restart](/docs/ide/boxes/restart-reset/) your Box before proceeding.

### Running your code
Before you can view any output, your program needs to run, so you should first start your code. When you start the viewer (see below), the UI output will be shown automatically.

<img alt="GUI Output" src="/img/docs/guioutput.png" class="simple"/>

You also can start the viewer first but it will be empty until a program runs, whereupon it will refresh.

### The viewer
The viewer is a special window that appears either inside Codio or in a separate browser tab. To open it, you should add `"Viewer": "https://{{domain3000}}/"` to the .codio file. 

```
{
// Configure your Run and Preview buttons here.

// Run button configuration
  "commands": {
        "Run Python (tkinter)": "python3 tkinterpy/demo.py",
        "Run Java (Lunar Phases)": "cd swing && java LunarPhases",
        "SQLite Browser App": "sqlitebrowser",
        "StarUML": "staruml"
  },

// Preview button configuration
  "preview": {
        "Viewer": "https://{{domain3000}}/"
  }
}
```

You can also access the from any browser using `https://pagoda-cigar-3000.codio.io/` where you replace `pagoda-cigar` with your boxes domain name, which you can find in the menu at **Project->Box Info** (scroll to the section **Web: Static content**).

### Customization
You can customise the X Server installation by modifying the config files in the normal way using vim or nano. For example you can

- `sudo vim /etc/init/openbox.conf` opens the openbox desktop config so you could change the default virtual desktop size
- `sudo vim /etc/init/novnc-3000.conf` would enable you to modify the port that the viewer runs on in case it conflicts with other services you may have configured on the default port 3000

