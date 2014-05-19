 <gap:platforms>
      <gap:platform name="ios" />
      <gap:platform name="android" /> 
      <gap:platform name="winphone" />
     </gap:platforms>---
title: Config
class_name: docs
full_width: true
---

To build apps at Phonegap:Build a config.xml file is required.
If one does not exist in your project, Codio can create one for you

![config](/img/docs/config.png)

This will create a default file for you and associated image resources for Splash Screen and Icon images in `pg-images` folder

Your config.xml needs to contain specific lines for each platform you want to build for. For example, to build for iOS, Android and Windows Phone you need to include

    <gap:platforms>
      <gap:platform name="ios" />
      <gap:platform name="android" /> 
      <gap:platform name="winphone" />
     </gap:platforms>

If you only want to build for one platform (for example Android) you would only need to include

    <gap:platforms>
        <gap:platform name="android" />
     </gap:platforms>



Useful resources and references for the config.xml file can be found at Phonegap site:

- [config.xml](http://docs.build.phonegap.com/en_US/configuring_basics.md.html#The%20Basics)
- [Custom preferences](http://docs.build.phonegap.com/en_US/configuring_preferences.md.html#Preferences)
- [Icons and Splash Screens](http://docs.build.phonegap.com/en_US/configuring_icons_and_splash.md.html#Icons%20and%20Splash%20Screens)
- [Phonegap:Build plugins](http://docs.build.phonegap.com/en_US/configuring_plugins.md.html#Plugins)

