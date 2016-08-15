'use strict';

System.register(['./bar-chart', './periscope-widget-chartjs.css!', 'periscope-framework'], function (_export, _context) {
  var PeriscopeFactory, BarChart;
  return {
    setters: [function (_barChart) {
      BarChart = _barChart.BarChart;
      var _exportObj = {};

      for (var _key in _barChart) {
        if (_key !== "default") _exportObj[_key] = _barChart[_key];
      }

      _export(_exportObj);
    }, function (_periscopeWidgetChartjsCss) {}, function (_periscopeFramework) {
      PeriscopeFactory = _periscopeFramework.PeriscopeFactory;
    }],
    execute: function () {
      function configure(aurelia) {
        var pf = aurelia.container.get(PeriscopeFactory);
        pf.addReference(BarChart);
        aurelia.globalResources("./bar-chart");
      }

      _export('configure', configure);
    }
  };
});