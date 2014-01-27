# config valid only for Capistrano 3.1
lock '3.1.0'

set :application, 'codio-site'
set :repo_url, 'https://github.com/codio/site.git'
set :branch, proc { `git rev-parse --abbrev-ref HEAD`.chomp }

set :deploy_to, '/var/www/codio/site'
set :scm, :git
