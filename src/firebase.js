import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "***************************************",
	authDomain: "robinhood-app-4118d.firebaseapp.com",
	projectId: "robinhood-app-4118d",
	storageBucket: "robinhood-app-4118d.appspot.com",
	messagingSenderId: "***************************************",
	appId: "***************************************",
	measurementId: "***************************************",
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();

// export default db;

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
