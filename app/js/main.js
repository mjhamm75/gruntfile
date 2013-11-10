/*global require:true*/

require.config({
  waitSeconds: 30,
  findNestedDependencies: true
});

require([
  'base.config'
], function() {
// https://github.com/jrburke/requirejs/issues/298#issuecomment-6053007
  "use strict";

  require([
    'jquery',
    'underscore',
    'app',
  ], function($, _, App){
    var app = new App();
    app.initialize();
  });
});