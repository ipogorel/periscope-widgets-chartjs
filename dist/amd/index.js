define(["exports", "./bar-chart"], function (exports, _barChart) {
  "use strict";

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
    aurelia.globalResources("./bar-chart");
  }
});