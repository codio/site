---
title: Codio Target Type
class_name: docs
full_width: true
---

**Important** : deploying to the Codio production target type will require a paid plan. We will announce details ahead of the commercial launch.  

Here are some things to note about the Codio target

- Ideal for static web sites and content
- Great for web application front-ends
- There is no admin or command line access to the servers

The actual content actually resides on Amazon S3 servers and is therefore very scalable and redundant.

##What about the back end?
If you are building a solution that requires the back end as well, then you have plenty of options

- Use Parse.com as a great back end. You can edit all your code in Codio still and deploy it using the [Parse.com target type](/docs/deployment/type-parse/). The back end code you write is Javascript.
- Write Javascript code in Codio and deploy to the Nodejitsu servers. We have a special Nodejitsu target type.
- Handle your back end in any other way you like and simply use REST or other API calls to access it.

**Important:** please be sure understand the importance of the Source Location (are you deploying a Project, an App or a Directory). [Read about it here](/docs/deployment/create/).


