// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOg-5Llg1uF4h7p8VsWCt8fMPwWNdf__M",
  authDomain: "my-store-app-c91db.firebaseapp.com",
  projectId: "my-store-app-c91db",
  storageBucket: "my-store-app-c91db.appspot.com",
  messagingSenderId: "794420476652",
  appId: "1:794420476652:web:acca02e04f37e4f0b243c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Auth persistence set to local storage succesfully");
  })
  .catch(error => {
    console.log("Error setting auth persistence to local storage: ", error);
  })