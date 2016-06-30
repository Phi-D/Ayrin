import {bindable, inject, customElement} from 'aurelia-framework';
import {TypesDefinitionService} from 'system/services/TypesDefinitionService';
import $ from 'jquery';

@inject(Element, TypesDefinitionService)
@customElement('field')
@bindable({
  name:'type',
  attribute:'type'
})
export class field {

  constructor(element, typesDefinitionService) {
    this.element = element;
    this.type = $(this.element).attr('type');
    this.instanceName = $(this.element).attr('instance-name');

    this.data = typesDefinitionService.getType(this.type);
    var type = this.data.type;
    var dir  = this.data.name;
    var name = this.data.name.charAt(0).toUpperCase() + this.data.name.slice(1);

    this.elementModelView = "elements/"+type+"/"+dir+"/"+name+".js";

    console.log(this.elementModelView);
  }

}