/*jshint node: true */

"use strict";

module.exports = function(grunt) {

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
    connect:{
      development: {
        port: 9000,
        base: 'app',
        keepalive: true,
        livereload: true
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
        url: 'http://localhost:8000/app'
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

  grunt.registerTask('server', ['less', 'connect', 'watch', 'open:dev']);
};