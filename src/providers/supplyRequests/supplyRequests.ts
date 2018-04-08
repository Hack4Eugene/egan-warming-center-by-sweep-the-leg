import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { SupplyRequest } from '../../models/supplyRequest';

@Injectable()
export class SupplyRequests {
  supplyRequestsCollection: AngularFirestoreCollection<SupplyRequest>;

  constructor(public db: AngularFirestore) {
    this.supplyRequestsCollection = db.collection<SupplyRequest>('supplyRequests');;
  }

  getAll() : Observable<SupplyRequest[]> {
    return this.db.collection<SupplyRequest>('supplyRequests').valueChanges();
  }

  getActiveSupplyRequests() : Observable<SupplyRequest[]> {
    return this.db.collection<SupplyRequest>('supplyRequests', ref => ref.where('status', '==', 'active')).valueChanges();
  }

  addSupplyRequest(supplyRequest: SupplyRequest) {
    let id = this.db.createId();
    supplyRequest.id = id;
    this.supplyRequestsCollection.doc(id).set(supplyRequest);
  }

  deleteSupplyRequest(supplyRequestId: string) {
    this.supplyRequestsCollection.doc<SupplyRequest>(supplyRequestId).delete();
  }

  getDoc(requestId: string) {
    return this.db.doc<SupplyRequest>(`supplyRequests/${requestId}`);
  }

  get(requestId: string) {
    return this.db.doc<SupplyRequest>(`supplyRequests/${requestId}`).valueChanges();
  }

  add(supplyRequest: SupplyRequest) {
    let id = this.db.createId();
    supplyRequest.id = id;
    this.supplyRequestsCollection.doc(id).set(supplyRequest);
  }

  delete(requestId: string) {
    this.supplyRequestsCollection.doc<SupplyRequest>(requestId).delete();
  }

  update(supplyRequestDoc: AngularFirestoreDocument<SupplyRequest>, supplyRequest: SupplyRequest) {
    supplyRequestDoc.update(supplyRequest);
  }

}
