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
    this.elementModelView    = typesDefinitionService.getViewModel(this.type);
    this.elementViewDisplay  = typesDefinitionService.getViewDisplay(this.type);
    this.elementViewEdit     = typesDefinitionService.getViewEdit(this.type);

    this.data.instanceName = this.instanceName;
    this.elementModel = this.data;
    this.toggleState(this.data.state);

  }

  toggleState(state) {
    this.elementView = state == "display" ? this.elementViewDisplay : this.elementViewEdit;
  }


}