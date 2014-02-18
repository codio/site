set :stage, :production
set :bundle_bins, fetch(:bundle_bins, []).push('middleman')

server 'web1.int.codio.com', user: 'deploy', roles: %w{web app db}
server 'web2.int.codio.com', user: 'deploy', roles: %w{web app db}


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
