---
title: "Adding your own packages"
class_name: docs 
full_width: true
---

## Overview
If you cannot find the software you want to install in the list then you can add your own package to the Install Software list by forking our GitHub repository, making the necessary modifications and finally submitting a pull request.

The repository can be found at [https://github.com/codio/install_software](https://github.com/codio/install_software)

### What is a script?
A script is typically, but not necessarily, a bash script that runs a series of commands as you would on the command line to install or configure software on your Codio box. However, it can be any executable code you choose.

The scripts written by Codio typically use Ansible, a very friendly deployment management system that greatly reduces complexity.

#### `package_list.json`
This is the manifest that lists the entire contents of the publicly available scripts. Each script has an entry in this file and you should add a new item. 

Here's a reminder of the MySQL entry.

```
"mysql": {
  "name": "MySQL",
  "description": "MySQL is an open-source relational database management system (RDBMS)",
  "script": "mysql/install.sh",
  "version": "5.5.49",
  "category": "data_stores"
}
```

Whenever a user loads the Install Software dialog, this Install Software manifest is retrieved from our GitHub repo.

#### `script`
The script is the path, relative to the root of the repo, where the installation script can be found.

#### `category`
You can specify the category that the component belongs to by updating the `category` field. You can choose from one of the following.

```
'data_stores'
'deployment'
'development_tools'
'libraries'
'shells'
'programming_languages'
'utilities'
'web_development'
```

##### Example : MySQL
The following example shows how to install MySQL from the Install Software menu in a few seconds. Try running the MySQL installation on a new box. The MySQL entry in the `package_list.json` file looks like this

```
"mysql": {
  "name": "MySQL",
  "description": "MySQL is an open-source relational database management system (RDBMS)",
  "script": "mysql/install.sh",
  "version": "5.5.49",
  "category": "data_stores"
}
```

You can see the reference to the `mysql/install.sh` script.

##### Bash script
This script calls our standard Ansible loader script, which in turn loads the relevant playbook.

```
#!/bin/bash

bash -c "$(curl -fsSL https://raw.github.com/codio/install_software/master/tools/ansible.sh)" mysql

echo "Mysql password root user password is 'codio'"
```

##### Ansible playbook script
As Ansible makes installations and configurations so easy, we use this to make our lives easier. We could have accomplished the same thing within the main bash script using standard Ubuntu commands but it would be less readable and harder to maintain than using Ansible.

If you are interested in finding out more about Ansible playbooks, [click here](docs.ansible.com).

```
---
- name: Install MySQL
  hosts: 127.0.0.1
  sudo: True
  vars:
    MySQL_root_pass: codio
  tasks:
    - name: Set MySQL root password before installing
      debconf: name='mysql-server' question='mysql-server/root_password' value='{{MySQL_root_pass | quote}}' vtype='password'
    - name: Set MySQL root again password before installing
      debconf: name='mysql-server' question='mysql-server/root_password_again' value='{{MySQL_root_pass | quote}}' vtype='password'
    - name: Install MySQL
      apt: name={{ item }} state=present
      with_items:
        - mysql-server
        - mysql-client
        - python-mysqldb
    - copy: src=my.cnf dest=/home/codio/.my.cnf
```
