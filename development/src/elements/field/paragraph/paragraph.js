import {inject, bindable} from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Paragraph {

  @bindable instanceName = ''
  constructor(EventAggregator) {
    this.content = "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.";
    this.ea = EventAggregator;
  }

  edit() {
    this.ea.publish( "switch-state-"+this.instanceName, "edit");
  }

  save() {
    console.log(">>>>> save");
    this.ea.publish( "switch-state-"+this.instanceName, "display");
  }

  activate(data) {
    this.data = data;
    this.instanceName = this.data.instanceName;
  }

}