export * from './bar-chart';
import "./periscope-widget-chartjs.css!"

export function configure(aurelia) {
  aurelia.globalResources(
    "./bar-chart"
  );
}
