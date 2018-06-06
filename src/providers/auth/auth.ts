import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthProvider {

  constructor(private afAuth: AngularFireAuth) { }

  authenticateWithEmail(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  createAccount(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  async logout() {
    await this.afAuth.auth.signOut();
  }

  passwordRecovery(email) {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

}
