---
title: "Phonegap Build"
class_name: docs
full_width: true
---

This tutorial shows you how to create a project and build to Phonegap:Build using Codio. PhoneGap Build is a cloud service for compiling PhoneGap applications.

[Adobe Phonegap](http://docs.build.phonegap.com/) provides a way for users to create mobile applications using technologies such as HTML, CSS, and Javascript.

###Phonegap:Build account
In order to use PhoneGap:Build, you will need a PhoneGap:Build account. If you do not have one click [here](https://build.phonegap.com/) to access the site and set one up.

###A sample Application
If you want to try it out using a sample application, follow the steps in this section. If you have an application ready to go, skip to the next step section.

- Grab this repo : https://github.com/inpixelitrust/Restaurant-Picker-jQueryMobile-demo
- Create a new project from the Dashboard and paste in this url : [https://github.com/inpixelitrust/Restaurant-Picker-jQueryMobile-demo](https://github.com/inpixelitrust/Restaurant-Picker-jQueryMobile-demo)


##Configure your Codio Project

- Go to 'Tools>Phonegap'
- To access Phonegap:Build from Codio you will need to set up an Authentication token. This is available in your Phonegap:Build account. Go to your Phonegap [account](https://build.phonegap.com/people/edit) details and select `Client Application` tab. If you do not see an authentication token, click `Reset` to obtain one. In Codio, select the `Change` button and paste your key in there

![auth](/img/docs/authtoken.png)

- Set up your config.xml file. To build apps at Phonegap:Build a config.xml file is required. As one does not exist in the above project, Codio can create one for you, click the 'create' link. If you are using your own project and there is a config.xml you can skip this step

![config](/img/docs/config.png)

- Review the default config.xml settings. To easily identify your build you may want to change `<name>, <description> & <author>` entries
  	

##Build your Native apps

The Build area is where you will see the platforms you have defined to build with the `<gap:platforms>` tag and where you will then enter your key certificates. For more information on key signing and setting up your Phonegap:Build account see [here](/docs/phonegap/build).

If you do not wish to build for iOS, you can remove `<gap:platform name="ios" />` from the `<gap:platforms>` tag from the `config.xml`. Android and WinPhone do not require certificates to build for testing.

Now you're all set and can build the app by selecting the build button.

When the build is completed you can deploy the app to your device in the following ways.

- download the native file and manually upload to your device 
- scan the QR code to download from Phonegap:Build to your device

![build](/img/docs/build.png)


For more information, see [Phonegap](/docs/phonegap)



