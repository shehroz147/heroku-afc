import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/auth'
// import initializeApp from 'firebase/app';
// import getFirestore from 'firebase/app';
// // import {}
// import storage from 'firebase/storage';
// import initializeApp from "firebase/app";
import  initializeApp  from "firebase/app";
// import  getAnalytics  from "firebase/analytics";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-E9_M-oI_Xl2wVbHZTnqXfmTwdfibHFs",
    authDomain: "afchalalapp.firebaseapp.com",
    projectId: "afchalalapp",
    storageBucket: "afchalalapp.appspot.com",
    messagingSenderId: "747058580986",
    appId: "1:747058580986:web:818083abeb326bb2b4a843",
    measurementId: "G-BFGDVS7RXB"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const analytics = getAnalytics(app);

// require('firebase/auth');
// import App from '../App';
// const firebaseConfig = {
//     apiKey: "AIzaSyCW20LTgQjZyx4NfAXz9SuwTEOY0H8NUqs",
//     authDomain: "chatapp-d3504.firebaseapp.com",
//     databaseURL: "https://chatapp-d3504.firebaseio.com",
//     projectId: "afcbackend",
//     storageBucket: "chatapp-d3504.appspot.com",
//     messagingSenderId: "336393502096",
//     appId: "1:336393502096:web:153edb98e1836d20688715",
//     measurementId: "G-W5VSHQH34X"
//   };

// const firebaseConfig = {
//   apiKey: "AIzaSyCifkJI0Z-TbH_GbSND0WrzXJ8TgalQvmw",
//   authDomain: "afchalal.firebaseapp.com",
//   databaseURL: "https://afchalal-default-rtdb.firebaseio.com",
//   projectId: "afchalal",
//   storageBucket: "afchalal.appspot.com",
//   messagingSenderId: "654452966392",
//   appId: "1:654452966392:web:ec966380262ecfbc63cc0d",
//   measurementId: "G-NRG96ZY926"
// };
// var admin = require("firebase-admin");

// var serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://afchalal-default-rtdb.firebaseio.com"
// });

  // Initialize Firebase
  // const app = firebase.initializeApp(firebaseConfig);
  // const storage = firebase.storage(app);
//analytics is optional for this tutoral 
  // firebase.analytics();

 const storage = firebase.storage(app);
  let auth=firebase.auth(app);
  // const auth = firebase.auth(app);
export {auth,storage,auth as default}
//      export  {
//  storage,auth as default
//   }
 
//  import firebase from 'firebase/compat/app';
// import storage from 'firebase/storage';



// //   // Initialize Firebase
// //   firebase.initializeApp(firebaseConfig);
// // //analytics is optional for this tutoral 
// //   firebase.analytics();

  


//   // Import the functions you need from the SDKs you need

// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCifkJI0Z-TbH_GbSND0WrzXJ8TgalQvmw",
//   authDomain: "afchalal.firebaseapp.com",
//   projectId: "afchalal",
//   storageBucket: "afchalal.appspot.com",
//   messagingSenderId: "654452966392",
//   appId: "1:654452966392:web:ec966380262ecfbc63cc0d",
//   measurementId: "G-NRG96ZY926"
// };
// const app= firebase.initializeApp(firebaseConfig);
// // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const analytics = firebase.getAnalytics(app);
// // import { getAnalytics } from "firebase/analytics";

// // const analytics = getAnalytics();

// const analytics = firebase.analytics();

// // const storage = firebase.storage();
// const auth = firebase.auth(app);

