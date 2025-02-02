import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBtn_eAuLPDB1ML1PLAQmKlm_cpvLkvgmQ",
  authDomain: "financly-fa2db.firebaseapp.com",
  projectId: "financly-fa2db",
  storageBucket: "financly-fa2db.appspot.com",
  messagingSenderId: "483707680125",
  appId: "1:483707680125:web:b8cc599d6733c3d8434814",
  measurementId: "G-PNJ3FHL8C1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

export { db, auth, provider, doc, setDoc };
