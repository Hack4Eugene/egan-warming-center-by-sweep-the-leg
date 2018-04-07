import { Injectable } from '@angular/core';

import { Site } from '../../models/site';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Sites {
  sitesCollection: AngularFirestoreCollection<Site>;

  constructor(public db: AngularFirestore) {
    this.sitesCollection = db.collection<Site>('sites');
  }

  getAll() : Observable<Site[]> {
    return this.db.collection<Site>('sites').valueChanges();
  }

  getActiveSites() : Observable<Site[]> {
    return this.db.collection<Site>('sites', ref => ref.where('status', '==', 'active')).valueChanges();
  }

  getDoc(siteId: string) {
    return this.db.doc<Site>(`sites/${siteId}`);
  }

  get(siteId: string) {
    return this.db.doc<Site>(`sites/${siteId}`).valueChanges();
  }

  add(site: Site) {
    let id = this.db.createId();
    site.id = id;
    this.sitesCollection.doc(id).set(site);
  }

  delete(siteId: string) {
    this.sitesCollection.doc<Site>(siteId).delete();
  }

  update(siteDoc: AngularFirestoreDocument<Site>, site: Site) {
    siteDoc.update(site);
  }

}
