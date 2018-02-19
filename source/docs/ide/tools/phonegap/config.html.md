---
title: The config.xml file
class_name: docs
full_width: true
---

To build apps at Phonegap:Build, a `config.xml` file is required in the root of your project. If one does not yet exist, Codio will ask if you want to create one.

<img alt="authtoken" src="/img/docs/config.png" class="simple"/>

This will create a default file for you and associated image resources for Splash Screen and Icon images in `pg-images` folder.

Your `config.xml` needs to contain specific lines for each platform you want to target. For example, to build for iOS, Android and Windows Phone you need to include

```xml
<gap:platforms>
    <gap:platform name="ios" />
    <gap:platform name="android" />
    <gap:platform name="winphone" />
</gap:platforms>
```

If you only want to build for one platform (for example Android) you would only need to include

```xml
<gap:platforms>
    <gap:platform name="android" />
</gap:platforms>
```

Useful resources and references for the config.xml file can be found on the Phonegap site:

- [config.xml](http://docs.phonegap.com/phonegap-build/configuring/)
- [Custom preferences](http://docs.phonegap.com/phonegap-build/configuring/preferences/)
- [Icons and Splash Screens](http://docs.phonegap.com/phonegap-build/configuring/icons-and-splash/)
- [Phonegap:Build plugins](http://docs.phonegap.com/phonegap-build/configuring/plugins/)
