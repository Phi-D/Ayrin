import {bindable, inject, customElement, customAttribute } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import {TypesDefinitionService} from 'system/services/TypesDefinitionService';
import $ from 'jquery';

@inject(Element, TypesDefinitionService, EventAggregator)
@customElement('component')
export class component {


  @bindable type;
  @bindable id;

  @bindable modelView = '';
  @bindable view = '';
  @bindable model = '';

  constructor(element, typesDefinitionService, EventAggregator) {

    this.element = element;
    this.typesDefinitionService = typesDefinitionService;
    this.ea = EventAggregator;
    this.ea.subscribe( "switch-state-"+this.instanceName, state => {
      this.toggleState(state);
    });

  }

  toggleState(state) {
    this.elementView = state == "display" ? this.elementViewDisplay : this.elementViewEdit;
  }

  bind() {

    console.log(this.type, this.class, this.id);

    this.data =  this.typesDefinitionService.getType(this.type);
    this.modelView =  this.typesDefinitionService.getViewModel(this.type);
    this.view      =  this.typesDefinitionService.getViewDisplay(this.type);
    this.model     =  this.typesDefinitionService.getViewEdit(this.type);

    this.data.id    = this.id;
    this.data.class = this.class;
    this.model      = this.data;
    this.toggleState(this.data.state);
  }


}