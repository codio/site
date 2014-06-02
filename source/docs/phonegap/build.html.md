---
title: Build
class_name: docs
full_width: true
---

The Build area is where you will see the platforms you have defined to build with the `<gap:platforms>` tag and where you will then select your key certificates that you have set up in your Phonegap:Build account ('Account > Edit Setting > Signing Keys' tab)

![buildkeys](/img/docs/buildsettings.png)


##Keys:

##Android
To build and test, you don't need to do anything. You can leave the field empty . If you want to deploy a codesigned App, (which you will need to deploy via Google Play) then you need to generate a proper Certificate. 

##iOS
Apple requires both a Codesigning Certificate and a Mobile Provisioning Profile. You need different ones for development and for App Store deployment.

##Windows
Windows does not require any certificates to build.

##Generate your Keys

Phonegap have very good documentation on how to generate your keys as well as how to configure your Phonegap:Build account

- for Android see [here](http://docs.build.phonegap.com/en_US/signing_signing-android.md.html#Android%20Signing) 
- for iOS see [here](http://docs.build.phonegap.com/en_US/signing_signing-ios.md.html#iOS%20Signing), 


*Note If you do not see anything in the `Keys` area, review your `<gap:platforms>` content*


##Settings:

##Private Application

Depending on the Phonegap:Build account plan you have, you can build a number of private applications. Check this box if you want to build as a private application. See [here](https://build.phonegap.com/plans) for more information on Phonegap:Build plans

##Enable Debug

Checking this box enables Phonegap Build debugging to allow you to use standard Web Inspector tools available from the PhoneGap Build site to debug PhoneGap apps while they are running on your device.

For more information on this see [Remote Debugging Tools](http://docs.build.phonegap.com/en_US/debugging_remote_debugging_tools.md.html#Remote%20Debugging%20Tools)

##Enable Hydrates

Checking this box enables Phonegap:Build Hydration. Hydration is a tool that has two main benefits for developers and testers:

- Compilation times are improved significantly.
- Updates are pushed directly to the application installed on a device.

For more information on this see [Remote Debugging Tools](http://docs.build.phonegap.com/en_US/tools_hydration.md.html#Hydration)