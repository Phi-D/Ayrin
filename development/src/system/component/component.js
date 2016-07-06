import {bindable, inject, customElement} from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import {TypesDefinitionService} from 'system/services/TypesDefinitionService';
import $ from 'jquery';

@inject(Element, TypesDefinitionService, EventAggregator)
@customElement('component')
export class field {
  @bindable modelView = '';
  @bindable view = '';
  @bindable model = '';

  constructor(element, typesDefinitionService, EventAggregator) {

    this.element = element;
    this.type  = $(this.element).attr('type');
    this.class = $(this.element).attr('class');
    this.instanceName = $(this.element).attr('instance-name');

    this.ea = EventAggregator;
    this.ea.subscribe( "switch-state-"+this.instanceName, state => {
      this.toggleState(state);
    });

    this.data = typesDefinitionService.getType(this.type);
    this.modelView = typesDefinitionService.getViewModel(this.type);
    this.view      = typesDefinitionService.getViewDisplay(this.type);
    this.model     = typesDefinitionService.getViewEdit(this.type);


    this.data.instanceName = this.instanceName;
    this.data.class = this.class;
    this.model = this.data;
    this.toggleState(this.data.state);

  }

  toggleState(state) {
    this.elementView = state == "display" ? this.elementViewDisplay : this.elementViewEdit;
  }


}