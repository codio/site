---
title: "Phonegap Build"
class_name: docs
full_width: true
---


This tutorial shows you how to create a project and build to Phonegap:Build using Codio

[Adobe Phonegap](http://docs.build.phonegap.com/) provides a way for users to create mobile applications using technologies such as HTML, CSS, and Javascript.

PhoneGap Build is a cloud service for compiling PhoneGap applications.

###Phonegap:Build account
In order to use PhoneGap:Build, you will need a PhoneGap:Build account. If you do not have one click [here](https://build.phonegap.com/) to access the site and set one up.

###A sample Application
If you want to try it out using a sample application, follow the steps in this section. If you have an application ready to go, skip to the next step section.

- Grab this repo : https://github.com/inpixelitrust/Restaurant-Picker-jQueryMobile-demo
- Create a new project from the Dashboard and paste in this url : [https://github.com/inpixelitrust/Restaurant-Picker-jQueryMobile-demo](https://github.com/inpixelitrust/Restaurant-Picker-jQueryMobile-demo)


##Configure your Codio Project

1. Go to 'Tools>Phonegap'
1. To access Phonegap:Build from Codio you will need to set up an Authentication token. This is available in your Phonegap:Build account. Go to your Phonegap [account](https://build.phonegap.com/people/edit) details and select `Client Application` tab. If you do not see an authentication token, click `Reset` to obtain one. In Codio, select the `Change` button and paste your key in there

![auth](/img/docs/authtoken.png)

1. Set up your config.xml file. To build apps at Phonegap:Build a config.xml file is required. As one does not exist in the above project, Codio can create one for you, click the 'create' link

![config](/img/docs/config.png)

1. Edit the config.xml file. To avoid the hassle of setting up signing keys (specifically for iOS) you can edit the config file to build for specific platforms. Open the config.xml file and change

        <gap:platforms>
            <gap:platform name="ios" />
            <gap:platform name="android" />
            <gap:platform name="winphone" />
        </gap:platforms>
to

        <gap:platforms>
            <gap:platform name="android" />
            <gap:platform name="winphone" />
        </gap:platforms>


For more information on the config.xml settings see [here](/docs/phonegap/config)

##Build your Native apps

Now you're all set and can build the app for Android and WinPhone by selecting the build button. For more information on key signing certificates, see [here](/docs/phonegap/build). When the build is completed you can deploy the app to your device in the following ways.

1. download the native file and manually upload to your device 
1. scan the QR code to download from Phonegap:Build to your device




