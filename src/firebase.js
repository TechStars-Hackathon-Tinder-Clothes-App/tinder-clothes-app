import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDzVXGfesiZeg2CyZC8g3EJTmVLMTnWmnE",
    authDomain: "tinder-clothes-app.firebaseapp.com",
    projectId: "tinder-clothes-app",
    storageBucket: "tinder-clothes-app.appspot.com",
    messagingSenderId: "181657258029",
    appId: "1:181657258029:web:76ae30faed1617f288d0a4",
    measurementId: "G-W164FEQ02D"
    /*apiKey: "CHANGE-TO-YOURS",
    authDomain: "tinder-clone-4cf1f.firebaseapp.com",
    databaseURL: "https://tinder-clone-4cf1f.firebaseio.com",
    projectId: "tinder-clone-4cf1f",
    storageBucket: "tinder-clone-4cf1f.appspot.com",
    messagingSenderId: "474037409508",
    appId: "1:474037409508:web:8c6a773aab9ee10bb4bef1",
    measurementId: "G-NZQK8P6ERW"*/
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;