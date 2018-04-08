import { Injectable } from '@angular/core';

import { Notification } from '../../models/notification';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Notifications {
  notificationsCollection: AngularFirestoreCollection<Notification>;

  constructor(public db: AngularFirestore) {
    this.notificationsCollection = db.collection<Notification>('notifications');
  }

  getAll() : Observable<Notification[]> {
    return this.db.collection<Notification>('notifications').valueChanges();
  }

  getActiveNotifications() : Observable<Notification[]> {
    return this.db.collection<Notification>('notifications', ref => ref.where('status', '==', 'active')).valueChanges();
  }

  getDoc(notificationId: string) {
    return this.db.doc<Notification>(`notifications/${notificationId}`);
  }

  get(notificationId: string) {
    return this.db.doc<Notification>(`notifications/${notificationId}`).valueChanges();
  }

  add(notification: Notification) {
    let id = this.db.createId();
    notification.id = id;
    this.notificationsCollection.doc(id).set(notification);
  }

  delete(notificationId: string) {
    this.notificationsCollection.doc<Notification>(notificationId).delete();
  }

  update(notificationDoc: AngularFirestoreDocument<Notification>, notification: Notification) {
    notificationDoc.update(notification);
  }

}
