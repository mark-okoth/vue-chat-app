import firebase from 'firebase/app';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyDYtEBLByqKq2aYWBE7FSBBvsXDdB-VZFg",
    authDomain: "mark-chart.firebaseapp.com",
    databaseURL: "https://mark-chart.firebaseio.com",
    projectId: "mark-chart",
    storageBucket: "mark-chart.appspot.com",
    messagingSenderId: "315293126212",
    appId: "1:315293126212:web:cf668db8fac160f1"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  firebase.firestore().settings;

  export default firebaseApp.firestore()