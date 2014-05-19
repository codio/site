---
title: Build
class_name: docs
full_width: true
---

The Build area is where you will see the platforms you have defined to build with the `<gap:platforms>` tag and where you will then enter your key certificates.

**todo-screenshot**

Certificates are a necessary evil for your Apps.

##Android
To build and test, you don't need to do anything. You can leave the field empty . If you want to deploy a codesigned App, which you will need to deploy via Google Play, then you need to generate a proper Certificate. 

##iOS
Apple requires both a Codesigning Certificate and a Mobile Provisioning Profile. You need different ones for development and for App Store deployment.

##Windows
**todo check Windows publisher id**
Windows does not require any certificates to build.

Phonegap have very good documentation on how to generate your keys.

- for Android see [here](http://docs.build.phonegap.com/en_US/signing_signing-android.md.html#Android%20Signing) 
- for iOS see [here](http://docs.build.phonegap.com/en_US/signing_signing-ios.md.html#iOS%20Signing), 



*Note If you do not see anything in the `Keys` area review your `<gap:platforms>` content*