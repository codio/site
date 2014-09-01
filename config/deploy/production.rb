set :stage, :production
set :bundle_bins, fetch(:bundle_bins, []).push('middleman')

role :webserver, %w{ web3.int.codio.com web4.int.codio.com }, user: 'capistrano'


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
