import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9hTFqxkwpy7AvY1VrAm-DYOfxv3LxRh4",
  authDomain: "moviecom-52619.firebaseapp.com",
  projectId: "moviecom-52619",
  storageBucket: "moviecom-52619.appspot.com",
  messagingSenderId: "601084068695",
  appId: "1:601084068695:web:759443623db748d1f27412"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const auth = getAuth(app);