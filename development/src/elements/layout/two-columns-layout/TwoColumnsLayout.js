import {bindable, inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import {TypesDefinitionService} from 'system/services/TypesDefinitionService';

@inject(EventAggregator)
export class TwoColumnsLayout {

  @bindable leftColumn =[];
  constructor(EventAggregator) {

    this.leftColumn = [
      {
        type: "header",
        id: "header-left"
      },
      {
        type: "paragraph",
        id: "paragraph-left"
      },
      {
        type: "header",
        id: "header-left"
      },
      {
        type: "paragraph",
        id: "paragraph-left"
      }
    ];
    this.rightColumn = [
      {
        type: "header",
        id: "header-right"
      },
      {
        type: "paragraph",
        id: "paragraph-right"
      }
    ];
  }
}

