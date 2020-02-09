import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7ENTVfO-9xDPtlncNrnpUyMPEdWYqPuc",
  authDomain: "erent-de3f7.firebaseapp.com",
  databaseURL: "https://erent-de3f7.firebaseio.com",
  projectId: "erent-de3f7",
  storageBucket: "erent-de3f7.appspot.com",
  messagingSenderId: "21896901379",
  appId: "1:21896901379:web:d70996b8ebe75fae3baf36"
};

// Firebase initialization
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth(); // for authentication
export const firestore = firebase.firestore(); // for firestore database

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

export const getUserDetails = async user => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    return;
  }
  return snapShot.data();
};

export default firebase;
