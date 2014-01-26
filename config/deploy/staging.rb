set :stage, :staging

server 'ec2-54-198-198-236.compute-1.amazonaws.com', user: 'deploy', roles: %w{web app db}
