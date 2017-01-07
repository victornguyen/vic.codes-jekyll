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
  HTML::Proofer.new("./_site/index.html", {
    :only_4xx => true,
    :check_html => true,
    :empty_alt_ignore => true
  }).run
end
