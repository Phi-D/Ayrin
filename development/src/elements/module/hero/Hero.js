import {inject, bindable} from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Header {

  @bindable instanceName = ''
  constructor(EventAggregator) {
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