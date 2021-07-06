import * as firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAa5FYA3IoYR4QGoDVeGBp8BSlSB-O3SmI",
    authDomain: "firereactnative-36c09.firebaseapp.com",
    projectId: "firereactnative-36c09",
    storageBucket: "firereactnative-36c09.appspot.com",
    messagingSenderId: "1086557042549",
    appId: "1:1086557042549:web:e5f43d50f9bf952eb8053c",
    measurementId: "G-6DT529SSFD"
  };

let app
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}

const db = app.firestore();
const auth = firebase.auth()

export { db, auth }
