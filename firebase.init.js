// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxRb3i5sviJT5DdsxlMfIF2Tp5q14-N3s",
    authDomain: "employee-curd-1dbb0.firebaseapp.com",
    projectId: "employee-curd-1dbb0",
    storageBucket: "employee-curd-1dbb0.appspot.com",
    messagingSenderId: "181716323738",
    appId: "1:181716323738:web:2acabcb26c6b66e78d3e23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;