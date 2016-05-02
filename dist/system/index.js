"use strict";

System.register(["./chart-js"], function (_export, _context) {
  return {
    setters: [function (_chartJs) {
      var _exportObj = {};

      for (var _key in _chartJs) {
        if (_key !== "default") _exportObj[_key] = _chartJs[_key];
      }

      _export(_exportObj);
    }],
    execute: function () {
      function configure(aurelia) {
        aurelia.globalResources("./chart-js");
      }

      _export("configure", configure);
    }
  };
});