---
title: Deploying to Heroku
author: Freddy May
date: 2014-03-10
tags: Changelog
class_name: blog
image: https://d1lpkba4w1baqt.cloudfront.net/heroku-logo-light-300x100.png
full_width: true
---

We've added a new Box Part to make working with Heroku a breeze. Here are the instructions, which you'll also [find in our docs](/docs/boxes/specifics/heroku).

Deploying to Heroku is easy. There are two things you need to know about:

- The [Heroku cli tool](https://devcenter.heroku.com/articles/heroku-command) is available as a Box Part. Type `parts install heroku-cli` from the terminal so you can manage your Heroku apps from the command line.
- Deployment is done using Git. [This article](https://devcenter.heroku.com/articles/git) explains the steps.

##A sample Application
If you want to try it out using a sample application, follow the steps in this section. If you have an application ready to go, skip to the next step section.

1. Create a new project from the Dashboard and paste in this url: `https://github.com/codio/hpdemo-rails.git`.
1. Open up a new terminal window from the `Tools > Terminal` menu.
1. Enter `gem install bundler`.
1. Enter `rbenv rehash`.
1. Enter `bundle install`.
1. Check the project is running by entering `bundle exec rails s`.
1. Check it is running ok by going to the right most menu and selecting 'Box URL' from the menu.
1. You should now see an App running.
1. Ignore any warnings in the terminal window.
1. Kill the Rails server with `Ctrl+C` or close and reopen the terminal window.

##Deploying to Heroku

1. Install the Heroku command line tool with `parts install heroku-cli`.
1. Create a new Heroku app with `heroku create` (you will be required to enter your user name and password).
1. Check the Git remotes with `git remote -v` and you should see something like this (if you created your own app you may not see the 'origin' remote or if you do, it will be another remote).

		heroku  git@heroku.com:fathomless-savannah-8594.git (fetch)
		heroku  git@heroku.com:fathomless-savannah-8594.git (push)
		origin  https://github.com/codio/hpdemo-rails.git (fetch)
		origin  https://github.com/codio/hpdemo-rails.git (push)

1. If you already had a Heroku app set up then you would enter something like `heroku git:remote -a fathomless-savannah-8594` where 'fathomless-savannah-8594' was taken from the Heroku console.
1. We're ready to deploy now with `git push heroku master`.
1. You should see the deployment process taking place. At the end, you will see a URL for you to test it all out.
