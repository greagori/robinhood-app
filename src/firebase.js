import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBJEsGU9VE1gc08IkcQTgoSloriuW6OeSo",
	authDomain: "robinhood-app-4118d.firebaseapp.com",
	projectId: "robinhood-app-4118d",
	storageBucket: "robinhood-app-4118d.appspot.com",
	messagingSenderId: "980217875269",
	appId: "1:980217875269:web:fa6cd9897eeb43ea11cc2c",
	measurementId: "G-R3WH0L0NR7",
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();

// export default db;

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
