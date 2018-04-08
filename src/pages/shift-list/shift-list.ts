import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';

import { Shift } from '../../models/Shift';
import { Shifts } from '../../providers/providers';

import { Observable } from 'rxjs/Observable';

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
    let updateModal = this.modalCtrl.create('ShiftUpdatePage', {shift: shift});
    updateModal.onDidDismiss(shiftUpdate => {
      if (shiftUpdate) {
        this.shifts.update(shiftUpdate);
      }
    })
    updateModal.present();
  }
}
