import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDEdJcHpbUE1p_u9iQQDzOgvNsOw17R-6c",
  authDomain: "firegram-c82bb.firebaseapp.com",
  databaseURL: "https://firegram-c82bb.firebaseio.com",
  projectId: "firegram-c82bb",
  storageBucket: "firegram-c82bb.appspot.com",
  messagingSenderId: "848980687465",
  appId: "1:848980687465:web:0bbfff0ba977e766ab00f8"
}; 

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };