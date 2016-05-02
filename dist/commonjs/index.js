"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chartJs = require("./chart-js");

Object.keys(_chartJs).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _chartJs[key];
    }
  });
});
exports.configure = configure;
function configure(aurelia) {
  aurelia.globalResources("./chart-js");
}