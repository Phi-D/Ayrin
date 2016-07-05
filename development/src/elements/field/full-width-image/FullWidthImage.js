import {inject, bindable} from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class FullWidthImage {

  @bindable instanceName = ''
  @bindable path = ''
  @bindable class = '';

  constructor(EventAggregator) {

    this.class="full-width-image";
    this.path = "assets/images/test.jpg";
    this.ea = EventAggregator;
  }

  edit() {
    this.ea.publish( "switch-state-"+this.instanceName, "edit");
  }

  save() {
    this.ea.publish( "switch-state-"+this.instanceName, "display");
  }

  activate(data) {
    this.data = data;
    this.instanceName = this.data.instanceName;
  }

}