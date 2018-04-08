import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sites } from '../../providers/providers';
import { Observable } from 'rxjs/Observable'
import { Site } from '../../models/site';
import { AngularFirestoreDocument } from 'angularfire2/firestore';

@IonicPage()
@Component({
  selector: 'page-site',
  templateUrl: 'site.html',
})
export class SitePage {
  siteDoc: AngularFirestoreDocument<Site>;
  site$: Observable<Site>;
  siteId: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sites: Sites) {
    console.log('here', navParams.get('siteId'));
    if (navParams.get('siteId') !== null)
    {
      this.siteDoc = sites.getDoc(navParams.get('siteId'));
    }
    else
    {
      this.siteDoc = sites.getDoc('KiLiaM1tAZPopU5cQ4uc');
    }
    this.site$ = this.siteDoc.valueChanges();
  }

  ionViewDidLoad() {
  }

  checkInReservation(site: Site) {
    site.uniqueGuests += 1;
    site.currentGuests += 1;
    this.sites.update(this.siteDoc, site);
  }
  checkInWalkIn(site: Site) {
    site.uniqueGuests += 1;
    site.currentGuests += 1;
    site.walkInCount += 1;
    this.sites.update(this.siteDoc, site);
  }
  guestReturn(site: Site) {
    site.currentGuests += 1;
    this.sites.update(this.siteDoc, site);
  }
  guestCheckOut(site: Site) {
    site.currentGuests -= 1;
    this.sites.update(this.siteDoc, site);
  }
  petArrive(site: Site) {
    site.currentPets += 1;
    this.sites.update(this.siteDoc, site);
  }
  petDepart(site: Site) {
    site.currentPets -= 1;
    this.sites.update(this.siteDoc, site);
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
