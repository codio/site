---
title: "Canvas"
---

## Preparation
The following steps need to be taken only one time per class.

### In Codio

- Go to your organization account settings by clicking on your user name in the bottom left of your dashboard and then selecting your organization within **My Organizations**.
- Select the **Organization Settings** near the top of the page.
- Scroll down to the **LTI Integration** section. You should see the following fields. Remain on this screen for the time being.

<img alt="authtoken" src="/img/docs/lti/lti-org-fields.png" class="simple"/>


### In Canvas
The Canvas user who carries out these steps must be a system administrator.

- Create a new Course in Canvas. We suggest you create a test course called **Codio Canvas** before you do it with a production course.
- Select the Course.
- Click on **Settings** in the left set of options.
- In the top links, select **Apps**.
- Click the large button **View App Configurations**.
- Click on the blue **+ App** button.

### In Codio and Canvas
We will now copy the following global integration fields from Codio to Canvas.

- LTI Consumer -> Consumer Key
- LTI Secret -> Shared Secret
- LTI URL -> Launch URL

In Canvas you should then 

- Enter a suitable name (Codio Canvas LTI) in the **Name** field.
- Enter **apollo.codio.com** into the **Domain** field.
- In the **Privacy** field, select **Public**

You should end up with something like this.

<img alt="authtoken" src="/img/docs/lti/canvas-global.png" class="simple"/>

## Codio Class setup
You need to perform the following actions one time only for a class. The Canvas user who carries out these steps does not need to be a system administrator but must have suitable privileges to edit courses and assignments.

- In Codio, create a new class and name it **Canvas Demo**.
- Click on the **Admin** tab near the top.
- Select **Edit Details** in the bottom of the page.
- Near the bottom is a switch **Enable LTI** which you should enable.
- Below this is an empty field **Class LMS URL**. Switch back to Canvas and make sure you are on the Home page of the course. Copy the url in the address bar of your browser to the clipboard and paste it into the above mentioned field in Codio. The url format should end with something like `/courses/1121212` although the number will be different.

This URL ensures that Codio knows how to redirect students back to the correct Canvas course should they attempt to access the class through their dashboard.

## Mapping a Unit to a Canvas Assignment
The final mapping step needs to be taken for each individual Unit within Codio. It maps a Canvas assignment to a Codio Unit.

### In Codio

- On the main class screen, make sure the **Units** tab is selected.
- Click the **+** button and select **Add project as Unit**. 
- Select a project that has some autograded assessments. The **My First Project** that you created earlier in the Onboarding Guide has some auto-graded assessments. You can also assign another project but you will need to manually grade the Unit so there are some scores to pass back to the Canvas gradebook.
- Once the Unit has been added to the class, you should click the icon with 3 blue dots and select **LTI Integration URL**.
- You should copy the LTI integration url to the clipboard by clicking on the field (it will auto copy).

<img alt="authtoken" src="/img/docs/lti/LMS-Unit-URL.png" class="simple"/>

### In Canvas
We now return to Canvas complete the mapping.

- Make sure you are in the Courses area. 
- Click on the **Assignments** link in the left hand side.
- Provide a name for the Assignment.
- Set the points for the Assignment. When the grades get passed back later, the Codio percentage score will be scaled to the points value you specify here.
- Scroll down and look for the **Submission Type** field.

<img alt="authtoken" src="/img/docs/lti/canvas-submission-type.png" class="simple"/>


- You should now click on the dropdown list and select "External Tool".
- In the new set of fields that appear, paste the Codio **LTI Integration URL** field into the url field in Canvas.
- Select **Load This Tool In a New Tab**.
- Click the **Save and Publish** button.
- Make sure the Canvas course is published.

## Adding faculty and students
The final step is to add students to your course. This is done from the People tab. We recommend that you add the same test students to Canvas that you have in Codio. The only field of data that needs to match is the email address. So, look up the Codio test student email addresses and add them to Canvas in the student role.

When you add a student in Canvas you will need to confirm from the email you are sent. **Important** : make sure you log out of your teacher based Canvas session before doing this.

Next, you should login to Canvas as a test student and start the assignment. Please read on to see what happens next, which is dependent.

**IMPORTANT** : when you access Codio from Canvas, this user will become the dominant Codio user in the browser. This means that if you have a Codio session open (say you are logged in as faculty) and you start an assignment from Canvas as a student, the old Codio session will be invalidated. To get around this, you should think about running your teacher account in a separate browser type or in an incognito window. Just be aware of this when testing.

### Single sign-in and account creation
It is important to understand how Codio maps Canvas users to Codio users. The following rules should be understood. If students or faculty access Codio via a Canvas assignment then Codio will use the Canvas email address to identify the user. 

- If the user is not known to Codio then we will sign up the user as a new Codio user in the background and take the user directly into the Codio content. The Canvas user role will be carried over as well.
- If the user is known to Codio then Codio will take them directly into the Codio content without any sign-in required. If they are a Codio user but are not a member of your organization then they will be required to complete a verification via email. 

## Generating scores
You should now generate some scores to pass back to Codio. You can do either of the following.

- If your assigned Codio Unit has some autograded assessments (simple MCQs will do fine) then access the Codio content as students as answer the questions to generate a score
- You can also manually grade the student Unit in Codio. You will need to enter a percentage value here as the LMS/LTI interface requires this.

## Releasing grades
By default, grades in Codio are neither passed back to the student nor to Canvas until they are 

- Marked as complete by either the student or the teacher and
- the **Release Grades** switch is enabled.

Once **Release Grades** is enabled, all completed student assignments are automatically sent through. 

<img alt="authtoken" src="/img/docs/lti/release-complete.png" class="simple"/>

There are various ways to mark a student's work as complete

- The student can do this from either the classroom dashboard or from the **Education->Mark as complete** menu in the assignment itself.
- The teacher can do the same from the Unit in the classroom dashboard by hovering in the left side of a student entry and then setting the completed switch.
- The teacher can mark all student assignments as completed in one action. This is done by 
  - selecting the Unit in the classroom
  - pressing the **Action** button 
  - pressing the **Mark all as completed** button
