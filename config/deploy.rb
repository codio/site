set :application, 'codio-site'
set :repo_url, 'https://github.com/codio/site.git'
set :branch, proc { `git rev-parse --abbrev-ref HEAD`.chomp }

set :deploy_to, '/var/www/codio/site'
set :scm, :git


namespace :middleman do
  task :build do
    on roles(:all) do |host|
      within release_path do
        execute :rm, '-rf', 'build'
        execute :bundle, :exec, :middleman, :build
      end
    end
  end
end

after 'deploy:updated', 'middleman:build'
