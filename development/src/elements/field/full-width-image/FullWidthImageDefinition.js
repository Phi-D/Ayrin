import {TypesDefinitionService} from 'system/services/TypesDefinitionService';
new TypesDefinitionService().setType('full-width-image', {
  type:"field",
  name:"full-width-image",
  viewModel:"FullWidthImage",
  dataType: "file",
  edit: "edit.html",
  display: "display.html",
  state:"display"
});