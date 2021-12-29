import firebase from 'firebase';
import 'firebase/storage';
require('firebase/auth');
// import App from '../App';
// // // const firebaseConfig = {
// // //     apiKey: "AIzaSyCW20LTgQjZyx4NfAXz9SuwTEOY0H8NUqs",
// // //     authDomain: "chatapp-d3504.firebaseapp.com",
// // //     databaseURL: "https://chatapp-d3504.firebaseio.com",
// // //     projectId: "chatapp-d3504",
// // //     storageBucket: "chatapp-d3504.appspot.com",
// // //     messagingSenderId: "336393502096",
// // //     appId: "1:336393502096:web:153edb98e1836d20688715",
// // //     measurementId: "G-W5VSHQH34X"
// // //   };

const firebaseConfig = {
  apiKey: "AIzaSyCifkJI0Z-TbH_GbSND0WrzXJ8TgalQvmw",
  authDomain: "afchalal.firebaseapp.com",
  databaseURL: "https://afchalal-default-rtdb.firebaseio.com",
  projectId: "afchalal",
  storageBucket: "afchalal.appspot.com",
  messagingSenderId: "654452966392",
  appId: "1:654452966392:web:ec966380262ecfbc63cc0d",
  measurementId: "G-NRG96ZY926"
};
// var admin = require("firebase-admin");

// var serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://afchalal-default-rtdb.firebaseio.com"
// });

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
//analytics is optional for this tutoral 
  // firebase.analytics();

 export const storage = firebase.storage(app);
  const auth = app.auth();
export {auth}
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

