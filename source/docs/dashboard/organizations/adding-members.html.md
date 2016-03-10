---
title: Adding users to your Organization
class_name: docs
full_width: true
---

To manually add Codio users to your organization

1. Open the Organizations up (click on your username and go to the Overview tab).
1. Select your Organization from the list (there is probably only one there).
1. `Members` should already be selected above the list.
1. Click on the appropriate Permanent Member Group available for the user you are adding.
1. Add the Codio user (you can search by Codio user name or full name, if they entered one).


Alternatively, go to `Organisation Settings` area and create an invitation token

![Organisations Token](/img/docs/organisations_token.png)

If using the **Invite URL** option, send the generated link out to all users who you wish to include in your organisation and they will be automatically added. If they do not already have a Codio account, they will be taken through the sign up process and then added to your organisation.

If using the **Invite Token** option, send that out to users you wish to add as a Teacher or Owner to your Organisation. As they sign up to Codio, registering as a 'Teacher' they will then be shown the option to either Create an Organisation or Join an existing Organisation. Advise them to use the Join Organisation option where they can then enter in this 2 word password to be added in automatically.  Once they have done this, they can then be added as a Teacher to your classes (see [Adding Teachers](/docs/dashboard/classes/class-teachers/)) or as an Owner to your Organisation where they then have the rights to also create and manage classes as well.

### Upload Users
You can also upload your own CSV files to create user accounts and add users to your Organisation as well as to create classes. 

Go to the `Upload Users` tab and select the `Begin New Upload` button

![Upload Users](/img/docs/organisation_upload.png)

The file should be a CSV file that can contain the following details: Email (required), First Name, Last Name, Class.

- If your CSV file includes Column names in the first row (as defined above), the order is not important but if your file does not contain the Column names in the first row the order of the content is important.
- If you wish to minimize the chances of conflicts with existing usernames from other users accounts, enable the `Prefix Usernames` option and you can then enter a short value. The username (which will be formed from the first character of the firstName and the complete lastName) will be prefixed with this value.
- If your CSV file includes a `Class`, this will be created for you if it does not already exist. If the class already exists (please note case is important), the users will be added to that class for you.
- Select the group you wish to add these users to.

When you then `Upload & Preview` you will be shown a preview of the details to be uploaded where you can then edit/remove or even add new users to the list prior to completing the upload and they will receive an email with instructions on how to proceed. If there are any problems identified these will be shown to you.

As the users complete the process, they will then be added to your Member group (and class if this is included in the csv file).
