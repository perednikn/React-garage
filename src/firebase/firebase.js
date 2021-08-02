import firebase from 'firebase/app';

import 'firebase/firestore';


var app = firebase.initializeApp({
    apiKey: "AIzaSyCcpVtuId5DTZoP5M7mxW7kw0SEontBVtw",
    authDomain: "reactgarage.firebaseapp.com",
    projectId: "reactgarage",
    storageBucket: "reactgarage.appspot.com",
    messagingSenderId: "162474759018",
    appId: "1:162474759018:web:a731cb7ff1f6dfd7278b13",
    measurementId: "G-MCC2V7JEBY"
  });

  export function getFirebase() {
    return app;
  }
  export function getFirestore() {
    return firebase.firestore(app);
  }
  