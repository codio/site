---
title: Start to Finish Tutorial
class_name: docs
full_width: true
---

There is a [video of this tutorial](https://player.vimeo.com/video/79023130?autoplay=1&hd=1) if you prefer watching to reading. It is also a very good showcase for working with Codio and back-end development in general. 

To develop in back end languages like PHP, Node, Ruby or Python 100% in the cloud, all you need is a cloud based server.

One of the best available is DigitalOcean, who offer excellent servers for development purposes starting at just $5 a month.

We'll run through the steps of setting up a Digital Ocean server ready for PHP or Wordpress development.

##Create a Digital Ocean Account
If you already have a remote server created and set up, then you can skip to 'Import a PHP project'.

You create your account DigitalOcean account at http://www.digitalocean.com.

##Create a Droplet (Server)
A Droplet is the name Digital Ocean gives to its cloud servers. You set the following options

- **Hostname**
- **Server size** : the smallest will be fine for development purposes
- **Location** : New York 1 or New York 2 as they are close to the Codio servers, which means you will get maximum speed for deployment operations
- **Image** : In the Image section, select the Application tab. Select **Wordpress on Ubuntu** (you can select any other image or application but use Wordpress to follow the rest of this demonstration). If you are not interested in Node, PHP, Ruby, Python etc. then rather than choosing a Wordpress Application you can select a basic Ubuntu (or other) server instead.
- **SSH Keys** : do NOT select an SSH key so you can follow this demo easily. If you did select an SSH key, you will not be emailed your credentials and you will need to SSH into the server to set a password for the import. We will show you how to install a public key from Codio with a single click in a moment.

Leave the last settings with defaults and press Create.

##Check your email
The DigitalOcean account owner will be sent an email with the root password. You will need these details shortly.

The Droplet creation process take a minute and it should then be ready to SSH into shortly.

In the DigitalOcean Droplets dashboard you should see your newly created server along with its IP address.

##Import your project
As you selected the Wordpress image, an existing Wordpress application will be already present on the server. We will now import this.

1. Log into Codio and from the Dashboard, select Create Project.
1. Enter a project name 'wp-example' or similar
1. Select the (S)FTP tab.
1. Check the SFTP box if you have SFTP access and then enter the IP address and password, which should have been emailed to you. 
1. In the Path field, enter `/home/wordpress/public_html'

Pressing will create will now load the contents of the public_html folder into a new Codio project.  It may take about 90 seconds to import the 16MB or so of data. That is the last slow thing that will happen!

##Set up an SSH Connection
You don't have to do this but for those who want to control their server via a terminal window, it's very handy.

1. Go to the Tools->SSH->Connections Manager menu item
1. Press the Create New button and enter your server details along with a friendly server name that will appear in Codio. Leave the port number empty.
1. Press Save to create the connection. You will now see your server in the SSH Connections list.
1. We'll now copy the Codio public key to the remote server. All you do is press the Key button to the right of your server name. You will be asked to enter the server details again along with the server password. Your Codio user's public key will be automatically transferred and installed on the remote server. This means no more passwords are required when authenticating.
1. Back on the SSH Connections listing, press the Connect button (leftmost) and a new Codio tab will open up and you can now control your server.

##IMPORTANT - Modify the Deployment Target
If you only have FTP access, then please refer to the section on [deploying only specific files](/docs/deployment/specific-files) to avoid deploying your entire project.

However, if you do have SSH access to the remote server (which will be the case if you are using a Digital Ocean server) you should now enable RSYNC. 

Having imported from SFTP, Codio automatically takes the credentials you entered at the import and creates an SFTP Deployment Target for you. This is fine, but RSYNC is a way better deployment type because it only deploys changed files and not the entire project.

1. Select then Tools->Deployment->Manage Targets menu item.
1. You should now see the Default target listed.
1. Press the pencil button to edit it.
1. Change the Destination field from SFTP to RSYNC and press save at the bottom of the form.
1. In the Base Path field, enter the IP address of your remote server. 

##Try a manual deploy

**FTP Users**: if you only have FTP access to the remote server, then right-click a specific file in the file tree or in the tab of an open file and select the Deploy menu option. Refer to [deploying only specific files](/docs/deployment/specific-files) for more information on deploying on specific files rather than the entire project. 

**SFTP/RSYNC Users**: you can quickly test the deployment target by selecting Tools->Deployment->Deploy from the menu. Press the deploy now button. If you did everything right beforehand, you will now see some log output. You will also see the beauty of an RSYNC deploy. All it does at this stage is to synchronize, which is very quick. From now on, everything will be even quicker. This approach will also work for FTP but if you do not use RSYNC, it will deploy your entire project.

If you see any errors at this stage, check the connection details.

##Change some code
Now change some code and let's see just how quick RSYNC works.

1. Open up `license.txt` in the root of the project and make a small change. You can choose any file but you will not do any damage changing a text file.
1. Codio autosaves, so you do not need to explicitly save it.

**RSYNC users**: go back to the Deploy tab (open it up again if you closed it) and press the deploy button again. Now you'll see that it only needs to deploy `license.txt`.

**FTP/SFTP**: right-click in `license.txt` tab or in the file tree and deploy just this file.

Later, if you want to deploy to a different server or location on the same server, simply add a new Deployment Target and deploy in the same way.

Now we'll move on to how you would normally work in development. 

##Deploy & Preview
If you are using an SFTP or FTP deployment target (RYSNC is better) then you should be careful using Deploy & Preview as it will always deploy your entire project first. RSYNC only needs to deploy the modified files.

Working with the Preview button in the menu bar makes the whole [development and preview workflow](/docs/inline-preview) really effortless.

1. Open the `index.php` file in the root of the project
1. Select the dropdown arrow and you will see the Preview options
1. select `Current file (index.php)`
1. Select `Deploy before preview` and you will see the button label changes to `Deploy & Preview`
1. Select `Default Deployment Target` and then in the sub menu, make sure your server is selected (if you have followed this example, there will only be one there); it should have a check mark next to it
1. Press the `Deploy & Preview` button

Now, any files you have changed will be deployed very quickly and then the preview window will appear.

##That's it!
You can now follow this cycle to code, deploy and preview. And you also know how to deploy to staging or production environments using deployment targets.


