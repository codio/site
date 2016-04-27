---
title: "Coding installable packages"
class_name: docs
full_width: true
---

> **DEPRECATION NOTICE**
>
> This section only concerns G1 (first generation) Boxes. For G2 Boxes, Box Parts is not available, and you should use the [apt](https://help.ubuntu.com/community/AptGet/Howto) package manager.
>
> We are currently rolling out a new generation of Codio Boxes that will provide far greater power and control for you, as well as improved stability. These new Boxes provide full `sudo` (root) access, which means you no longer need to use the Box Parts package management system to install software. Instead, you can use the [apt](https://help.ubuntu.com/community/AptGet/Howto) package manager, which provides thousands of software packages that are maintained by the Ubuntu community.
>
> Second generation projects and stacks are identified with a `G2` label, and we will be gradually updating all our Certified Stacks, Packs and Units to use the G2 platform.

##Overview
If you can't find a ready made Box Part then you can build your own. 

An installable  package is a 'Box Part', built using simple Ruby templates that do not require advanced Ruby knowledge. Your Box Part package defines the following steps

- Package name, source and version
- Compilation
- Installation
- Post installation (for installing databases, setting config files etc.)
- How to start and stop services

Once you publish your package, Codio will approve it and then upload a fully compiled binary into our binary store so the installation process is fast and does not require any source compilation.

Box Parts are Open Source and available to all Codio users, giving a rapidly growing ecosystem of instantly installable stack components. Details of our Box Parts GitHub repo are in the next section.

##Coding Instructions
Once you're ready to start coding your first Box Part package, head to the [Box Parts repo on GitHub](https://github.com/codio/boxparts), where you'll find a fully detailed Guide.

##Simple Box Parts Example
Many Box Parts are rather simple, like this one for the Lua scripting language

```ruby
module Autoparts
  module Packages
    class Lua < Package
      name 'lua'
      version '5.2.2'
      description 'Lua: A powerful, fast, lightweight, embeddable scripting language'
      category Category::PROGRAMMING_LANGUAGES

      source_url 'http://www.lua.org/ftp/lua-5.2.2.tar.gz'
      source_sha1 '0857e41e5579726a4cb96732e80d7aa47165eaf5'
      source_filetype 'tar.gz'

      def compile
        Dir.chdir('lua-5.2.2') do
          execute 'make', 'linux'
        end
      end

      def install
        Dir.chdir('lua-5.2.2') do
          execute 'make', 'install', "INSTALL_TOP=#{prefix_path}", "INSTALL_MAN=#{man_path}/man1"
        end
      end
    end
  end
end
```

##MySQL Box Parts Example
Here's the MySQL Box Parts, which is at the advanced end of the scale.

```ruby
module Autoparts
  module Packages
    class MySQL < Package
      name 'mysql' # The name of your Box Part (lower case)
      version '5.6.13' # Version of the component that will be  installed.

      # A free text description of the Box Part
      description "MySQL: The world's most popular open-source relational database"

      # Include a category for your part. A list of categories can be found at
	  # https://github.com/codio/boxparts/blob/master/lib/autoparts/category.rb
      category Category::DATA_STORES

      # The url of the source archive
      source_url 'http://dev.mysql.com/get/Downloads/MySQL-5.6/mysql-5.6.13.tar.gz'

      # The sha1 hash. If it is not provided by the host, download the
      # archive and run `sha1sum filename` to obtain this.
      source_sha1 '06e1d856cfb1f98844ef92af47d4f4f7036ef294'

      # source_filetype is used to determine how to extract the package.
      # Currently, variations of 'tar.gz' and 'zip' are supported. 
      # Other filetypes are simply copied over without extraction.
      source_filetype 'tar.gz'

      ## Dependencies
      #
      # Include any Box Part dependencies for this part.
      # Any dependencies will be installed before proceeding.
      # If a dependency doesn't exist as a Box Parts package, you'll
      # need to add them as a separate package.
      depends_on 'php5' 
      # ^^ Not actually needed for MySQL, but added as an example.

      ## Installation
      #
      # At this step the archive from the `source_url` is downloaded, and the
      # sha1 hash is checked. Box Parts creates a temporary directory where the
      # archive is unpacked.
      def compile
        Dir.chdir('mysql-5.6.13') do
          args = [
            '.',
            "-DCMAKE_INSTALL_PREFIX=#{prefix_path}",
            "-DDEFAULT_CHARSET=utf8",
            "-DDEFAULT_COLLATION=utf8_general_ci",
            "-DINSTALL_MANDIR=#{man_path}",
            "-DINSTALL_DOCDIR=#{doc_path}",
            "-DINSTALL_INFODIR=#{info_path}",
            "-DINSTALL_MYSQLSHAREDIR=#{share_path.basename}/#{name}",
            "-DMYSQL_DATADIR=#{Path.var}/mysql",
            "-DSYSCONFDIR=#{Path.etc}",
            "-DWITH_READLINE=yes",
            "-DWITH_SSL=yes",
            "-DWITH_UNIT_TESTS=OFF"
          ]

          # The 'execute' command runs a shell command in any of these ways
          # execute 'ls -al'
          # execute 'command', arg1, arg2, ... ,argN
          # execute 'command' *arg (where are is an array as shown above)
          execute 'cmake', *args
          execute 'make'
        end
      end

      # This is the main installation step
      # It changes directory just for the duration of the 'do ... end' block
      # Having changed directory, the contents of the block is executed
      def install
        Dir.chdir('mysql-5.6.13') do
          execute 'make install'
          execute 'rm', '-rf', mysql_server_path
          execute 'ln', '-s', "#{prefix_path}/support-files/mysql.server", "#{bin_path}/"
          execute 'rm', '-rf', "#{prefix_path}/data"
          execute 'rm', '-rf', "#{prefix_path}/mysql-test"
        end
      end

      ## Post Install
      #
      # This is the method that gets called after binary/source is fully installed
      # It's used to do any post installation setup (e.g. initializing a default db)
      # The archived file in ~/.parts/archives/ may be left in directory 
      # for future re-installs
      def post_install
        unless (mysql_var_path + 'mysql' + 'user.frm').exist?
          mysql_var_path.rmtree if mysql_var_path.exist?
          ENV['TMPDIR'] = nil
          args = [
            "--basedir=#{prefix_path}",
            "--datadir=#{mysql_var_path}",
            "--tmpdir=/tmp",
            "--user=#{user}",
            '--verbose'
          ]
          execute "scripts/mysql_install_db", *args
        end
      end

      # In Ruby, if no return value is explcitly specified, then the last line
      # executed is automatically the returned value
      def mysql_executable_path
        Path.bin + 'mysql'
      end

      # Implements the 'parts purge' command to remove a Box Part
      def purge
        mysql_var_path.rmtree if mysql_var_path.exist?
      end

      def mysql_server_path
        bin_path + 'mysql.server'
      end

      def mysql_var_path
        Path.var + 'mysql'
      end


      ## Starting and Stopping the part
      #
      # Some parts run as a service. If your part needs to run in the background
      # then you will need to implement start and stop commands.
      def start
        execute mysql_server_path, 'start'
      end

      def stop
        execute mysql_server_path, 'stop'
      end

      # If using start and stop commands, include a 'running?' method.
      # For non Ruby-ists, the !! forces a boolean result
      def running?
        !!system(mysql_server_path.to_s, 'status', out: '/dev/null', err: '/dev/null')
      end

      ## Tips
      # If you want to print out any messages after the part has been installed
      def tips
        <<-STR.unindent
          To start the server:
            $ parts start mysql

          To stop the server:
            $ parts stop mysql

          To connect to the server:
            $ mysql
        STR
      end
    end
  end
end
```
