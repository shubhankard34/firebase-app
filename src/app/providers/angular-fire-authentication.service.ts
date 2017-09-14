import {Injectable} from "@angular/core";
import {AngularFireAuth } from 'angularfire2/auth';
import * as firebase from "firebase/app"
@Injectable()
export class AngularFireAuthentication {
  constructor(public angularFireAuth: AngularFireAuth) {}
  /**
   * Logs in the user
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  loginWithGoogle() {
    return this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    return this.angularFireAuth.auth.signOut();
  }
  
}