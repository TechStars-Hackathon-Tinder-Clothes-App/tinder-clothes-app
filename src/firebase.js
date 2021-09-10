import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDzVXGfesiZeg2CyZC8g3EJTmVLMTnWmnE",
    authDomain: "tinder-clothes-app.firebaseapp.com",
    databaseURL: "https://tinder-clothes-app-default-rtdb.firebaseio.com/",
    projectId: "tinder-clothes-app",
    storageBucket: "tinder-clothes-app.appspot.com",
    messagingSenderId: "181657258029",
    appId: "1:181657258029:web:76ae30faed1617f288d0a4",
    measurementId: "G-W164FEQ02D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;