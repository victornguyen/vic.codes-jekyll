'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

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

        watch: {
            sass: {
                files: ['assets/**/*.scss'],
                tasks: ['sass:dev'],
                options: {
                    livereload: true
                }
            }
        },

        sass: {
            options: {
                loadPath: [
                    'components/bourbon/dist',
                    'components/neat/app/assets/stylesheets',
                    'components/meyer-reset/stylesheets'
                ]
            },
            dev: {
                files: {
                    'assets/dist/css/main.css': 'assets/scss/main.scss'
                }
            },
            dist: {
                files: {
                    'assets/dist/css/main.css': 'assets/scss/main.scss'
                },
                options: {
                    style: 'compressed'
                }
            }  
        },

        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'assets/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'assets/dist/img/'
                }]
            }
        }

    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-htmlcompressor');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // Prod build task
    grunt.registerTask('default', ['imagemin', 'sass:dist', 'htmlcompressor']);

};
