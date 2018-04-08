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
  supplyRequestDoc: AngularFirestoreDocument<SupplyRequest>;
  supplyRequest$: Observable<SupplyRequest>;
  supplyRequestId: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private supplyRequests: SupplyRequests) {
    this.supplyRequestDoc = supplyRequests.getDoc(navParams.get('supplyRequestId'));
    this.supplyRequest$ = this.supplyRequestDoc.valueChanges();
  }

  ionViewDidLoad() {
  }

  supplyItem(supplyRequest: SupplyRequest, supply: Supply)
  {
    console.log("supply request doc", this.supplyRequest$);

    var index = supplyRequest.request.indexOf(supply);
    supply.status = 'supplied';
    supplyRequest.request.splice(index, 1, supply);
    console.log("found the index at :: " + index, supplyRequest.request, supply);
    this.supplyRequests.update(this.supplyRequestDoc, supplyRequest)
  }

  // petArrive(site: Site) {
  //   site.currentPets += 1;
  //   this.sites.update(this.siteDoc, site);
  // }

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
