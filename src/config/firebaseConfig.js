import firebase from "firebase";

const config = {
  apiKey: "AIzaSyA269AnAso2YW0nHP2DzmgcSiWmiKQp9YU",
  authDomain: "beatup-5db43.firebaseapp.com",
  databaseURL: "https://beatup-5db43.firebaseio.com",
  projectId: "beatup-5db43",
  storageBucket: "beatup-5db43.appspot.com",
  messagingSenderId: "1017004715349",
  appId: "1:1017004715349:web:b40b4c4928f7c8a30953dc",
  measurementId: "G-MGE2SHPBMJ",
};

firebase.initializeApp(config);
firebase.analytics();

export function firebaseListener(func) {
  firebase.auth().onAuthStateChanged(
    function(user) {
      if (user) {
        // console.log("User log in success", user);
        func(true, user);
      } else {
        // console.log("User log in failed", user);
        func(false);
      }
    },
    function(error) {
      console.log(error);
    }
  );
}

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
export const db = firebase.firestore();
export const firestorage = firebase.storage();
