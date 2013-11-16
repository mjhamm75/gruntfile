define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var testTemplate = require('hbs!app.templates/test');

  var TestView = Backbone.View.extend({
    template: testTemplate,

    initialize: function() {
      // debugger;
      console.log("Test View");
    }
  });
  return TestView;
});