set :stage, :test
set :bundle_bins, fetch(:bundle_bins, []).push('middleman')

server 'ec2-23-21-27-222.compute-1.amazonaws.com', user: 'capistrano', roles: %w{web app db}

namespace :middleman do
  task :build do
    on roles(:all) do |host|
      within release_path do
        execute :rm, '-rf', 'build'
        execute :middleman, :build
      end
    end
  end
end

after 'deploy:updated', 'middleman:build'
