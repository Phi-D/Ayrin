let typeDefinitions = {};
export class TypesDefinitionService {

  static getType(type) {
    return typeDefinitions[type];
  }

  static setType(type, definition) {
    typeDefinitions[type] = definition;
  }

  static getTypeList() {
    return typeDefinitions
  }
}