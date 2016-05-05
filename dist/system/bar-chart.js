'use strict';

System.register(['chartist', 'chartist/dist/chartist.css!', 'periscope-framework'], function (_export, _context) {
  var Chartist, Chart, Query, _createClass, DEFAULT_HEIGHT, BarChart;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

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

  return {
    setters: [function (_chartist) {
      Chartist = _chartist.default;
    }, function (_chartistDistChartistCss) {}, function (_periscopeFramework) {
      Chart = _periscopeFramework.Chart;
      Query = _periscopeFramework.Query;
    }],
    execute: function () {
      _createClass = function () {
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

      DEFAULT_HEIGHT = 450;

      _export('BarChart', BarChart = function (_Chart) {
        _inherits(BarChart, _Chart);

        function BarChart(settings) {
          _classCallCheck(this, BarChart);

          return _possibleConstructorReturn(this, _Chart.call(this, settings));
        }

        BarChart.prototype.refresh = function refresh() {
          var _this2 = this;

          _Chart.prototype.refresh.call(this);
          var query = new Query();
          query.serverSideFilter = this.dataFilter;
          this.dataSource.getData(query).then(function (dH) {
            _this2.chartData = _this2.mapData(dH.data, _this2.categoriesField);
            _this2.createChart();
          });
        };

        BarChart.prototype.mapData = function mapData(data, categoryField) {
          var lbl = [],
              d = [];
          _.forOwn(_.groupBy(data, categoryField), function (v, k) {
            lbl.push(k);
            d.push(v.length);
          });
          return {
            labels: lbl,
            series: [d]
          };
        };

        BarChart.prototype.createChart = function createChart() {
          var options = {
            width: '100%',
            height: this.minHeight ? this.minHeight : DEFAULT_HEIGHT,
            seriesBarDistance: 100,
            reverseData: true,
            horizontalBars: true,
            axisY: {
              offset: 85
            }
          };
          if (this.chartElement) new Chartist.Bar(this.chartElement, this.chartData, options);
        };

        _createClass(BarChart, [{
          key: 'chartData',
          get: function get() {
            return this._chartData;
          },
          set: function set(value) {
            this._chartData = value;
          }
        }]);

        return BarChart;
      }(Chart));

      _export('BarChart', BarChart);
    }
  };
});