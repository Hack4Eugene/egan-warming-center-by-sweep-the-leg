import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Site } from '../../models/site';

@IonicPage()
@Component({
  selector: 'page-guests',
  templateUrl: 'guests.html',
})
export class GuestsPage {
  site: Site;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.site = navParams.get('site')
  }

  ionViewDidLoad() {
  }

}
