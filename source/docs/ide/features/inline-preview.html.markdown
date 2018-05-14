---
title: "Preview"
class_name: docs
full_width: true
---

It is important to understand the difference between Static and Dynamic content when using the Preview menu options. Codio provides a configurable menu item for Dynamic/Server Side content (rightmost Codio menu) as well as Static content.

### Static content
You can use **Preview static** options on Static content only (HTML, CSS, JS and text).
You can also preview static content on your mobile device easily using **Project>QR Code for Preview URL** to generate a QR code you can scan with a QR Reader on your device.

### Dynamic content
To access files or services that are executed on the server (PHP, Ruby, Node etc.), you need to use the right-most menu option. You can access your server side application by:

- word1-word2-port.codio.io which will access your box over port 80, which is useful if your corporate firewall blocks ports other than 80 and 443.



`word1-word2` is an automatically generated subdomain name for your Codio Box. You can configure your application to listen on ports defining the port in the URL, but please be aware than Codio supported a restricted range of ports. Please refer to [this section](/docs/ide/boxes/ext-access) for more details.

Read on for information on how to configure your Static and Dynamic preview menus.

## Instructions
The Preview button lets you preview one or more web pages with a simple button press. Codio creates four default entries in the Preview menu automatically.

<img alt="authtoken" src="/img/docs/preview-deploy.png" class="simple"/>


- **Project Index** - this is the default file to run for your project. It can be set by right-clicking a file in the file tree. This option should only be used to preview static content (typically `.html` files). For PHP, Ruby etc. you should use the **Box URL** option.
- **Current File** - whichever code file currently has focus. This option should only be used to preview static content (typically `.html` files). For PHP, Ruby etc. you should use the **Box URL** option.
- **Box URL** - use this option for previewing PHP, Ruby or other server side languages over http. [Click here](/docs/ide/boxes/ext-access) for more information on configuring port access for http.
- **Box URL SSL** - use this option for previewing PHP, Ruby or other server side languages over SSL. [Click here](/docs/ide/boxes/ext-access) for more information on configuring port access for https.


If you right-click a file in the file tree or the Tab, you can also select **Preview Static**.

<img alt="authtoken" src="/img/docs/preview-deploy-right-click.png" class="simple"/>


## Preview in a Codio tab or new browser tab
In the Preview dropdown menu, you can select one of the following ways to preview

- **Inside Codio** : displays the preview in a Codio tab; note that if you are accessing via any port other than Port 80 (the Box URL and Box URL SSL defaults in the screenshot at the top) then this option will only work if you are using HTTPS as Codio itself runs over HTTPS and the browser will not allow mixed HTTP/HTTPS. [See here](/docs/ide/boxes/access/ext-access) for more details on using HTTPS.
- **New browser tab** : it will open up a new browser tab or window.

If you are previewing a private project containing Static content and you have not enabled **Allow Private Static Preview** option (available only via **Project>Settings**) you will be asked to authenticate with your username and password. If you signed up using GitHub/BitBucket/G+ method, a random password is created for your account. Go to **Codio>Account** and on the Account tab you can set up a password of your own choosing.

If though you have enabled this option, then you can preview static content without authentication. A new backend URL will be generated for this purpose that you can then share with anyone else you wish to be able to preview your project. You are also able to regenerate this URL at any time and access using the old URL will no longer function.

This only applies to code being previewed over the standard ports 80 and 443. Previewing via any other port will have no authentication, because the code is being served from your application server, which we have no control over but you can add your own authentication.

See [Apache Password Basic Authentication](https://wiki.apache.org/httpd/PasswordBasicAuth) and [HTTP Authentication with PHP](http://php.net/manual/en/features.http-auth.php) for some examples.

## Modifying the Preview menu
You are free to customize the menu in either of the following ways

- From the **Preview** or **Run** drop down menus (the 2nd and 3rd right most Codio menu items), select **Configure...**
- If it exists already, open the `.codio` file that lives in the root of your project.

For details about the various tokens that can be inserted, please refer to **[Customizing the Run menu](/docs/ide/boxes/runmenu/)**.

`{{domain3000}}` is the most important token for the **Preview menu**. It is replaced by the public url required to access your project over port 80, which is useful if your corporate firewall blocks ports other than 80 and 443.
`{{domain}}` can also be used in the **Preview** menu. In most cases you will want to add the Port number (default 3000) to your service. e.g ` "Box URL": "http://{{domain3000}}/",`


```json
{
// Configure your Run and Preview buttons here.

// Run button configuration
  "commands": {
        "Node version": "node --version"
  },

// Preview button configuration
  "preview": {
        "Project Index (static)": "https://{{domain}}/{{index}}",
        "Current File (static)": "https://{{domain}}/{{filepath}}",
        "Box URL": "http://{{domain3000}}/",
        "Box URL SSL": "https://{{domain3000}}/"
  }
}
```

Note that static content is served over Port 80. To access dynamic content you may need to specify the appropriate Port.

If you cannot access your project over SSL then this could be the way your application is configured.

The full range of Codio `{{tokens}}` is explained in [this section](/docs/ide/boxes/runmenu#tokens).

## Insecure Content with In-Tab preview and front-end code (#mixed-content)
Codio runs over a secure connection using HTTPS, and therefore so does the inline preview. If your code references an external resource (script, font, image, etc.). For example:

```html
<script src="http://code.angularjs.org/1.1.5/angular.js">
```

You will get a browser error indicating that there is some form of insecure or mixed content because you are running in a mixed HTTP/HTTPS mode. This is a restriction of the browser, and cannot be modified easily, or in some browsers, it cannot be modified at all. It is intended to protect you from insecure content.

There are 3 ways to avoid this:

- Modify your external references to use HTTPS.
- Expand the inline preview into a new browser tab (icon is in the small floating toolbar in the top right of the preview tab) and then modify the url from `https://codio.io/xxxx` to `http://codio.io/xxxx`.
- Modify your references to use the 'current protocol' by including '//' without http or https, so `<script src="//code.angularjs.org/1.1.5/angular.js">`.
- If none of the above work, then download the external file, and include and reference it within the Codio project itself.
