set :stage, :production

server 'web1.int.codio.com', user: 'deploy', roles: %w{web app db}
server 'web2.int.codio.com', user: 'deploy', roles: %w{web app db}


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
