---
title: "Codio LTI App"
class_name: docs
full_width: true
---

The **Codio LTI app** allows an easy way to integrate Codio with supported LMS systems.

Please note these steps and images are based on Canvas but other LMS systems will be similar

## Preparation
The following steps need to be taken only one time per class.

### In Codio

- Go to your organization account settings by clicking on your user name in the bottom left of your dashboard and then selecting your organization within **My Organizations**.
- Select the **Organization Settings** near the top of the page.
- Scroll down to the **LTI Integration** section. You should see the following fields. Remain on this screen for the time being.

<img alt="LTI Fields" src="/img/docs/lti/lti-org-fields.png" class="simple"/>

### In Canvas
The Canvas user who carries out these steps must be a system administrator.

- Create a new Course in your LMS system. We suggest you create a test course called **Codio Test Course** before you do it with a production course.
- Select the Course.
- Click on **Settings** in the left set of options.
- In the top links, select **Apps**.
- Click the large button **View App Configurations**.
- Click on the **View App Center** button.

<img alt="appcenter" src="/img/docs/lti/appcenter.png" class="simple"/>

- Navigate (or filter) to find the **Codio** app, select and **+ Add App**

### In Codio and Canvas
We will now copy the following global integration fields from Codio to Canvas.

- LTI Consumer -> Consumer Key
- LTI Secret -> Shared Secret

and select the **Add App** button to confirm.
You should then have something similar to this:

<img alt="appconfigured" src="/img/docs/lti/appsetup.png" class="simple"/>



### Class URL

The **Class URL** is used to map an LMS course to a Codio class. It ensures that Codio knows how to redirect students back to the correct course should they attempt to access the class through the Codio dashboard.

The LMS user who carries out these steps does not need to be a system administrator but must have suitable privileges to edit courses and assignments.

- In Codio, go to the **Admin** tab near the top.
- Select **Edit Details** in the bottom of the page.
- Near the bottom is a switch **Enable LTI** which you should enable.
- Below this is an empty field **Class LMS URL**. Switch back to your LMS and make sure you are on the Home page of the course. Copy the url in the address bar of your browser to the clipboard and paste it into the above mentioned field in Codio.

<img alt="lti-class-url" src="/img/docs/lti/lti-class-url.png" class="simple"/>

### Mapping Codio units to Canvas unit/assignment
The **Unit URL** is where you map each individual Unit within your Codio Class to the corresponding unit/assignment in your LMS.  

Where you have enabled the Codio LTI App in your LMS system, you can easily integrate units from your Codio class.

- Go to your Canvas Course and to **Pages** to add a new page,
- Click the Codio icon that will be available

<img alt="codioicon" src="/img/docs/lti/codioicon.png" class="simple"/>

- A list of the Codio class contents will be shown, simply select the unit(s) you wish to add to Canvas and Save

<img alt="classunits" src="/img/docs/lti/classunits.png" class="simple"/>

The assignment(s) and course will need to be published before students will be able to access them 

For other methods to integrate Codio with LMS systems, check out the pages that follow