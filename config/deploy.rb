set :application, 'codio-site'
set :repo_url, 'git@github.com:codio/site.git'
set :branch, proc { `git rev-parse --abbrev-ref HEAD`.chomp }

set :deploy_to, '/mnt/acv2/site'
set :scm, :git

namespace :deploy do
  after :finishing, 'deploy:cleanup'
end
