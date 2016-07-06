import {TypesDefinitionService} from 'system/services/TypesDefinitionService';
new TypesDefinitionService().setType('two-columns-layout', {
  type:"layout",
  name:"two-columns-layout",
  viewModel:"TwoColumnsLayout",
  edit: "edit.html",
  display: "display.html",
  state:"display"
});