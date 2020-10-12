import firebase from 'firebase/app'
import 'firebase/firestore'
require('firebase/auth')

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDQIoencSXDlBQDNwV9ZhDN7aItRmlJ4sg",
    authDomain: "ykdelete.firebaseapp.com",
    databaseURL: "https://ykdelete.firebaseio.com",
    projectId: "ykdelete",
    storageBucket: "ykdelete.appspot.com",
    messagingSenderId: "870656007488",
    appId: "1:870656007488:web:04f43ee99899ddfc4deea5",
    measurementId: "G-F3H5SZ5JRG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()

export default db;