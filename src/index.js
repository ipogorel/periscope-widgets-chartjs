export * from './bar-chart';

import "./periscope-widget-chartjs.css!"
import {PeriscopeFactory} from 'periscope-framework';
import {BarChart} from './bar-chart';
export function configure(aurelia) {
  let pf = aurelia.container.get(PeriscopeFactory);
  pf.addReference(BarChart);
  aurelia.globalResources(
    "./bar-chart"
  );
}
