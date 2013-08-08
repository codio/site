---
title: FTP Target Type
class_name: docs
full_width: true
---

The FTP target type allows you to deploy to any FTP server. You supply the usual FTP access details.

![targets history](/img/docs/deploy-ftp.png)

##Specifying a Port
If you want to override the default FTP port (21) then you can add the port number to the domain name as shown below

	mydomain.com:1234 

##Transfer Mode
FTP can operate in 'Active' or 'Passive' mode. Codio will attempt to connect in passive mode by default. If it fails, then it will automatically try active mode. If that fails then you will get an error.

However, if you get an error then try changing the setting to Active. This will ensure that Codio will only try to connect in active mode without a risk of confusing the target server.


