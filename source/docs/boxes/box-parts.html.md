---
title: "Box Parts"
class_name: docs
full_width: true
---

Box Parts are a large collection of languages, components, databases and other tools that you can effortlessly install with a single command from the [command line](/docs/boxes/terminal).

Using Box Parts is really easy. To start off with, open up a Terminal window from the 'Tools->Terminal' menu item.

Then, enter `parts` on the command line, you will see something like this

	usage: parts COMMAND [ARGS...]

	Some useful commands are:
	  parts install PACKAGE...   # Install one or many packages
	  parts uninstall PACKAGE... # Uninstall one or many packages
	  parts purge PACKAGE...     # Uninstall and remove leftover data
	  parts list                 # List all installed packages
	  parts search [SEARCH_TERM] # Search for a package or list all 
	  parts start PACKAGE...     # Start one or many services 
	  parts stop PACKAGE...      # Stop one or many services 
	  parts restart PACKAGE...   # Restart one or many services 
	  parts status [PACKAGE...]  # Show status of one or many services 
	  parts update               # Update Box Parts


##Preinstalled
The are a few of the notable things that come preinstalled on a Codio Box

- NodeJS (use nvm; please [refer to this section](/docs/specifics/node) for information on running NodeJS under nvm)
- Ruby (uses rbenv; please [refer to this section](/docs/specifics/ruby) for information on running Ruby under rbenv)
- Python 2.7.3 (Python 3.0 available as Box Part)
- Git, Mercurial and SVN


