import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";


var myconfig = {
    apiKey: "process.env.REACT_APP_FIREBASE_APIKEY",
    authDomain: "process.env.REACT_APP_FIREBASE_AUTH_DOMAIN",
    databaseURL: "https://cpd-team-slowdit-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "process.env.REACT_APP_FIREBASE_PROJECTID,",
    storageBucket: "process.env.REACT_APP_FIREBASE_STORAGEBUCKET",
    messagingSenderId: "process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID",
    appId: "process.env.REACT_APP_FIREBASE_APPID",
    measurementId: "process.env.REACT_APP_FIREBASE_MEASUREMENTID"
};



const app = initializeApp(myconfig);

export default app;
