import {TypesDefinitionService} from 'system/services/TypesDefinitionService';
new TypesDefinitionService().setType('hero', {
  type:"module",
  name:"hero",
  edit: "edit.html",
  display: "display.html",
  state:"display"
});