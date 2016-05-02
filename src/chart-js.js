import {Chart, Query} from 'periscope-framework';
import * as _ from 'lodash';

export class ChartJs extends Chart {
  constructor(widget) {
    super(widget);
    this.chartData = {
      labels:[],
      datasets:[]
    }
  }

  get chartData(){
    return this._chartData;
  }
  set chartData(value){
    this._chartData = value;
  }

  attached(){
  }

  refresh(){
    super.refresh();
    let query = new Query();
    query.serverSideFilter = this.dataFilter;
    this.dataSource.getData(query).then(dH=> {
      this.chartData = this.mapData(dH.data,this.categoriesField);
    });
  }


  mapData(data, categoryField){
    let lbl = [], d = [];
    _.forOwn(_.groupBy(data,categoryField), (v, k)=> {
      lbl.push(k);
      d.push(v.length);
    });
    return {
      labels:lbl,
      datasets:[{
        fillColor:'#ee5315',
        data:d
      }]};
  }

}

