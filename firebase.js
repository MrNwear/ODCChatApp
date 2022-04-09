import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBu9hZFimU4TqaxzvO7pmKOKymDxOUNnlA",
    authDomain: "chatapp-b1ec5.firebaseapp.com",
    projectId: "chatapp-b1ec5",
    storageBucket: "chatapp-b1ec5.appspot.com",
    messagingSenderId: "85176783725",
    appId: "1:85176783725:web:048d7ef879b2d5a6a50064"
};
let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };