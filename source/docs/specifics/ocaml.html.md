---
title: "Ocaml Quick Start"
class_name: docs
full_width: true
---

## 1. Setup
1. From the Codio Dashboard, select the 'Create Project' tab.
1. Enter a name for your project.
1. From the dropdown list, select 'Empty project' then press 'Create project'.
1. You will now be taken to the IDE. Feel free to delete the `index.html` file.
1. If you want, you can add edit the `README.md` file by clicking the 'Code' link in the status bar at the bottom of the opened README file.

## 2. Install OCaml and the Ocaml Package Manager OPAM
1. From the Tools->Terminal menu, open up a Terminal window
1. Enter `parts install ocaml` to install ocaml
1. Enter `parts install opam` to install the package manager
1. Close and reopen the terminal window

## 3. Write some Code
From the 'File->New File' menu, create a new file called `hello.ml` and write the worlds most simple OCaml application.

```
// Output "Hello world!" 
print_string "Hello world!\n";;
```

## 4. Compile it
From the terminal, enter ...
```
ocamlc -o hello hello.ml
```

## 4. Marvel at your work
Let's run our recently compiled application ...

    ./hello 

and lo and behold you should see

    Hello world!   

That's it.
