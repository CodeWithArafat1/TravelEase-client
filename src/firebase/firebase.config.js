// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCymWA3plcp_gwkFci5SUb5qLrLxOJv_6w",
  authDomain: "travelease-37421.firebaseapp.com",
  projectId: "travelease-37421",
  storageBucket: "travelease-37421.firebasestorage.app",
  messagingSenderId: "960008682163",
  appId: "1:960008682163:web:9d8fd53bedd771ae5f8ec6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);