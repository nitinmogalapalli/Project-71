import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
var firebaseConfig = {
    apiKey: "AIzaSyBc2QZ0jT6cBkal64VLwJTRo9PH7p-52rM",
    authDomain: "e-ride-f5306.firebaseapp.com",
    projectId: "e-ride-f5306",
    storageBucket: "e-ride-f5306.appspot.com",
    messagingSenderId: "199607369953",
    appId: "1:199607369953:web:a46459a016d0df540877a0"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
