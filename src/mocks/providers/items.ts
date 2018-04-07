import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: Item = {
    "id": "garbage_bag_60ct",
    "brand": "Hefty",
    "product": "Tall Kitchen Bags",
    "qty": 60,
    "units": "count"
};


  constructor() {
    this.items = [
      {
        "id": "garbage_bag_60ct",
        "brand": "Hefty",
        "product": "Tall Kitchen Bags",
        "qty": 60,
        "units": "count"
    },
    {
        "id": "pancake_mix_60oz",
        "brand": "Krusty's",
        "product": "Pancake Mix",
        "qty": 64,
        "units": "oz"
    },
    {
        "id": "bandage_large_square",
        "brand": "Band-Aid",
        "product": "Large Square Bandage",
        "qty": 24,
        "units":"count"
    }
    ]
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
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

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  getAll():Item[] {
    return this.items;
  }
}
