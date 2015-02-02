module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['web-dev/js/app/**/*.js']
    },
    clean: ["web"],
    requirejs: {
      build: {
        options: {
          appDir: "web-dev",
          mainConfigFile: "web-dev/core/app/config/Init.js",
          dir: "web",
          optimize: "uglify",
          optimizeCss: "none",
          inlineText: true, // inline templates in concatenated module
          preserveLicenseComments: true, // used for legal reasons
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
                "bs-button",
                "bs-collapse",
                "bs-dropdown",
                "bs-modal",
                "bs-transition",
                "App",
                "routers/AppRouter",
                "controllers/Controller",
                "controllers/AnalyticsController",
                "controllers/GoogleAnalyticsController",
                "handlebars-helpers-my",
                // 'lazyloader'
              ]
            },
            {
              name: "views/home/HomeLayout",
              include: [
                'views/calendar/RecentUpcomingGigsView',
                'views/show/ShowsListView',
                "views/guestbook/PicksView",
                'text!views/home/templates/home.html'
              ],
              exclude: ['config/Main']
            },
            {
              name: "views/show/ShowLayout",
              include: [
                'views/calendar/GigsListReduced',
                'text!views/show/templates/show.html',
              ],
              exclude: ['config/Main']
            },
            {
              name: "views/calendar/CalendarLayout",
              include: [
                'views/calendar/OldGigsView',
                'views/calendar/UpcomingGigsView',
                'text!views/calendar/templates/calendar.html',
              ],
              exclude: ['config/Main']
            },
            {
              name: "views/guestbook/GuestbookLayout",
              include: [
                'views/guestbook/ClaimsView',
                'views/guestbook/SubmitClaimView',
                'text!views/guestbook/templates/guestbook.html'
              ],
              exclude: ['config/Main']
            }
          ]
        }
      }
    },
    less: {
      install: {
        options: {
          compress: false,
          cleancss: true,
          paths: ['bower_components/bootstrap/less/']
        },
        files: {
          "web-dev/styles/main.css": "web-dev/styles/less/main.less",
        }
      },
      build: {
        options: {
          compress: true,
          cleancss: true,
          paths: ['bower_components/bootstrap/less/']
        },
        files: {
          "web/styles/main.css": "web-dev/styles/less/main.less",
        }
      },
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
    uncss: {
      build: {
        options: {
          stylesheets: [
            'lib/css/bootstrap/bootstrap.min.css',
            'lib/css/bootstrap/bootstrap-theme.min.css',
            'css/main.css'
          ],
          urls: [
            'http://localhost:8888/luca-marchesini.com/web-dev/',
            'http://localhost:8888/luca-marchesini.com/web-dev/#calendar',
            'http://localhost:8888/luca-marchesini.com/web-dev/#guestbook',
            'http://localhost:8888/luca-marchesini.com/web-dev/#show/sorcieres',
            'http://localhost:8888/luca-marchesini.com/web-dev/#show/lucavidesonsac',
            'http://localhost:8888/luca-marchesini.com/web-dev/#show/europe',
            'http://localhost:8888/luca-marchesini.com/web-dev/#show/abrazos',
            'http://localhost:8888/luca-marchesini.com/web-dev/#show/talaya',
            'http://localhost:8888/luca-marchesini.com/web-dev/#show/marsala',

          ],
          // media: ['(min-width: 700px) handheld and (orientation: landscape)'],
          timeout: 1000,
          ignore: [
            // Collapse and dropdown menu
            '.open>.dropdown-menu',
            '.collapsing',
            '.navbar-collapse.in',
            '.collapse.in',
            '.navbar-default .navbar-nav>.open>a, .navbar-default .navbar-nav>.open>a:hover, .navbar-default .navbar-nav>.open>a:focus',
            '.nav .open>a, .nav .open>a:hover, .nav .open>a:focus',
            '.navbar-nav .open .dropdown-menu',
            '.navbar-default .navbar-nav .open .dropdown-menu>li>a',

            // Modals
            '.modal-open',
            '.modal-open .modal',
            '.fade.in',

            // Customs
            '#gig-modal .modal-body',
            '#gig-modal .hidden-address',
            '#gig-modal .hidden-address-message',
            '#gig-modal dt',
            '#gig-modal .gig-map',
            '#gig-modal .fa',
          ]
        },
        src: ['web-dev/index.html',
          // 'web-dev/js/app/templates/templates/404.html',
          // 'web-dev/js/app/templates/templates/calendar.html',
          // 'web-dev/js/app/templates/templates/footer.html',
          // 'web-dev/js/app/templates/templates/guestbook.html',
          // 'web-dev/js/app/templates/templates/header.html',
          // 'web-dev/js/app/templates/templates/home.html',
          // 'web-dev/js/app/templates/templates/nav.html',
          // 'web-dev/js/app/templates/templates/show.html',
        ],
        dest: 'web-dev/css/main.min.css',
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-less');
  // grunt.loadNpmTasks('grunt-uncss');

  grunt.registerTask('install', ['bower', 'less']);
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('build', ['clean', 'jshint', 'requirejs', 'less']); //, 'imagemin'
};