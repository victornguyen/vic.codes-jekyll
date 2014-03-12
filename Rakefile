require 'rubygems'
require 'rake'

task :default => :dev

desc 'Build and start server with --auto'
task :dev do
  sh 'jekyll serve --watch'
end

desc 'Build website'
task :build do
  sh 'jekyll build'
end

desc 'Build website for deployment'
task :deploy do
  sh 'jekyll build'
  sh 'compass compile -e production --force'
  sh 'grunt'
end