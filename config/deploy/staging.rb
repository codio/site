set :stage, :staging
server 'web1.int.codio.com', user: 'deploy', roles: %w{web app db}
