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

  setType(type, definition) {
    this.typeDefinitions[type] = definition;
  }

  getTypeDefinitions() {
    return this.typeDefinitions;
  }
}
