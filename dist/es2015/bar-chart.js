import Chartist from 'chartist';
import "chartist/dist/chartist.css!";
import { Chart, Query } from 'periscope-framework';

const DEFAULT_HEIGHT = 450;
export let BarChart = class BarChart extends Chart {
  constructor(settings) {
    super(settings);
  }

  get chartData() {
    return this._chartData;
  }
  set chartData(value) {
    this._chartData = value;
  }

  refresh() {
    super.refresh();
    let query = new Query();
    query.filter = this.dataFilter;
    this.dataSource.getData(query).then(dH => {
      this.chartData = this.mapData(dH.data, this.categoriesField);
      this.createChart();
    });
  }

  mapData(data, categoryField) {
    let lbl = [],
        d = [];
    _.forOwn(_.groupBy(data, categoryField), (v, k) => {
      lbl.push(k);
      d.push(v.length);
    });
    return {
      labels: lbl,
      series: [d]
    };
  }

  createChart() {
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
  }
};