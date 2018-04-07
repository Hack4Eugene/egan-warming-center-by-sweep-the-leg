import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
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

  addSupplyRequest(supplyRequest: SupplyRequest) {
    let id = this.db.createId();
    supplyRequest.id = id;
    this.supplyRequestsCollection.doc(id).set(supplyRequest);
  }

  deleteSupplyRequest(supplyRequestId: string) {
    this.supplyRequestsCollection.doc<SupplyRequest>(supplyRequestId).delete();
  }

}
