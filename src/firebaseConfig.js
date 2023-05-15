import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{ getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyA94vKtbDbB9ZGeoiuVacVS5D6uwjK3SFI",
  authDomain: "react-coder-34743.firebaseapp.com",
  projectId: "react-coder-34743",
  storageBucket: "react-coder-34743.appspot.com",
  messagingSenderId: "273839739070",
  appId: "1:273839739070:web:2aedacae0202016e574eef",
  measurementId: "G-8WEQS0KDVF"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)