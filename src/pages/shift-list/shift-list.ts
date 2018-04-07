import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';

import { Shift } from '../../models/Shift';
import { Auth } from '../../providers/providers';
import { Shifts } from '../../providers/providers';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';

@IonicPage()
@Component({
  selector: 'page-shift-list',
  templateUrl: 'shift-list.html'
})
export class ShiftListPage {
  siteId: string;
  shiftList: Observable<Shift[]>;
  constructor(
    public navCtrl: NavController,
    navParams: NavParams,
    public modalCtrl: ModalController,
    public shifts: Shifts,
  ) {
    this.siteId = navParams.get('siteId');
    this.shiftList = this.shifts.getShiftsForSite(this.siteId);
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Navigate to the detail page for this item.
   */
  updateShift(shift: Shift) {
    let addModal = this.modalCtrl.create('ShiftDetailsPage');
    addModal.onDidDismiss(shiftUpdate => {
      if (shiftUpdate) {
        this.shifts.update(shiftUpdate);
      }
    })
    addModal.present();
    this.navCtrl.push('ShiftDetailPage', {
      shift: shift
    });
  }
}
