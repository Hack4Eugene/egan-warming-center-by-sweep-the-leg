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
    if (navParams.get('siteId'))
    {
      this.siteDoc = sites.getDoc(navParams.get('siteId'));
    }

    this.site$ = this.siteDoc.valueChanges();
  }

  ionViewDidLoad() {
  }

  // Check in a scheduled guest, and update unique and current counts
  checkInReservation(site: Site) {
    site.uniqueGuests += 1;
    site.currentGuests += 1;
    this.sites.update(this.siteDoc, site);
  }
  // Check in a walk-in guest, and update unique, current, and walk-in counts
  checkInWalkIn(site: Site) {
    site.uniqueGuests += 1;
    site.currentGuests += 1;
    site.walkInCount += 1;
    this.sites.update(this.siteDoc, site);
  }

  // Check in a guest who checked-out and came back, increment current count.
  guestReturn(site: Site) {
    site.currentGuests += 1;
    this.sites.update(this.siteDoc, site);
  }

  // Check out a guest, decrement current count
  guestCheckOut(site: Site) {
    site.currentGuests -= 1;
    this.sites.update(this.siteDoc, site);
  }

  // Check in a pet, increment the pet counter
  petArrive(site: Site) {
    site.currentPets += 1;
    this.sites.update(this.siteDoc, site);
  }

  // Check out a pet, decrement pet counter
  petDepart(site: Site) {
    site.currentPets -= 1;
    this.sites.update(this.siteDoc, site);
  }

  // Open the supplies page for this site
  openSupplies(siteId: string) {
    this.navCtrl.push('SuppliesPage', {
      siteId: siteId,
      siteName: this.navParams.get('siteName')
    });
  }

  // Open the shifts page for this site
  openShifts(siteId: string) {
    this.navCtrl.push('ShiftListPage', {
      siteId: siteId
    });
  }
}
