set :stage, :staging
set :deploy_to, '/home/middleman/codio-site'

server 'ec2-184-72-144-200.compute-1.amazonaws.com', user: 'middleman', roles: %w{web app db}


Rake::Task["bundler:map_bins"].clear
Rake::Task["bundler:install"].clear