import { AuthProviders, AuthMethods } from 'angularfire2/auth';


export const FirebaseAppConfig = {
    apiKey: "AIzaSyBDkNQpgKspgfQyrnTnFF7sKAmh1WiZfqE",
    authDomain: "angular-firebase-memo.firebaseapp.com",
    databaseURL: "https://angular-firebase-memo.firebaseio.com",
    storageBucket: "angular-firebase-memo.appspot.com",
    messagingSenderId: "616873636566"
}

export const myFirebaseAppAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};