import {TypesDefinitionService} from 'system/services/TypesDefinitionService';
new TypesDefinitionService().setType('image', {
  type:"field",
  name:"image",
  dataType: "html",
  edit: "edit.html",
  display: "display.html",
  state:"display"
});