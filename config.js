import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCylyZYiSOqbwy-Ts_Eye6QhJpQeITGjgY",
    authDomain: "project-class-71-bc364.firebaseapp.com",
    projectId: "project-class-71-bc364",
    storageBucket: "project-class-71-bc364.appspot.com",
    messagingSenderId: "723049521490",
    appId: "1:723049521490:web:4797c4d57291a793cf5a8b",
    measurementId: "G-FBXJ1SML26"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
