'use strict';

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-htmlcompressor');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-svgstore');

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
        files: ['assets/**/*.css'],
        tasks: ['sass:dev'],
        options: {
          livereload: true
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
    },

    svgstore: {
      options: {
        cleanup: ['fill'],
        prefix: 'icon-',
        svg: {
          xmlns:      'http://www.w3.org/2000/svg',
          display:    'none'
        }
      },
      default: {
        files: {
          '_includes/social-icons.svg': ['assets/svg/*.svg']
        }
      }
    }

  });

  // Prod build task
  grunt.registerTask('default', ['htmlcompressor', 'imagemin']);

  // SVG sprite task
  grunt.registerTask('svg', ['svgstore']);

};
