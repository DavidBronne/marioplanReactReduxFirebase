import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBde2SGsy2iRb6Va3SteTXl33K5SEMQaho",
    authDomain: "marioplan-reactreduxfirebase.firebaseapp.com",
    projectId: "marioplan-reactreduxfirebase",
    storageBucket: "marioplan-reactreduxfirebase.appspot.com",
    messagingSenderId: "603798719949",
    appId: "1:603798719949:web:bc466796e15363bcaf4884"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase;