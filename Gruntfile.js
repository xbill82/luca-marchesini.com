module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['web-dev/js/app/**/*.js']
    },
    requirejs: {
      build: {
        options: {
          appDir: "web-dev",
          mainConfigFile: "web-dev/js/app/config/Init.js",
          dir: "web",
          optimize: "uglify",
          optimizeCss: "standard",
          done: function(done, output) {
            var duplicates = require('rjs-build-analysis').duplicates(output);

            if (duplicates.length > 0) {
              grunt.log.subhead('Duplicates found in requirejs build:');
              grunt.log.warn(duplicates);
              done(new Error('r.js built duplicate modules, please check the excludes option.'));
            }

            done();
          },
          modules: [
            {
              name: "config/Main",
              include: [
                "jquery", 
                'backbone', 
                'marionette', 
                'underscore', 
                'handlebars', 
                "bootstrap", 
                "App", 
                "routers/AppRouter", 
                "controllers/Controller", 
                "handlebars-helpers-my",
                'lazyloader'
              ]
            },
            {
              name: "views/home/HomeLayout",
              include: [
                'views/home/HomeCalendarView', 
                'views/home/HomeShowsView',
                "views/home/HomeClaimsView",
                'text!templates/home.html'
              ],
              exclude: ['config/Main']
            },
            {
              name: "views/show/ShowLayout",
              include: [
                'views/show/ShowCalendarView',
                'text!templates/show.html',
              ],
              exclude: ['config/Main']
            },
            {
              name: "views/calendar/CalendarLayout",
              include: [
                'views/calendar/OldGigsView',
                'views/calendar/UpcomingGigsView',
                'text!templates/calendar.html',
              ],
              exclude: ['config/Main']
            },
            {
              name: "views/guestbook/GuestbookLayout",
              include: [
                'views/guestbook/ClaimsView',
                'views/guestbook/SubmitClaimView',
                'text!templates/guestbook.html'
              ],
              exclude: ['config/Main']
            }
          ]
        }
      }
    },
    bower: {
      install: {
        options: {
          targetDir: 'web-dev/lib',
          layout: 'byType',
          install: true,
          verbose: false,
          cleanTargetDir: false,
          cleanBowerDir: false,
          bowerOptions: {}
        }
      }
    },
    imagemin: {
      build: {                         // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'web-dev/img/',                   // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'web/img/'                  // Destination path prefix
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('install', ['bower']);
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('build', ['jshint', 'requirejs', 'imagemin']);
};