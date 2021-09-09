// import * as firebase from "firebase/app";
// import "firebase/auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// if (typeof window !== "undefined" && !firebase.apps.length) {
const clientCredentials = {
  apiKey: "AIzaSyDeSBIqEuk52LrLo_b8Khi48p-tvhyckn4",
  authDomain: "rafaflix2-6825a.firebaseapp.com",
  projectId: "rafaflix2-6825a",
  storageBucket: "rafaflix2-6825a.appspot.com",
  messagingSenderId: "411830194963",
  appId: "1:411830194963:web:b94710b083afdb3e34c0e6",
};

// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
// }
// if (!firebase.apps.length) {
firebase.initializeApp(clientCredentials);
// }

export default firebase;

// export const auth = Firebase.auth();
// export const provider = new firebase.auth.GoogleAuthProvider();
// export const signInWithGoogle = auth.signInWithPopup(provider);
