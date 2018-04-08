import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sites, SupplyRequests } from '../../providers/providers';
import { Observable } from 'rxjs/Observable'
import { Site } from '../../models/site';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
import { SupplyRequest } from '../../models/supplyRequest';
import { Supply } from '../../models/supply';

@IonicPage()
@Component({
  selector: 'page-supplyRequest',
  templateUrl: 'supplyRequest.html',
})
export class SupplyRequestPage {
  complete: boolean;
  supplyRequestDoc: AngularFirestoreDocument<SupplyRequest>;
  supplyRequest$: Observable<SupplyRequest>;
  supplyRequestId: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private supplyRequests: SupplyRequests) {
    this.supplyRequestDoc = supplyRequests.getDoc(navParams.get('supplyRequestId'));
    this.supplyRequest$ = this.supplyRequestDoc.valueChanges();

    this.complete = false;
  }

  ionViewDidLoad() {
  }

  deleteItem(supplyRequest: SupplyRequest, supply: Supply) {
    // Find the supplied item and set it's status
    var index = supplyRequest.request.indexOf(supply);
    supplyRequest.request.splice(index, 1);

    // Check if all items have been supplied
    this.complete = true;
    for (let supply of supplyRequest.request) {
      if (supply.status !== 'supplied') {
        this.complete = false;
        break;
      }
    }

    // If all items have been supplied, mark request as complete
    if (this.complete) {
      supplyRequest.status = 'complete';
    }

    this.supplyRequests.update(this.supplyRequestDoc, supplyRequest)
  }

  supplyItem(supplyRequest: SupplyRequest, supply: Supply) {
    // Find the supplied item and set it's status
    var index = supplyRequest.request.indexOf(supply);
    supply.status = 'supplied';
    supplyRequest.request.splice(index, 1, supply);

    // Check if all items have been supplied
    this.complete = true;
    for (let supply of supplyRequest.request) {
      if (supply.status !== 'supplied') {
        this.complete = false;
        break;
      }
    }

    // If all items have been supplied, mark request as complete
    if (this.complete) {
      supplyRequest.status = 'complete';
    }

    this.supplyRequests.update(this.supplyRequestDoc, supplyRequest)
  }

  deleteRequest(supplyRequest: SupplyRequest) {
    this.supplyRequests.delete(supplyRequest.id);
  }

  completeRequest(supplyRequest: SupplyRequest) {
    for (let supply of supplyRequest.request) {
      this.supplyItem(supplyRequest, supply);
    }
  }

  isComplete()
  {
    return this.complete;
  }

  openSupplies(siteId: string) {
    this.navCtrl.push('SuppliesPage', {
      siteId: siteId
    });
  }
  openShifts(siteId: string) {
    this.navCtrl.push('ShiftListPage', {
      siteId: siteId
    });
  }
}
