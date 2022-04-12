// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKqlgYB8e-bdMUNzAZlUMOT2NgHC8sybs",
  authDomain: "nazmul-car-services.firebaseapp.com",
  projectId: "nazmul-car-services",
  storageBucket: "nazmul-car-services.appspot.com",
  messagingSenderId: "452198384734",
  appId: "1:452198384734:web:4d84a64bc6423224de60cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;