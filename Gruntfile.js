/*jshint node: true */

"use strict";

module.exports = function(grunt) {

  var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    dirs: {
      js: ['app/js/**/*.js', '!app/js/libs/**/*.js'],
      jshint: ['Gruntfile.js','app/js/**/*.js','!app/js/libs/**/*.js'],
      html: ['app/index.html'],
      css: ['app/styles/**/*.css'],
      less: ['app/styles/**/*.less'],
      tests: ['test/**/*.js']
    },
    hbs: {
      templateExtension : 'hbs'
    },
    connect: {
      staticserver: {
        options: {
          hostname: 'localhost',
          port: 8001
        }
      },
      server: {
        options: {
          hostname: '*',
          port: '9000',
          middleware: function() {
            return [proxySnippet];
          }
        },
        proxies: [
          {
            context: '/users',
            host: '99.44.242.76',
            port: 3000,
            rewrite: {
              '/users': '/users.json'
            }
          },
          {
            context: '/',
            host: 'localhost',
            port: 8001
          }
        ]
      }
    },
    watch: {
      options: {
        livereload: true
      },
      gruntfile: {
        files: ['Gruntfile.js'],
        tasks: ['jshint']
      },
      css: {
        files: ['<%= dirs.css %>']
      },
      less: {
        files: ['<%= dirs.less %>'],
        tasks: ['less']
      },
      html: {
        files: ['<%= dirs.html %>']
      },
      js: {
        files:  '<%= dirs.js %>',
        tasks: ['jshint']
      },
      karma: {
        files: ['<%= dirs.js %>', '<%= dirs.tests %>'],
      }
    },
    jshint: {
      gruntfile: 'Gruntfile.js',
      sources: '<%= dirs.jshint %>',
      options: {
        jshintrc: '.jshintrc'
      }
    },
    open: {
      dev : {
        url: 'http://localhost:9000/app'
      },
    },
    less: {
      development: {
        files: {
          'app/styles/app.css': 'app/styles/app.less'
        }
      }
    }
  });

  grunt.registerTask('server', ['less', 'configureProxies:server', 'connect:staticserver', 'connect:server', 'watch', 'open:dev']);
};