require 'rubygems'
require 'rake'
require 'html-proofer'

task :default => :dev

desc 'Build and start server with watch'
task :dev do
  sh 'jekyll serve'
end

desc 'Build website'
task :build do
  sh 'jekyll build'
end

desc 'Build website for deployment'
task :deploy do
  sh 'jekyll build'
  HTMLProofer.check_file("./_site/index.html").run
end
