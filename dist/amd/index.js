define(["exports", "./chart-js"], function (exports, _chartJs) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_chartJs).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _chartJs[key];
      }
    });
  });
  exports.configure = configure;
  function configure(aurelia) {
    aurelia.globalResources("./chart-js");
  }
});