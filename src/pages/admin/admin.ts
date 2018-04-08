import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sites, Notifications, SupplyRequests } from '../../providers/providers';
import { Site } from '../../models/site';
import { Notification } from '../../models/notification';
import { Observable } from 'rxjs/Observable';
import { SupplyRequest } from '../../models/supplyRequest';

/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  activeNotifications$: Observable<Notification[]>;
  activeSites$: Observable<Site[]>;
  activeSupplyRequests$: Observable<SupplyRequest[]>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public sitesProvider: Sites,
    public notificationsProvider: Notifications,
    public supplyRequestProvider: SupplyRequests)
  {
    this.activeSites$ = this.getActiveSites();
    this.activeNotifications$ = this.getActiveNotifications();
    this.activeSupplyRequests$ = this.getActiveSupplyRequests();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }

  getActiveSites() {
    return this.sitesProvider.getActiveSites();
  }

  getActiveNotifications() {
    return this.notificationsProvider.getActiveNotifications();
  }

  getActiveSupplyRequests() {
    return this.supplyRequestProvider.getActiveSupplyRequests();
  }

  goToSite(siteId: string)
  {
    console.log("going to site::", siteId);
    this.navCtrl.push('SitePage', {siteId: siteId});
  }
}
