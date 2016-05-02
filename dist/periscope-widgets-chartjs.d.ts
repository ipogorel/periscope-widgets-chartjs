declare module 'periscope-widgets-chartjs' {
  import * as _ from 'lodash';
  import {
    Chart,
    Query
  } from 'periscope-framework';
  export class ChartJs extends Chart {
    constructor(widget: any);
    chartData: any;
    attached(): any;
    refresh(): any;
    mapData(data: any, categoryField: any): any;
  }
  export * from 'periscope-widgets-chartjs/chart-js';
  export function configure(aurelia: any): any;
}