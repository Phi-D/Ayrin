import {inject, bindable} from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Header {

  @bindable instanceName = ''
  @bindable class=''
  constructor(EventAggregator) {
    this.content = "Wonderful Title";
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
    this.class = this.data.class;
  }

}