---
title: Custom script
class_name: docs
full_width: true
---

To integrate third-party systems to help/track students, custom scripts can be enabled.

Enabling this will allow third-party systems (such as [sense.network](/docs/content/authoring/assessments/assessments-sense-network) to help/track students.

In all cases, the `userid`,`email` and the user type (Student/Teacher) will be passed.

If required by the third-party system used, custom js code can be included in the **Custom Script** section. 

Any such code should be entered without script tags.

e.g.

```javascript
var http = new XMLHttpRequest();
var url = 'https://userdomain/url'; //Change to valid URL for your third-party system
var params = 'userId=' + codio.userId ;
http.open('POST', url, true);
http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
    }
}
http.send(params);
```
You can also add `console.log` entries to be able to test/view output

e.g.
```javascript
console.log('params', codio);
console.log('params', window);
console.log('params', document)
console.log(window.codio.currentPage)
console.log(window.codio.totalNumberOfPages)
```

<img alt="Custom script" src="/img/docs/manage_organization/customscript.png" class="simple"/>

If you require any assistance with this, please don't hesitate to [contact us](/docs/dashboard/support/) in the usual manner.
