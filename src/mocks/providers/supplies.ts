import { Injectable } from '@angular/core';

import { Supply } from '../../models/supply';

@Injectable()
export class Supplies {
  supplies: Supply[] = [];

  defaultItem: any = {
    "name": "Blankets",
    "siteName": "First Christian",
    "quantity": 10
  };


  constructor() {
    this.supplies = [
      {
        "itemName": "Blankets",
        "siteName": "First Christian",
        "quantity": 10
      },
      {
        "itemName": "Blankets",
        "siteName": "First Christian",
        "quantity": 10
      },
      {
        "itemName": "Blankets",
        "siteName": "First Christian",
        "quantity": 10
      },
      {
        "itemName": "Blankets",
        "siteName": "First Christian",
        "quantity": 10
      }
    ];
  }

  query(params?: any) {
    if (!params) {
      return this.supplies;
    }

    return this.supplies.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(supply: Supply) {
    this.supplies.push(supply);
  }

  delete(supply: Supply) {
    this.supplies.splice(this.supplies.indexOf(supply), 1);
  }
}
