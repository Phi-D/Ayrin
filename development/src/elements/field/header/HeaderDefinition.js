import {TypesDefinitionService} from 'system/services/TypesDefinitionService';
new TypesDefinitionService().setType('header', {
  type:"field",
  name:"header",
  dataType: "html",
  edit: "edit.html",
  display: "display.html",
  state:"display"
});