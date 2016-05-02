define(['exports', 'periscope-framework', 'lodash'], function (exports, _periscopeFramework, _lodash) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ChartJs = undefined;

  var _ = _interopRequireWildcard(_lodash);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var ChartJs = exports.ChartJs = function (_Chart) {
    _inherits(ChartJs, _Chart);

    function ChartJs(widget) {
      _classCallCheck(this, ChartJs);

      var _this = _possibleConstructorReturn(this, _Chart.call(this, widget));

      _this.chartData = {
        labels: [],
        datasets: []
      };
      return _this;
    }

    ChartJs.prototype.attached = function attached() {};

    ChartJs.prototype.refresh = function refresh() {
      var _this2 = this;

      _Chart.prototype.refresh.call(this);
      var query = new _periscopeFramework.Query();
      query.serverSideFilter = this.dataFilter;
      this.dataSource.getData(query).then(function (dH) {
        _this2.chartData = _this2.mapData(dH.data, _this2.categoriesField);
      });
    };

    ChartJs.prototype.mapData = function mapData(data, categoryField) {
      var lbl = [],
          d = [];
      _.forOwn(_.groupBy(data, categoryField), function (v, k) {
        lbl.push(k);
        d.push(v.length);
      });
      return {
        labels: lbl,
        datasets: [{
          fillColor: '#ee5315',
          data: d
        }] };
    };

    _createClass(ChartJs, [{
      key: 'chartData',
      get: function get() {
        return this._chartData;
      },
      set: function set(value) {
        this._chartData = value;
      }
    }]);

    return ChartJs;
  }(_periscopeFramework.Chart);
});