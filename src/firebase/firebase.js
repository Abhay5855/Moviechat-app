import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
require('dotenv').config();
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_APIAUTH_DOMAIN,
  projectId: process.env.REACT_APP_API_PROJECTID,
  storageBucket: process.env.REACT_APP_API_STORE_BUCKET,
  messagingSenderId: process.env.REACT_APP_API_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_API_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const auth = getAuth(app);