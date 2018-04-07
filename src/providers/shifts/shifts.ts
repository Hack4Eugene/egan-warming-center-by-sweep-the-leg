import { Injectable } from '@angular/core';

import { Shift } from '../../models/shift';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Shifts {
  shiftsCollection: AngularFirestoreCollection<Shift>;

  constructor(public db: AngularFirestore) {
    this.shiftsCollection = db.collection<Shift>('shifts');
  }

  getAll() : Observable<Shift[]> {
    return this.db.collection<Shift>('shifts').valueChanges();
  }

  getShiftsForSite(siteId: string) : Observable<Shift[]> {
    return this.db.collection<Shift>('shifts', ref => ref.where('siteId', '==', siteId)).valueChanges();
  }

  get(shiftId: string) {
    return this.db.doc<Shift>(`shifts/${shiftId}`);
  }

  update(shift: Shift) {
    this.db.doc<Shift>(`shifts/${shift.id}`).update(shift);
  }

}
