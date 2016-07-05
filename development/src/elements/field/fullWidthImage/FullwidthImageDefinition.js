import {TypesDefinitionService} from 'system/services/TypesDefinitionService';
new TypesDefinitionService().setType('full-width-image', {
  type:"field",
  name:"fullWidthImage",
  dataType: "html",
  edit: "edit.html",
  display: "display.html",
  state:"display"
});