##The Box Parts Repository
We are continuously updating Box Parts. Box Parts are all stored in a central repository on GitHub. We update this repository regularly and then add the contents to the 'Base Image' that runs in your box. If you see a Box Part in the central [Box Parts Repository](https://github.com/codio/boxparts/tree/master/lib/autoparts/packages), but don't see it when you type `parts search` then run the following to download the repo on to your Box.

	parts update

Regardless of whether we have added a brand new Box Part or have modified an existing one, you should run `parts update` and then `parts install <partname>` to update your Box Part properly.

##Finding Box Parts
You can get a complete list of available Box Parts with the following command in the Terminal

    parts search
    
If you want to use a few characters to narrow the list down, just enter

    parts search php
    
and all parts whose name or description contains 'php' will be listed.

The following list shows just a few of the Parts we currently offer as standard. 

- **Preinstalled Languages** : NodeJS (with nvm), Ruby (with rbenv), Python 2.7.3, Java
- **Languages** Box Parts : PHP5 (Composer Box Part available), Lua, Free Pascal, R, Go, Scala, Haskell
- **Databases** : MongoDB, MySQL, PostgreSQL, Redis, Memcached
- **Web Servers** : Nginx, Apache2
- **System Utilities** : Ack, Ant, cmake, libmcrypt, Maven, The Silver Searcher
- **Other**  : Composer for PHP, many PHP modules, Image Magick, MeteorJS, PhantomJS, Tig

##Requesting Additional Box Parts
Any Codio users can request that the Codio team add additional Box Parts to the standard repository. Once added, it will become a standard item and available to all users.

Codio subscribers will be given preference when it comes to adding new Box Parts.

To request a new Box Part, [create a new issue here](https://github.com/codio/boxparts/issues?page=1&state=open) and we'll get it dealt with as soon as we can.

##Installing Box Parts
You can install one or more Box Parts as follows

	parts install <partname-1> <partname-2> ... <part-name-n>

You will then see the installation taking place in the Console.

##Starting, Stopping and Restarting Services
Once you have installed a component, you may need to start it as a service.

	parts start <package-name>
	parts restart <package-name>
	parts stop <package-name>

and to request the service status, use

	parts status <package-name>
	parts status (lists the status of services provided by all installed packages)

When you close and restart your project (and therefore the Box), you will need to restart your services on restart. This can be done automatically or manually as [described here](/docs/boxes/startup).

##Parts folder and config files
Box Parts installs things in a special location where you have full access and control

	~/.parts

If you take a look inside that folder, you will find everything you are likely to need. Configuration files, for example, live in

	~/.parts/etc

So to configure Apache, you would edit the `~/.parts/etc/apache2/httpd.conf` file (using Nano/Vim).


##Complete List of Parts Supported
This list may not be complete, so type `parts search` to see what we have currently added

- **ack** (2.12) Ack: A tool like grep, optimized for programmers
- **adminer** (4.0.3) Adminer: a full-featured database management tool written in PHP
- **ant** (1.9.4) Ant: A pure Java build tool, simpler and easier to use than GNU Make
- **apache2** (2.4.9) Apache Web Server: A cross-platform open-source HTTP server for modern operating systems
- **apache2_mod_wsgi** (3.4) Apache 2 WSGI module: an Apache module that provides a WSGI compliant interface for hosting Python based web applications within Apache.
- **apr** (1.5.1) Apache Portable Runtime: Software libraries that provide a predictable and consistent interface to underlying platform-specific implementations
- **apr_util** (1.5.3) Apache Portable Runtime Utilities: Utilities that provide a predictable and consistent interface to underlying platform-specific implementations
- **aspcud** (1.9.0-1) Aspcud: an experimental solver for package dependencies. A package universe and a request to install, remove or  upgrade packages have to be encoded in the CUDF format.
- **beanstalkd** (1.9) Beanstalk: A simple, fast work queue.
- **berkeley_db** (6.0.30) Berkeley DB: a software library that provides a high-performance embedded database for key/value data.
- **bison** (3.0.2) Bison: a general-purpose parser generator that converts an annotated context-free grammar into a deterministic LR or generalized LR (GLR) parser employing LALR(1) parser tables.
- **boost** (1.55.0) Boost: a free peer-reviewed portable C++ source libraries.
- **cabal** (1.18.0.2) Cabal: A system for building and packaging Haskell libraries and programs.
- **clasp** (3.0.4) Clasp: an answer set solver for (extended) normal and disjunctive logic programs.
- **cloudfoundry** (v6.0.1) Cloud Foundry: An open CLI for managing cloud services
- **cmake** (2.8.11.2) CMake: A cross-platform, open-source build system
- **composer** (1.0.0-20140724) Composer: PHP5 Dependency management
- **couchdb** (1.5.1) CouchDB: A Database for the Web 
- **ctags** (5.8) Exuberant Ctags: A multilanguage implementation of Ctags 
- **dart** (1.4.3) Dart is a new platform for scalable web app engineering
- **dropbox** (2.6.27) Dropbox: a cloud synchronization service.
- **elasticbeanstalk** (2.6.2-1) Elastic Beanstalk Command Line Tool: A command line client for interacting with the AWS Elastic Beanstalk APIs  
- **elasticsearch** (1.0.0) Elasticsearch: A flexible and powerful open source, distributed, real-time search and analytics engine 
- **elixir** (0.13.1) Elixir: A functional, meta-programming aware language built on top of the Erlang VM
- **enchant** (1.6.0) Enchant: a generic spell checking library. 
- **erlang** (17.0) Erlang is a programming language used to build massively scalable soft real-time systems with requirements on high availability.
- **erlang16** (R16B03-1) Erlang is a programming language used to build massively scalable soft real-time systems with requirements on high availability.
- **fish** (2.1.0) fish: A friendly interactive shell 
- **flex** (2.5.39) Flex: a tool for generating scanners: programs which recognize lexical patterns in text.
- **freepascal** (2.6.2) Free Pascal: An open source Pascal compiler for Pascal and Object Pascal
- **freetype** (2.5.3) Freetype: a freely available software library to render fonts. 
- **fsharp** (3.0) F#: a mature, open source, cross-platform, functional-first programming language which empowers users and organizations to tackle complex computing problems with simple, maintainable and robust code.
- **geos** (3.4.2) GEOS: C++ port of the Java Topology Suite (JTS)
- **ghc** (7.8.3) GHC is a state-of-the-art, open source, compiler and interactive environment for the functional language Haskell
- **gitflow** (0.4.1) Gitflow: a collection of Git extensions to provide high-level repository operations for Vincent Driessen's branching model.
- **glib** (2.40.0) GLib: a general-purpose utility library, which provides many useful data types, macros, type conversions, string utilities, file utilities, a mainloop abstraction, and so on.
- **gmp** (6.0.0) GMP: a free library for arbitrary precision arithmetic, operating on signed integers, rational numbers, and floating-point numbers.
- **go-lang** (1.3) Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.
- **googleappengine** (1.9.5) Google App Engine Python/PHP: A CLI for managing Google App Engine cloud services for Python and PHP
- **googleappenginego** (1.9.5) Google App Engine for Go: A CLI for managing Google App Engine cloud services for Go 
- **googleappenginejava** (1.9.5) Google App Engine Java: A CLI for managing Google App Engine cloud services for Java  
- **googlecloudsdk** (0.9.28) Google Cloud SDK: Tools and libraries to easily create and manage resources on Google Cloud Platform
- **grails** (2.3.7) Grails: an Open Source, full stack, web application framework for the JVM.
- **gringo** (4.3.0) Gringo: a grounder that, given an input program with first-order variables, computes an equivalent ground (variable-free) program.
- **groovy** (2.2.2) Groovy: an agile and dynamic language for the Java Virtual Machine
- **haskell-platform** (2.0.0) Haskell is an advanced purely-functional programming language.
- **heroku-cli** (3.3.0) The Heroku CLI is used to manage Heroku apps from the command line.
- **htop** (1.0.3) Htop: an interactive process viewer for Linux. It is a text-mode application (for console or X terminals) and requires ncurses.
- **image_magick** (6.8.8-9) ImageMagick: a software suite to create, edit, compose, or convert bitmap images.
- **influxdb** (0.5.0) InfluxDB: An open-source distributed time series database 
- **jruby** (1.7.12) jRuby: The Ruby Programming Language on the JVM
- **jython** (2.5.3) Jython: Python for the Java Platform 
- **leiningen** (2.3.2) Leiningen: A build automation and dependency management tool for Clojure
- **leveldb** (1.15.0) LevelDB: A fast and lightweight key/value database library by Google 
- **libffi** (3.0.13) Libffi: A Portable Foreign Function Interface Library
- **libmad** (0.15.1b) MPEG audio decoder library  
- **libmcrypt** (2.5.8) Libmcrypt: A uniform interface to several symmetric encryption algorithms
- **libmemcached** (1.0.18) Libmemcached: an open source C/C++ client library and tools for the memcached server  
- **libpcap** (1.5.3) Libpcap: provides a portable framework for low-level network monitoring. Applications include network statistics collection, security monitoring, network debugging, etc
- **libtool** (2.4.2) libtool: a generic library support script that hides the complexity of using shared libraries behind a consistent, portable interface. 
- **lua** (5.2.2) Lua: A powerful, fast, lightweight, embeddable scripting language
- **mariadb** (5.5.36) MariaDB: An enhanced, drop-in replacement for MySQL.
- **maven** (3.2.1) Maven: A software project management and comprehension tool
- **mc** (4.8.12) GNU Midnight Commander: a visual file manager
- **memcached** (1.4.15) Memcached: An open-source, high-performance memory object caching system 
- **meteor** (0.8.1) Meteor: A real-time web development platform
- **mongodb** (2.6.1) MongoDB: A cross-platform document-oriented NoSQL database system
- **mono** (3.2.8) Mono: a software platform designed to allow developers to easily create cross platform applications. 
- **mysql** (5.6.15) MySQL: The world's most popular open-source relational database
- **ncurses** (5.9) Ncurses: a free software emulation of curses in System V Release 4.0, and more.
- **nginx** (1.4.4) The High Performance Reverse Proxy, Load Balancer, Edge Cache, Origin Server
- **ocaml** (4.01.0) OCaml: an industrial strength programming language supporting functional, imperative and object-oriented styles
- **opam** (1.1.1-20140519) OPAM: a source-based package manager for OCaml.
- **openldap** (2.4.39) OpenLDAP: an open source implementation of the Lightweight Directory Access Protocol.
- **phantomjs** (1.9.7) PhantomJS: A headless WebKit scriptable with a JavaScript API
- **php5** php5 (5.5.15) PHP 5.5: A popular general-purpose scripting language that is especially suited to web development. Prebuild extensions default + mbstring, mysql, sqlite3 and openssl       
- **php5-apache2** (5.5.15) Php5 Apache: a php5 module for apache2.
- **php5-apcu** (4.0.6) PHP APC User Cache  
- **php5-bcmath** (5.5.15) BC Math module for php5
- **php5-bz2** (5.5.15) BZ2 module for php5
- **php5-curl** (5.5.15) curl module for php5 
- **php5-enchant** (5.5.15) enchant module for php5 
- **php5-exif** (5.5.15) Exif module for php5
- **php5-fpm** (5.5.15)  PHP5-FPM: an alternative PHP FastCGI implementation with some additional features (mostly) useful for heavy-loaded sites
- **php5-ftp** (5.5.15) ftp module for php5
- **php5-gd** (5.5.10-2) GD module for php5  
- **php5-imagick** (3.1.2-2) ImageMagick module for php5
- **php5-imap** (5.5.15) IMAP module for php5
- **php5-intl** (5.5.15) Intl module for php5
- **php5-ldap** (5.5.15) ldap module for php5
- **php5-lzf** (1.6.2-2) LZF module for php5
- **php5-memcached** (2.2.0) Memcached module for php5 
- **php5-mongo** (1.5.3) Mongo driver for php5
- **php5-oauth** (1.2.3-2) OAuth module for php5
- **php5-pcntl** (5.5.15) Process Control support module for php5
- **php5-pdo-mysql** (5.5.15) PDO MySql module for php5
- **php5-pdo-pgsql** (5.5.15) PDO PostgreSQL module for php5
- **php5-pgsql** (5.5.15) PostgreSQL module for php5
- **php5-soap** (5.5.15) soap module for php5 
- **php5-sockets** (5.5.15) Sockets module for php5 
- **php5-ssh2** (0.12-2) SSH2 module for php5
- **php5-xdebug** (2.2.4-1) Xdebug module for php5 
- **php5-xsl** (5.5.15) XSL module for php5
- **php5-zip** (5.5.15) zip module for php5
- **php5-zlib** (5.5.15) zlib module for php5 
- **phpmyadmin** (4.1.7) phpMyAdmin is a free software tool written in PHP, intended to handle the administration of MySQL over the Web
- **phppgadmin** (5.1) phpPgAdmin: a web-based administration tool for PostgreSQL.
- **phpunit** (4.0.14) PHPUnit: A programmer-oriented testing framework for PHP.
- **pip** (1.5.4-2) Pip: A tool for installing and managing Python2 packages. Note not required for Python3
- **postgresql** (9.3.4) PostgreSQL: The world's most advanced open-source database system
- **protobuf** (2.5.0) Protocol Buffers: language and platform-neutral mechanism for serializing structured data
- **pypy** (2.2.1) PyPy: A Python interpreter and JIT written in Python
- **python2** (2.7.6-2) Python 2: The most friendly Programming Language
- **python3** (3.4.1-1) Python 3: Next generation of the most friendly Programming Language    
- **r_base** (3.0.3) R: A free software programming language and software environment for statistical computing and graphics
- **rabbitmq** (3.2.3) AMQP server written in Erlang
- **racket** (6.0) Racket: a full-spectrum programming language. It goes beyond Lisp and Scheme with dialects that support objects, types, laziness, and more.
- **re2c** (0.13.6) Re2C: a tool for writing very fast and very flexible scanners. 
- **redis** (2.6.16) Redis: An open-source, in-memory, key-value data store
- **rethinkdb** (1.13) RethinkDB: An open-source distributed database built with love.
- **rust** (0.11.0) Rust: A safe, concurrent, practical language
- **rust-nightly** (0.11.0-05ca9f7_2014-06-24) Rust: A safe, concurrent, practical language
- **s3cmd** (1.0.1-1) s3cmd: Command line tool for managing Amazon S3 and CloudFront services
- **sbt** (0.13.5) Sbt: An interactive build tool for scala  
- **scala** (2.10.3) Scala: An object-functional programming language
- **scons** (2.3.1) SCons: an Open Source software construction tool—that is, a next-generation build tool.
- **setuptools** (2.2-2) Setuptools: Easily download, build, install, upgrade, and uninstall Python packages
- **slang** (2.2.4) Slang: a multi-platform programmer's library designed to allow a developer to create robust multi-platform software.
- **snappy** (1.1.1) Snappy: A fast compression/decompression library 
- **spidermonkey** (1.8.5) SpiderMonkey: Mozilla's JavaScript engine written in C/C++ 
- **sqlite3** (3.8.2) SQLite is an in-process library that implements a self-contained, serverless, zero-configuration, transactional SQL database engine.
- **swig** (2.0.11) Swig: An interface compiler that connects programs written in C and C++ with scripting languages such as Perl, Python, Ruby, and Tcl.
- **tcsh** (6.18.01) tcsh: TENEX C Shell, an enhanced version of Berkeley csh, usable both as an interactive login shell and a shell script command processor      
- **tee-clc** (12.0.0) Command-line Client for Team Foundation Server
- **the_silver_searcher** (0.18.1) The Silver Searcher: A code-searching tool similar to ack, with focus on speed
- **tig** (1.2.1) Tig: An ncurses-based text-mode interface for git
- **tmux** (1.9a) Tmux: a terminal multiplexer that lets you switch easily between several programs in one terminal.
- **tomcat** (7.0.54) Apache Tomcat: an open source software implementation of the Java Servlet and JavaServer Pages technologies.                                  
- **tree** (1.7.0) Tree is a recursive directory listing command
- **virtualenv** (1.11.4-2) Virtualenv: Virtual Python Environment builder 
- **zeromq** (4.0.4) ZeroMQ: A high-performance asynchronous messaging library 
- **zip** (3.0) Zip

