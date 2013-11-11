define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var TestView = require('views/test.view');

  var Router = Backbone.Router.extend({
    routes: {
      "": "list"
    },

    list: function() {
      $('#app').html('<div>Hello World</div>');
      new TestView();
    }
  });

  return Router;
});