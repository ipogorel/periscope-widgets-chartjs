declare module 'periscope-widgets-chartjs' {
  import Chartist from 'chartist';
  import {
    Chart,
    Query
  } from 'periscope-framework';
  import 'chartist/dist/chartist.css!';
  import './periscope-widget-chartjs.css!';
  export class BarChart extends Chart {
    constructor(settings: any);
    chartData: any;
    refresh(): any;
    mapData(data: any, categoryField: any): any;
    createChart(): any;
  }
  export * from 'periscope-widgets-chartjs/bar-chart';
  export function configure(aurelia: any): any;
}