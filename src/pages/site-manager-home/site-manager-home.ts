import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sites } from '../../providers/providers';
import { Observable } from 'rxjs/Observable';
import { Site } from '../../models/site';

@IonicPage()
@Component({
  selector: 'page-site-manager-home',
  templateUrl: 'site-manager-home.html',
})
export class SiteManagerHomePage {
  myActiveSites$: Observable<Site[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public sites: Sites) {
    this.myActiveSites$ = this.sites.getActiveSites();
  }

  ionViewDidLoad() {
  }

  openSite(siteId: string) {
    this.navCtrl.push('SitePage', {siteId: siteId})
  }

}
