import {bindable, inject, customElement} from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import {TypesDefinitionService} from 'system/services/TypesDefinitionService';
import $ from 'jquery';

@inject(Element, TypesDefinitionService, EventAggregator)
@customElement('module')
export class Module {
  @bindable elementModelView = '';
  @bindable elementView = '';
  @bindable elementModel = '';

  constructor(element, typesDefinitionService, EventAggregator) {

    this.element = element;
    this.type = $(this.element).attr('type');
    this.instanceName = $(this.element).attr('instance-name');

    this.ea = EventAggregator;
    this.ea.subscribe( "switch-state-"+this.instanceName, state => {
      this.toggleState(state);
    });

    this.data = typesDefinitionService.getType(this.type);
    var type = this.data.type;
    var dir  = this.data.name;
    var name = this.data.name.charAt(0).toUpperCase() + this.data.name.slice(1);
    console.log(">>>>>", "elements/"+type+"/"+dir+"/"+name+".js");

    this.elementModelView = "elements/"+type+"/"+dir+"/"+name+".js";
    this.elementViewDisplay  = "elements/"+type+"/"+dir+"/"+this.data.display;
    this.elementViewEdit     = "elements/"+type+"/"+dir+"/"+this.data.edit;

    this.data.instanceName = this.instanceName;
    this.elementModel = this.data;
    this.toggleState(this.data.state);

  }

  toggleState(state) {
    this.elementView = state == "display" ? this.elementViewDisplay : this.elementViewEdit;
  }


}