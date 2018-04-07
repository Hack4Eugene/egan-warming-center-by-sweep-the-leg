import { Injectable } from '@angular/core';

import { Activation } from '../../models/activation';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Activations {
  activationCollection: AngularFirestoreCollection<Activation>;

  constructor(public db: AngularFirestore) {
    this.activationCollection = db.collection<Activation>('activations');;
  }

  getAll() : Observable<Activation[]> {
    return this.db.collection<Activation>('activations').valueChanges();
  }

  add(activation: Activation) {
    let id = this.db.createId();
    activation.id = id;
    this.activationCollection.doc(id).set(activation);
  }

  delete(activationId: string) {
    this.activationCollection.doc<Activation>(activationId).delete();
  }

}
