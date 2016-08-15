'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _barChart = require('./bar-chart');

Object.keys(_barChart).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _barChart[key];
    }
  });
});
exports.configure = configure;

require('./periscope-widget-chartjs.css!');

var _periscopeFramework = require('periscope-framework');

function configure(aurelia) {
  var pf = aurelia.container.get(_periscopeFramework.PeriscopeFactory);
  pf.addReference(_barChart.BarChart);
  aurelia.globalResources("./bar-chart");
}