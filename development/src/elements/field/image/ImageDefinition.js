import {TypesDefinitionService} from 'system/services/TypesDefinitionService';
new TypesDefinitionService().setType('image', {
  type:"field",
  name:"image",
  viewModel:"Image",
  dataType: "html",
  edit: "edit.html",
  display: "display.html",
  state:"display"
});