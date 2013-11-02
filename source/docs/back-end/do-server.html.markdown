---
title: Creating a Cloud Server
class_name: docs
full_width: true
---

To develop in back end languages like PHP, Node, Ruby or Python 100% in the cloud, all you need is a cloud based server.

One of the best available is DigitalOcean, who offer excellent servers for development purposes starting at just $5 a month.

We'll run through the steps of setting up a Digital Ocean server ready for PHP or Wordpress development.

##Create a Digital Ocean Account
You create your account DigitalOcean account at http://www.digitalocean.com.

##Create a Droplet
A Droplet is a cloud server. You simply set the following options

- **Hostname**
- **Server size** : the smallest will be fine for development purposes
- **Location** : New York 1 or New York 2 as they are close to the Codio servers, which means you will get maximum speed for deployment operations
- **Image** : In the Image section, select the Application tab. Select **Wordpress on Ubuntu** (you can select any other image or application but use Wordpress to follow the rest of this demonstration). If you are not interested in PHP then follow the steps in principle and it should be clear what you need to do for other stack configurations.
- **SSH Keys** : do NOT select an SSH key so you can follow this demo easily. If you did select an SSH key, you will not be emailed your credentials and you will need to SSH into the server to set a password for the import. We will show you how to install a public key from Codio with a single click in a moment.

Leave the last settings with defaults and press Create.

##Check your email
The DigitalOcean account owner will be sent an email with the root password. You will need these details shortly.

The Droplet creation process take a minute and it should then be ready to SSH into shortly.

In the DigitalOcean Droplets dashboard you should see your newly created server along with its IP address.

##Import a PHP project
As you selected the Wordpress image, an existing Wordpress application will be already present on the server. We will now import this.

- Log into Codio and from the Dashboard, select Create Project.
- Enter a project name 'wp-example' or similar
- Select the (S)FTP tab.
- Check the SFTP box and then enter the IP address and password, which should have been emailed to you.
- In the Path field, enter `/home/wordpress/public_html'

Pressing will create will now load the contents of the public_html folder into a new Codio project.  It may take about 90 seconds to import the 16MB or so of data. That is the last slow thing that will happen!

##Set up an SSH Connection
You don't have to do this but for those who want to control their server via a terminal window, it's very handy.

- Go to the Tools->SSH->Connections Manager menu item
- Press the Create New button and enter your server details along with a friendly server name that will appear in Codio. Leave the port number empty.
- Press Save to create the connection. You will now see your server in the SSH Connections list.
- We'll now copy the Codio public key to the remote server. All you do is press the Key button to the right of your server name. You will be asked to enter the server details again along with the server password. Your Codio user's public key will be automatically transferred and installed on the remote server. This means no more passwords are required when authenticating.
- Back on the SSH Connections listing, press the Connect button (leftmost) and a new Codio tab will open up and you can now control your server.

##Modify the Deployment Target
Having imported from SFTP, Codio automatically takes the credentials you entered at the import and creates an SFTP Deployment Target for you. This is fine, but RSYNC is a way better deployment type because it only deploys changed files and not the entire project.

- Select then Tools->Deployment->Manage Targets menu item.
- You should now see the Default target listed.
- Press the pencil button to edit it.
- Change the Destination field from SFTP to RSYNC and press save at the bottom of the form.
- In the Base Path field, enter the IP address of your remote server. 

##Change some code
Now we will change some code. 

- Open up `license.txt` in the root of the project and make a small change. You can choose any file but you will not do any damage changing a text file.
- Codio autosaves, so you do not need to explicitly save it.

##Deploy changes
There are two ways to deploy your code. 

- **Development** - when you are in development mode, TODO
- **Production Deployment** - you can set up multiple deployment targets so when you're ready you can do a full deploy to a production server. We will not cover this here. Refer to the [Deployment section](/docs/deployment) for full details on general deployment.









