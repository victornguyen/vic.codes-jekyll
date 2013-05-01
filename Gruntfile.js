'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        uglify: {
            deploy: {
                files: {
                    'js/script-create-pages.min.js': ['js/script-create-pages.js']
                }
            }
        },

        cssmin: {
            deploy: {
                files: {
                    'css/style.min.css': ['css/style.css']
                }
            }
        },

        htmlcompressor: {
            deploy: {
                options: {
                    type: 'html',
                    preserveServerScript: true,
                    compressJs: true,
                    compressCss: true
                },
                files: {
                    '_site/index.html': '_site/index.html'
                }
            }
        },

        htmlmin: {
            deploy: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    '_site/index.html': '_site/index.html'
                }
            }
        },

        watch: {
            brochure: {
                files: ['js/script-create-pages.js', 'css/style.css', 'index.src.html', 'Gruntfile.js'],
                tasks: ['default']
            }
        }

    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-htmlcompressor');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', ['htmlcompressor']);

};
