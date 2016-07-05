import {TypesDefinitionService} from 'system/services/TypesDefinitionService';
new TypesDefinitionService().setType('header', {
  type:"field",
  name:"header",
  viewModel:"Header",
  dataType: "html",
  edit: "edit.html",
  display: "display.html",
  state:"display"
});