import firebase from 'firebase';
import 'firebase/storage'




const firebaseConfig = {
    apiKey: "AIzaSyCW20LTgQjZyx4NfAXz9SuwTEOY0H8NUqs",
    authDomain: "chatapp-d3504.firebaseapp.com",
    databaseURL: "https://chatapp-d3504.firebaseio.com",
    projectId: "chatapp-d3504",
    storageBucket: "chatapp-d3504.appspot.com",
    messagingSenderId: "336393502096",
    appId: "1:336393502096:web:153edb98e1836d20688715",
    measurementId: "G-W5VSHQH34X"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//analytics is optional for this tutoral 
  firebase.analytics();

  const storage = firebase.storage()
   const auth =   firebase.auth()
 
  export  {
  auth,  storage,auth  as default
  }
 
