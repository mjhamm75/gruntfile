define(function() {

  "use strict";

  require.config({
    //urlArgs: "bust=timestamp",
    hbs : {
      templateExtension : 'hbs',

      disableHelpers: true,

      // `true` it won't load locales and the i18n helper won't work
      disableI18n : true
    },

    shim: {
      'underscore': {
        exports: '_'
      },
      // 'underscoreStrings': {
      //   exports: '_.str'
      // },
      'backbone': {
        deps: [
          'underscore',
          'underscoreStrings',
          'jquery'
        ],
        exports: 'Backbone'
      },
      // 'bootstrap': {
      //   deps: [
      //     'jquery'
      //   ],
      //   // http://stackoverflow.com/a/13556882/945794
      //   exports: "$.fn.popover"
      // },
      // 'acknowledge': {
      //   deps: [
      //     'jquery',
      //     'bootstrap'
      //   ],
      //   exports: "$.fn.popover"
      // },
      // 'chosen': {
      //   deps: [
      //     'jquery'
      //   ],
      //   exports: "$.fn.chosen"
      // },
      // 'moment': {
      //   exports: 'moment'
      // },
      // 'daterangepicker': {
      //   deps: [
      //     'jquery',
      //     'moment'
      //   ],
      //   exports: "$.fn.daterangepicker"
      // },
      // 'postmessage': {
      //   exports: "ZXD"
      // },
      // 'hbs/json2' : {
      //   exports: "JSON"
      // },
      // 'backboneCache': {
      //   deps: [
      //     'underscore',
      //     'backbone'
      //   ],
      //   exports: "backboneCache"
      // },
      // 'md5': {
      //   exports: '$.md5'
      // },
      // 'base64': {
      //   exports: '$.base64'
      // },
      // 'tickboxes': {
      //   exports: '$.fn.tickbox'
      // },
      // 'radio': {
      //   exports: '$.fn.radio'
      // },
      'jqueryMockAjax': {
        exports: '$.mockjax',
        deps: ['jquery']
      }
      // 'jquery.ui.widget': {
      //   deps: [
      //     'jquery'
      //   ],
      //   exports: '$.fn.widget'
      // },
      // 'fileupload': {
      //   deps: [
      //     'jquery',
      //     'jquery.ui.widget'
      //   ],
      //   exports: '$.fn.fileupload2'
      // },
      // 'fileuploadiframe': {
      //   deps: [
      //     'jquery',
      //     'fileupload'
      //   ],
      //   exports: '$.fn.fileuploadiframe'
      // },
      // 'bootstrap.fileupload': {
      //   deps: [
      //     'jquery',
      //     'bootstrap'
      //   ],
      //   exports: '$.fn.fileupload'
      // },
      // 'angular': {
      //   exports: 'angular'
      // },
      // 'angularCookies': [ 'angular' ],
      // 'angularResource': [ 'angular' ],
      // 'angularRoute': [ 'angular' ],
      // 'angularSanitize': [ 'angular' ]
    },

    paths: {

      jquery: 'libs/jquery/jquery',
      jqueryMockAjax: 'libs/jquery-mockjax/jquery.mockjax',
      underscore: 'libs/underscore/underscore',
      // underscoreStrings: 'foundation/js/libs/underscore.string-2.3.0',
      backbone: 'libs/backbone',
      // bootstrap: 'foundation/js/libs/bootstrap-2.3.1',
      // acknowledge: 'foundation/js/libs/bootstrap-acknowledgeinput.min-0.4',
      // chosen: 'foundation/js/libs/chosen.jquery-0.9.13',
      // tickbox: 'foundation/js/libs/availity.tickbox',
      // radio: 'foundation/js/libs/availity.radio',
      Handlebars : 'foundation/js/libs/handlebars',
      // moment: 'foundation/js/libs/moment-2.0.0.min',
      // daterangepicker: 'foundation/js/libs/daterangepicker-1.1',
      // postmessage: 'subscriptions/js/libs/postmessage',
      // backboneCache: 'foundation/js/libs/backbone-fetch-cache-0.1.11',
      // base64: 'foundation/js/libs/jquery.base64-0.0.1',
      // md5: 'foundation/js/libs/md5-1.0.1',
      // 'jquery.ui.widget': 'foundation/js/libs/jquery.ui.widget',
      // fileupload: 'foundation/js/libs/jquery.fileupload',
      // fileuploadiframe: 'foundation/js/libs/jquery.iframe-transport',
      // 'bootstrap.fileupload': 'foundation/js/libs/bootstrap-fileupload',

      // Angular stuff
      // angular: 'foundation/js/libs/angular',
      // angularCookies: 'foundation/js/libs/angular-cookies',
      // angularResource: 'foundation/js/libs/angular-resource',
      // angularRoute: 'foundation/js/libs/angular-route',
      // angularSanitize: 'foundation/js/libs/angular-sanitize',

      // environment: 'foundation/js/settings/',

      text: 'libs/text',
      hbs: 'libs/hbs',
      // 'hbs/underscore' : 'foundation/js/libs/underscore-1.3.3',
      // 'hbs/i18nprecompile' : 'foundation/js/libs/i18nprecompile',
      // 'hbs/json2' : 'foundation/js/libs/json2',
    }
  });
});