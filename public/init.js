// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBrd7Mz9U_Zk9e740URvTbv2K2oi8LkpMU",
  authDomain: "biteclub.firebaseapp.com",
  databaseURL: "https://biteclub.firebaseio.com",
  projectId: "biteclub",
  storageBucket: "biteclub.appspot.com",
  messagingSenderId: "382914804764",
  appId: "1:382914804764:web:bf7f897b2c521ba7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();