let instance = null;
export class TypesDefinitionService {

  constructor() {
    if(!instance) {
      this.typeDefinitions = {};
      instance = this;
    }
    return instance;
  }

  getType(type) {
    return this.typeDefinitions[type];
  }

  getViewModel(type) {
    let data = this.typeDefinitions[type]
    return "elements/"+data.type+"/"+data.name+"/"+ data.viewModel+".js"
  }

  getViewEdit(type) {
    let data = this.typeDefinitions[type]
    return "elements/"+data.type+"/"+data.name+"/"+ data.edit;
  }

  getViewDisplay(type) {
    let data = this.typeDefinitions[type]
    return "elements/"+data.type+"/"+data.name+"/"+ data.display;
  }

  setType(type, definition) {
    this.typeDefinitions[type] = definition;
  }

  getTypeDefinitions() {
    return this.typeDefinitions;
  }
}
