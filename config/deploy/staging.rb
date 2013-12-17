set :stage, :staging

server 'ec2-23-20-204-239.compute-1.amazonaws.com', user: 'codiosite', roles: %w{web app db}
