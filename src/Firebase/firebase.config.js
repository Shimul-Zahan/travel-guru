// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFmbqF5t3YrpomedLWxpUSby4mQjWPb60",
    authDomain: "travel-guru-4f2cf.firebaseapp.com",
    projectId: "travel-guru-4f2cf",
    storageBucket: "travel-guru-4f2cf.appspot.com",
    messagingSenderId: "33012773845",
    appId: "1:33012773845:web:54b9533079f072240b035c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;