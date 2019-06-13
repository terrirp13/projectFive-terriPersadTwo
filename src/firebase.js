import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAC5hdqH5vb6AUfqpz1TCLQ2D40h-P-e9U",
    authDomain: "zomato-app-dd574.firebaseapp.com",
    databaseURL: "https://zomato-app-dd574.firebaseio.com",
    projectId: "zomato-app-dd574",
    storageBucket: "zomato-app-dd574.appspot.com",
    messagingSenderId: "393060330406",
    appId: "1:393060330406:web:b0c77e9b191bc3b1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;