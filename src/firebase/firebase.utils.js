import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDKPe9kg73YHGE7n7WA3c1V85JB3vfXO0A",
    authDomain: "meta-db-f2e1d.firebaseapp.com",
    projectId: "meta-db-f2e1d",
    storageBucket: "meta-db-f2e1d.appspot.com",
    messagingSenderId: "550374332806",
    appId: "1:550374332806:web:75157ae38863237197b407",
    measurementId: "G-PRFK71GY60"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;