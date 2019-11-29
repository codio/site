---
title: "LTI Keys and URLs"
class_name: docs
full_width: true
---

**LTI Keys** are used to integrate your LMS to Codio. These keys are required by your LMS administrator one time only so that Codio can be added as an LTI provider. Once Codio has been added as an LTI provider, you will not need them again and the remaining actions can be completed by LMS users who have Teacher/Instructor permissions.

**Class and Unit URLs** will be copied and pasted into your LMS system, once for the LMS class/course and once for each LMS unit/assignment.

We have platform specific integration documentation for the following LMS platforms, although for most LMS systems you should be able to utilise the **[Codio LTI App](/docs/classes/lti/ltiapp)**

- [Canvas](/docs/classes/lti/canvas)
- [Blackboard](/docs/classes/lti/blackboard)
- [Moodle](/docs/classes/lti/moodle)

### LTI Keys

LTI keys are accessible to [Codio Organization Owners](/docs/dashboard/create/addowners/) only. 

To find these keys:

- Go to your organization account settings by clicking on your user name in the bottom left of your dashboard and then selecting your organization within **My Organizations**.
- Select the **LTI Integrations** tab.
- Scroll down to the **LTI Integration 1.0** section. You should see the following fields.


<img alt="lti-keys" src="/img/docs/lti/lti-org-fields.png" class="simple"/>

### Class URL

The **Class URL** is used to map an LMS course to a Codio class. It ensures that Codio knows how to redirect students back to the correct course should they attempt to access the class through the Codio dashboard.

The LMS user who carries out these steps does not need to be a system administrator but must have suitable privileges to edit courses and assignments.

- In Codio, go to the **Admin** tab near the top.
- Select **Edit Details** in the bottom of the page.
- Near the bottom is a switch **Enable LTI** which you should enable.
- Below this is an empty field **Class LMS URL**. Switch back to your LMS and make sure you are on the Home page of the course. Copy the url in the address bar of your browser to the clipboard and paste it into the above mentioned field in Codio.

<img alt="lti-class-url" src="/img/docs/lti/lti-class-url.png" class="simple"/>

### Unit URL

Please be sure to check out the [Codio LTI App](/docs/classes/lti/ltiapp) which allows for an easy way to integrate and to map Codio class units to your LMS system.

If you are unable to utilise the Codio LTI App, the **Unit URL** is where you map each individual Unit within your Codio Class to the corresponding unit/assignment in your LMS. It directs a student to the correct Codio unit and will automatically open the Codio unit.

- On the main class screen, click the icon with 3 blue dots and select **LTI Integration URL**.
- You should copy the LTI integration url to the clipboard by clicking on the field (it will auto copy).


<img alt="authtoken" src="/img/docs/lti/LMS-Unit-URL.png" class="simple"/>

- Complete the mapping in your LMS.

<a name="exportlti"></a>

### Exporting LTI settings

The LTI integration URLs for the units in a class can be exported.

- Select the class, go to the Admin area and then press the **Export LTI Settings** button.

<img alt="Export LTI" src="/img/docs/class_lti_export.png" class="simple"/>

