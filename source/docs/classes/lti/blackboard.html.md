---
title: "Blackboard"
class_name: docs
full_width: true
---

Please be sure to check out the [Codio LTI App](/docs/classes/lti/ltiapp) which allows for an easy way to integrate and to map Codio class units to your LMS system.

## Preparation
The following steps need to be taken only one time per class.

### In Codio

- Go to your organization account settings by clicking on your user name in the bottom left of your dashboard and then selecting your organization within **My Organizations**.
- Select the **Organization Settings** near the top of the page.
- Scroll down to the **LTI Integration** section. You should see the following fields. Remain on this screen for the time being.

<img alt="LTI Fields" src="/img/docs/lti/lti-org-fields.png" class="simple"/>


### In Blackboard
The Blackboard user who carries out these steps must be a Blackboard system administrator.

- Create a new Course in Blackboard. We suggest you create a test course called **Codio Blackboard** before you do it with a production course.
- Look for the **System Admin** tab near the top right of the page and select it.
- Look for the **Building Blocks** section and select it.
- Click on **LTI tool providers**.
- Click on **Register Provider Domain** in the menu bar.
- In the **Provider Domain** field, enter `apollo.codio.com`.
- In the **Default Configuration** section, set **Default Configuration** to be **Set globally**.
- In the **Organization Policies** section you should 
  - set **Send User Data** to **Send user data only over SSL**.
  - in **User Fields to Send** you should set all 3 fields (Constituency in Course, Name, Email Address).

### In Codio and Blackboard
Now return to the **Default Configuration** section in Blackboard. We will now copy the following global integration fields from Codio to Blackboard.

- LTI Consumer -> Tool Provider Key
- LTI Secret -> Tool Provider Secret


## Codio Class setup
You need to perform the following actions one time only for a class. The Blackboard user who carries out these steps does not need to be a system administrator but must have suitable privileges to edit courses and assignments.

- Create a new class and name it **Blackboard Demo**.
- In the main class screen, click on the **Admin** tab near the top.
- Select **Edit Details** in the bottom of the page.
- Near the bottom is a switch **Enable LTI** which you should enable.
- Below this is an empty field **Class LMS URL**. Switch back to Blackboard and make sure you are on the main the Codio Blackboard course you created earlier. Copy the url in the address bar of your browser to the clipboard and paste it into the above mentioned field in Codio.

This URL ensures that Codio knows how to redirect students back to the correct Blackboard course should they attempt to access the class through their dashboard.

## Mapping a Unit to Blackboard Content
The final mapping step needs to be taken for each individual Unit within Codio. It maps a piece of Blackboard content to a Codio Unit.

### In Codio

- On the main class screen, make sure the **Units** tab is selected.
- Click the **+** button and select **Add Project**. 
- Select a project that has some autograded assessments. The **My First Project** that you created earlier in the Onboarding Guide has some auto-graded assessments. You can also assign another project but you will need to manually grade the Unit so there are some scores to pass back to the Blackboard gradebook.
- Once the Unit has been added to the class, you should click the icon with 3 blue dots and select **LTI Integration URL**.
- You should copy the LTI integration url to the clipboard by clicking on the field (it will auto copy).

<img alt="Unit URL" src="/img/docs/lti/LMS-Unit-URL.png" class="simple"/>


### In Blackboard
We now return to Blackboard complete the mapping.

- Make sure you have selected the Blackboard course.
- Click **Content** in the left hand menu.
- Select or hover over **Build Content** in the menu bar
- Select **Web Link**.
- In the **Web Link Information** section ...
  - Enter a name for the content
  - Paste in the **LTI Integration URL** that you just copied to the clipboard from Codio
  - Check the box **Ths is a link to a tool provider**
  - Select **Yes** for the field **Enable Evaulation** after which more fields will appear
  - Set the points you want to award for this content (Codio will automatically scale the percentage value it uses to the points you specify here)
  - Save the content settings.


## Adding faculty and students
The final step is to add students to your course. This is done from the People tab. We recommend that you add the same test students to Blackboard that you have in Codio. The only field of data that needs to match is the email address. So, look up the Codio test student email addresses and add them to Blackboard in the student role.

Next, you should login to Blackboard as a test student and start the assignment. Please read on to see what happens next, which is dependent.

**IMPORTANT** : when you access Codio from Blackboard, this user will become the dominant Codio user in the browser. This means that if you have a Codio session open (say you are logged in as faculty) and open some content from Blackboard as a student, the old Codio session will be invalidated. To get around this, you should think about running your teacher account in a separate browser type or in an incognito window. Just be aware of this when testing.

### Single sign-in and account creation
It is important to understand how Codio maps Blackboard users to Codio users. The following rules should be understood. If students or faculty access Codio via a Blackboard assignment then Codio will use the Blackboard email address to identify the user. 

- If the user is not known to Codio then we will sign up the user as a new Codio user in the background and take the user directly into the Codio content. The Blackboard user role will be carried over as well.
- If the user is known to Codio then Codio will take them directly into the Codio content without any sign-in required. If they are a Codio user but are not a member of your organization then they will be required to complete a verification via email. 

## Generating scores
You should now generate some scores to pass back to Codio. You can do either of the following.

- If your assigned Codio Unit has some autograded assessments (simple MCQs will do fine) then access the Codio content as students as answer the questions to generate a score
- You can also manually grade the student Unit in Codio. You will need to enter a percentage value here as the LMS/LTI interface requires this.

## Releasing grades
By default, grades in Codio are neither passed back to the student nor to Blackboard until they are 

- Marked as complete by either the student or the teacher and
- the **Release Grades** switch is enabled.

Once **Release Grades** is enabled, all completed student assignments are automatically sent through. 

<img alt="Release Grades" src="/img/docs/lti/release-complete.png" class="simple"/>

There are various ways to mark a student's work as complete

- The student can do this from either the classroom dashboard or from the **Education->Mark as Complete** menu in the assignment itself.
- The teacher can do the same in the unit when [viewing students code](/docs/classes/monitor/studentcode/)
- The teacher can do the same from the Unit in the classroom dashboard by hovering in the left side of a student entry and then setting the completed switch.
- The teacher can mark all student assignments as completed in one action. This is done by 
  - selecting the Unit in the classroom
  - pressing the **Action** button 
  - pressing the **Mark all as Completed** button

**Important** : If you are running a staging or test Blackboard environment then you must have a valid SSL certificate on your Blackboard server otherwise grades will not be pass back to Blackboard successfully.

