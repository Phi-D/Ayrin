import {TypesDefinitionService} from 'system/services/TypesDefinitionService';
new TypesDefinitionService().setType('paragraph', {
  type:"field",
  name:"paragraph",
  viewModel:"Paragraph",
  dataType: "html",
  edit: "edit.html",
  display: "display.html",
  state:"display"
});