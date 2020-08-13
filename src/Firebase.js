import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA5IPqOrsi2GUAWAJzi37UDQYhDJAbbouw",
    authDomain: "sultan-alimov.firebaseapp.com",
    databaseURL: "https://sultan-alimov.firebaseio.com",
    projectId: "sultan-alimov",
    storageBucket: "sultan-alimov.appspot.com",
    messagingSenderId: "420387690299",
    appId: "1:420387690299:web:92d9623ae66717ff96491e",
    measurementId: "G-N3L3QHM17G"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };