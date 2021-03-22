import firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyCWUDmmBKOacNRBOKcTiGu0D20Nf1M_87o",
    authDomain: "testing-4f0ca.firebaseapp.com",
    databaseURL: "https://testing-4f0ca-default-rtdb.firebaseio.com",
    projectId: "testing-4f0ca",
    storageBucket: "testing-4f0ca.appspot.com",
    messagingSenderId: "678870599492",
    appId: "1:678870599492:web:19af202d7eac643ec53911",
    measurementId: "G-70GRCQ3DGX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  export default firebase;