import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';

@Injectable()
export class Auth {

  user$: Observable<User>;
  user: User;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore) {
      //// Get auth data, then get firestore user document || null
      this.user$ = this.afAuth.authState
        .switchMap(user => {
          if (user) {
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
          } else {
            return Observable.of(null)
          }
        });
      this.user$.subscribe(val => this.user = val);
  }

  login(email: string, password: string) {
    return this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(email, password).then((credential) => {
      this.updateUserData(credential.user)
    });
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

  getHomePage() {
    if (this.user.roles.admin)
    {
      return 'AdminPage'
    }
    else if (this.user.roles.siteLead || this.user.roles.shiftLead) {
      return 'SiteManagerHomePage'
    }
    else if (this.user.roles.driverCoordinator || this.user.roles.driver) {
      return 'SiteManagerHomePage'
    }
    else {
      return 'SiteManagerHomePage'
    }
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      roles: {
        volunteer: true
      }
    }
    return userRef.set(data, { merge: true })
  }
}
