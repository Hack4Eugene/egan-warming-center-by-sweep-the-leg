import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item';
import { Items } from '../../mocks/providers/items';
import { SupplyRequests } from '../../providers/supplyRequests/supplyRequests';
import { Supply } from '../../models/supply';

@IonicPage()
@Component({
  selector: 'page-supplies',
  templateUrl: 'supplies.html',
})
export class SuppliesPage {

  isItemComplete:boolean = false;
  hasRequest:boolean = false;
  items:Item[] = [];
  qty:Number[] = [];
  supplies: Supply[] = [];
  supply: Supply = {
    item: null,
    siteName: "",
    quantity: null,
    status: ""
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public itemsProvider: Items,
    public supplyRequests: SupplyRequests) {
    // get the items available to choose from
    this.items = itemsProvider.getAll();

    // Build array of qty options
    for(var _i = 0; _i < 50; _i++)
    {
      this.qty.push(_i);
    }
  }

  ionViewDidLoad() {
  }

  addSupply()
  {
    this.supply.status = 'requested';
    this.supplies.push(this.supply);
    this.resetSupply();
    this.setHasRequest();
    this.checkItemComplete();
  }

  removeSupply(supply:Supply)
  {
    this.supplies = this.supplies.filter(item => item !== supply);
    this.setHasRequest();
    this.checkItemComplete();
  }

  sendRequest()
  {
    console.log("Sending request");

    var request = {
      'id': "",
      'siteId': "Test_site_123",
      'siteName':"Test Site",
      'request': this.supplies
    }

    this.supplyRequests.addSupplyRequest(request);

    this.cancelRequest();
  }

  cancelRequest()
  {
    this.supplies = [];

    this.resetSupply();
    this.setHasRequest();
  }

  selectItem(item:Item)
  {
    console.log("select item", item);
    if (item != null && !(item instanceof Array))
    {
      this.supply.item = item;
    }
    this.checkItemComplete();
  }

  selectQuantity(qty:number)
  {
    this.supply.quantity = qty;
    this.checkItemComplete();
  }

  resetSupply()
  {
    console.log("reset supplies");
    this.supply = {
      item: null,
      siteName: "",
      quantity: null,
      status: ""
    };

  }

  setHasRequest()
  {
    this.hasRequest = this.supplies.length > 0;
  }

  checkItemComplete()
  {
    this.isItemComplete = this.supply.quantity > 0 && this.supply.item != null;
  }
}
