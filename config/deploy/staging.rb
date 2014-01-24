set :stage, :staging

server 'ec2-50-17-35-156.compute-1.amazonaws.com', user: 'codiosite', roles: %w{web app db}
