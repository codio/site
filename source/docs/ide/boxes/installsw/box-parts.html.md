---
title: "Installing software packages"
class_name: docs
full_width: true
---

The Tools->Install Software menu option gives you access to a dialog driven means of running scripts that can install, configure or reconfigure software components. This saves you the trouble of doing this manually from the command line. 

![Install Software](/img/docs/install-sw-g2.png)

On this page, you can locate the software you want to install and then click the install icon to start the installation.

#### Installing from the command line
Our latest boxes provide full `sudo` (root) access, so you can also use the Ubuntu [apt](https://help.ubuntu.com/community/AptGet/Howto) package manager, which provides thousands of software packages that are maintained by the Ubuntu community.

If you want to provide fully pre-configured boxes then you should use [Stacks](/docs/dashboard/stacks/listing/) rather than the Install Software feature described on this page. 


#### Adding or requesting new packages
As of May 2016 the list of available packages is somewhat limited. However, we will be adding to these continuously and we also encourage you to request new ones. 

If you require a new script to be added to the Install Software list then you have two options.

1. Visit the [Issues](https://github.com/codio/install_software/issues) page on our GitHub repository and create a new issue detailing your requirements.
1. You can fork our [GitHub repository](https://github.com/codio/install_software), add the script yourself and then submit a pull request.

Instructions on how to add your own package scripts can be found [here](/docs/ide/boxes/installsw/parts-coding/).


#### Autostarting
Services that require to be started will auto start on installation.

You can manually start, stop and restart services using the following terminal commands:

```
$ sudo service <package-name> start
$ sudo service <package-name> stop
$ sudo service <package-name> restart
```

### G1 (first generation) Boxes

> **DEPRECATION NOTICE**
>
> G1 (first generation) Boxes will be disabled on 1st January 2017. 

If you are running an old first generation box, then please [click here](/docs/ide/boxes/installsw/g1/) for details.

If you are not sure which box generation you are running, select the Project->Box Info menu item. The ensuing dialog displays near the top.

#### Migrating G1 Boxes to G2

- Go to ‘Project>Settings’ and to the 'Generation 1 to Generation 2 migration' tab
- Select the Stack you wish to use in your project using the 'browse' button. If there is not a suitable stack available, you can create your own and return to this tab when completed. See [Creating a Stack](/docs/project/stacks/new/) for more information.
- Define the name of the new G2 project
- Press the 'Migrate' button when ready to proceed

**Note:** Only your project data is migrated, any project level configuration of installed packages from your Generation 1 Box will not be migrated

