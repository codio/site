---
title: School setup
description: "Getting started"
class_name: docs
full_width: true
---

Getting started with Codio is very easy. Just follow the steps below.

## Student Setup

1. Go to `Organisation Settings` area and create an invitation token.
1. Send the generated link out to all Students who you wish to include in your organisation and they will be automatically added. (If they do not already have a Codio account, they will be taken through the sign up process and then added to your organisation).

![Organisations Token](/img/docs/organisations_token.png)

1. Once they are logged in, they should press the 'Modules' button in the left hand menu.
1. The 'Recommended' tab should automatically be selected and they can then proceed to a module you advise them to look at.
1. They will see the Module modules in the correct order. They can press 'Start Module' to open it up.
1. They can then follow the Guide instructions and get going.

When students leave the Guide and return to the main Codio dashboard, they will see the projects list. Any opened modules will be visible there, so they they don't have to return to the Modules screen to access them again unless they want to start a new module.


## Additional Teacher Setup
Normally, the first teacher to sign up to Codio should have created an Organization when they signed up. If you're not sure about this please do the following.

1. In the very bottom left of the Codio Dashboard, you will find and click the Organizations icon.
<img alt="authtoken" src="/img/docs/org-button.png" class="simple"/>
1. If there is no Organization created for your school, you should create one now by pressing the Education button. If there is an organization in the list with the name of your organization there, then you can stop here.
1. Press the 'Create  Organization' button and complete the fields.

Assuming your Organization is now created, other teachers can sign up in the exact same way as the Students. You will be able to add them to your Organization as a teacher as explained in the section below.

## Organization Management
You should make sure that your students and teachers are all added to your Organization in Codio. There are two ways to do this.

### Manually
If you already have students and teachers who have created Codio accounts, you should make sure you add them to your Organization.

- Go to `Organisation Settings` area and create an invitation token.
- Send the generated link out to all who you wish to include in your organisation and they will be automatically added. (If they do not already have a Codio account, they will be taken through the sign up process and then added to your organisation).

Alternatively

- For students, click on 'Students' group and then locate the Student by name or user id.
- For teachers, do the same, but select the 'Teachers' group.

### Upload Users
You can also upload your own CSV files to create student and/or teacher accounts and also to create classes. Most schools have MIS systems that allow this data to be easily exported.

Go to the `Upload Users` tab and select the `Begin New Upload` button

![Upload Users](/img/docs/organisation_upload.png)

The file should be a CSV file that can contain the following details: email (required), firstName, lastName, class.

- If your CSV file includes Column names in the first row (as defined above), the order is not important but if your file does not contain the Column names in the first row the order of the content is important.
- If you specify usernames in the upload file for your students/teachers and wish to minimize the chances of conflicts with existing user accounts, enable the `Prefix Usernames` option and you can then enter a short value. The username will be prefixed with this value.
- If your CSV file includes a `class`, this will be created for you if it does not already exist. If the class already exists (please note case is important), the students/teachers will be added to that class for you.
- Select the group you wish to add these users to.

When you then `Upload & Preview` you will be shown a preview of the details to be uploaded where you can then edit/remove or even add new students/teacher to the list prior to completing the upload and they will receive an email with instructions on how to proceed. If there are any problems identified these will be shown to you.

As the students/teachers complete the process, they will then be added to your group (and class if included in the csv file).


## Teacher Support Functionality
We have now released a comprehensive set of features that allow teachers to fully manage their student classes and access student code.

We are releasing new functionality at the end of July that will handle the following

- automatically mark student code tests and display the results in the teacher dashboard
- monitor student progress and time spent on each Unit
- before the end of August we will also be releasing the following automarked assessments : multiple choice questions, fill in the blank questions, ability to insert Articulate tests
- before the end of August we will also be introducing the ability for manual teacher marking of student code projects

Below are a couple of screenshots to give you a taste of what is around the corner.

![](/img/docs/education/class-dash-1.jpg)
![](/img/docs/education/class-dash.jpg)
![](/img/docs/education/class-marks.jpg)
