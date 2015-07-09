---
title: "Heroku"
class_name: docs
full_width: true
---

Deploying to Heroku is easy. There are two things you need to know about

- the [Heroku cli tool](https://devcenter.heroku.com/articles/heroku-command) is available as a Box Part. Type `parts install heroku-cli' from the terminal so you can manage your Heroku apps from the command line.
- deployment is done using Git. [This article](https://devcenter.heroku.com/articles/git) explains the steps.

##Run Through
These steps should guide you through the process.

###A sample Application
If you want to try it out using a sample application, follow the steps in this section. If you have an application ready to go, skip to the next step section.

- Grab this repo : https://github.com/codio/hpdemo-rails.git
- Create a new project from the Dashboard and paste in this url : [https://github.com/codio/hpdemo-rails.git](https://github.com/codio/hpdemo-rails.git)
- Open up a new terminal window from the Tools>Terminal menu
- Enter `gem install bundler`
- Enter `rbenv rehash`
- Enter `bundle install`
- Enter `rbenv rehash` again
- Check the project is running by entering `rails s`
- Check it is running ok by going to the right most menu and selecting 'Box URL' from the menu
- You should now see an App running
- Ignore any warnings in the terminal window
- Kill the Rails server with ctrl+c or close and reopen the terminal window

###Deploying to Heroku

- Install the Heroku command line tool with `parts install heroku-cli`
- Create a new Heroku app with `heroku create` (you will be required to enter your user name and password)
- Check the Git remotes with `git remote -v` and you should see something like this (if you created your own app you may not see the 'origin' remote or if you do, it will be another remote)

		heroku  git@heroku.com:fathomless-savannah-8594.git (fetch)
		heroku  git@heroku.com:fathomless-savannah-8594.git (push)
		origin  https://github.com/codio/hpdemo-rails.git (fetch)
		origin  https://github.com/codio/hpdemo-rails.git (push)

- If you already had a Heroku app set up then you would enter something like `heroku git:remote -a fathomless-savannah-8594` where 'fathomless-savannah-8594' was taken from the Heroku console.

- We're ready to deploy now with `git push heroku master`
- You should see the deployment process taking place. At the end, you will see a url for you to test it all out.


