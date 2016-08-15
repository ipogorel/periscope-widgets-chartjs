define(['exports', './bar-chart', 'periscope-framework', './periscope-widget-chartjs.css!'], function (exports, _barChart, _periscopeFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_barChart).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _barChart[key];
      }
    });
  });
  exports.configure = configure;
  function configure(aurelia) {
    var pf = aurelia.container.get(_periscopeFramework.PeriscopeFactory);
    pf.addReference(_barChart.BarChart);
    aurelia.globalResources("./bar-chart");
  }
});