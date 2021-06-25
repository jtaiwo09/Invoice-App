import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyC5C-x1Sy1dG_X8Dp5JIZ-EypzvJ5eSo5U",
  authDomain: "invoice-app-8b163.firebaseapp.com",
  projectId: "invoice-app-8b163",
  storageBucket: "invoice-app-8b163.appspot.com",
  messagingSenderId: "666780533741",
  appId: "1:666780533741:web:d5766d128012ef31b9dde4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
