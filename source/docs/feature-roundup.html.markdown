---
title: Feature Roundup
class_name: docs
full_width: true
---

Here is a full list of all important Codio features. Codio packs a lot of features and so take a moment to scroll through and see what we've got.

#Command Bar
[Full documentation.](/docs/emmet/command-bar) The Command Bar let's you access almost every Codio command with a single keyboards shortcut. You simply type the command you want to run and it autocompletes the list for you. It's a great place to look up keyboard shortcuts without having to explore the menu or documentation.

![command bar](/img/docs/command-bar.png)

#Quick Open
[Full documentation.](/docs/ide/ide-general/quick-open/) Quick Open (fast open), is a great way of opening files without the need to access the file tree. You can start typing the name of a file and as you type, the list will narrow down. You can then select the file you want using the mouse or use the keyboard.

![quick open](/img/docs/quick-open.png)


#SSH Terminal Access
[Full documentation.](/docs/ssh/) Codio provides the ability to connect to a remote server via SSH. You can open multiple connections and manage connections through the [SSH Connection Manager](/docs/ssh/ssh-manager).

![ssh parameters](/img/docs/ssh-tab.png)

You can do the same things you can do in a regular terminal window, including running text editors like Nano etc.

#Deployment Targets
[Full documentation.](/docs/deployment/deploy/)
Codio lets you deploy all or any part of your project with a single click to a custom 'deployment target'. Currently, we support deployment to FTP, SFTP, RSYNC, Nodejitsu, Parse.com and Git targets.

![ssh parameters](/img/docs/deploy-details.png)

#Panels & Tabs
[Full documentation.](/docs/panels/) IDE panels let you create any panel configuration you want for both code editing and also other features (such as [Git](/docs/git), [Bower](/docs/bower), [Deployment](/docs/deployment) etc.).

This gives you complete control over the layout of your project. Whenever you leave you project, its precise pane configuration is saved and reloaded when you come back to it.

![Panels](/img/docs/panel-overview.png)

#README.md files
[Full documentation.](/docs/ide/ide-general/readme-md/) When you open up a project in the IDE, Codio will try to locate a file called readme.md in the root of the project. If it finds one and you have not opened the project beforehand, it will open and display it. 

![readme info page](/img/docs/readme-md.png)

#Syntax Highlighting
[Full documentation.](/docs/ide/code-editor/ide-force-lang/) Codio will automatically select the syntax highlighting rules based on the file extension. If you open a file whose extension is not known then you will not get any highlighting of the code. You can tell Codio which language formatting to use by clicking on the name in the status bar of the code window.

![lang override](/img/docs/ide-force-lang.png)

#Settings and Preferences
[Full documentation.](/docs/settings-prefs/) Codio supports very rich settings and preferences control. You can control account level settings, users general preferences, project level overrides as well as permissions.

![preferences](/img/docs/prefs-user.png)

#Managing projects
[Full documentation.](/s/docs/console/) When you sign into Codio, you are shown the Dashboard. From here you can create and manage your projects.

![preferences](/img/docs/console-screen.png)

#Forking Codio projects
[Full documentation.](/docs/ide/ide-general/fork/) You can fork any 3rd party public project into your account.

#Autosave
Codio comes with an Autosave feature out-of-the-box. We will be adding manual save as an option.

#Drag and drop into the file tree
With some browsers you can drag and drop files and folders from your desktop into the Codio filetree. For those browser that do not support this you can right click the desired location in the FileTree.

#Abbreviations
[Full documentation.](/docs/emmet/emmet-abbreviations/) There are a very wide range of shortcuts available for HTML, CSS and Javascript. You simply enter the abbreviation in the Code Editor and then press the Tab key to expand the abbreviation. For instance ...

	div>ul>li*3

results in 

	<div>
	    <ul>
	        <li></li>
	        <li></li>
	        <li></li>
	    </ul>
	</div>


##Special Keyboard Shortcuts
[Full documentation.](/docs/emmet/emmet-actions/) You will also find a wide range of keyboard shortcuts to speed productivity even further. Things like 'Match Tag Pair', 'Go To Matching Pair', 'Wrap with Abbreviation', 'Go to Next Edit Point' and more.

#Bower
[Full documentation.](/docs/bower/) We've added a nice UI to make searching, installing and updating Bower components friendly and fast.

#Annotations
[Full documentation.](/docs/annotations/) Codio Annotations is a set of features within the Codio IDE that lets you create rich, interactive code samples and documentation for a project in any programming language.

#Code Beautification
[Full documentation.](/docs/ide-beautify/) With menu or keyboard shortcut you can auto-format blocks of code. You can also control key parameters in the [Preferences](/docs/settings-prefs/codio-prefs/).

#Creating Projects and importing from Git, Mercurial, ZIP
[Full documentation.](/docs/console/creating/) You can create a new Codio project in a variety of ways, including using simple Codio templates, importing from Git, Mercurial or a ZIP file.

#Coffeescript, Less, SCSS, Sass
[Full documentation.](/docs/compiling/) You can write code using these variants and Codio will autocompile it for you, so when you preview a file, it displays without needing to run Grunt tasks.

#Autocomplete
[Full documentation.](/docs/autocomplete/) Autocomplete is invoked using `ctrl+space'.


