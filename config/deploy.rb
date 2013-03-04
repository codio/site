require 'capistrano/ext/multistage'

set :deploy_to, "/home/middleman/crafted-site"
set :application, "crafted-site"
set :scm, :git
set :repository, "git@github.com:codio/site.git"
set :use_sudo, false
set :user, "middleman"

# Setup stages
set :stages, %w(production staging)
set :default_stage, "staging"

set :keep_releases, 3

# Deploys the current branch
set(:current_branch) { `git branch --no-color`.match(/\*\s(.+)\n/)[1] || raise("Couldn't determine current branch") }
set :branch, defer { current_branch } unless exists?(:branch)

after "deploy:restart", "deploy:cleanup"


namespace :deploy do
  task :finalize_update, :except => { :no_release => true } do
    # Do nothing
  end
end