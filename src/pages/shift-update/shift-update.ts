import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { Shift } from '../../models/shift';

@IonicPage()
@Component({
  selector: 'page-shift-update',
  templateUrl: 'shift-update.html'
})
export class ShiftUpdatePage {
  shift: Shift;

  constructor(public navCtrl: NavController,
    navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    this.shift = navParams.get('shift');
  }

  ionViewDidLoad() {

  }

  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.dismiss();
  }

  /**
   * The user is done and wants to update the shift, so return it
   * back to the presenter.
   */
  done() {
    this.viewCtrl.dismiss(this.shift);
  }
}
