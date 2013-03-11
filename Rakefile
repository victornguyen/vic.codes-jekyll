require 'rubygems'
require 'rake'

task :default => :server

desc 'Build and start server with --auto'
task :server do
  sh 'jekyll --server --auto'
end

desc 'Build website'
task :build do
  sh 'jekyll'
end