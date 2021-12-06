
import firebase from 'firebase';

import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAFZqe5vLWVIbZ-rbUX0K-i1kVyUdV4xAQ",
    authDomain: "react-chat-app-aba6c.firebaseapp.com",
    projectId: "react-chat-app-aba6c",
    storageBucket: "react-chat-app-aba6c.appspot.com",
    messagingSenderId: "894523488755",
    appId: "1:894523488755:web:e24b965216493c91a5fa86"
};



firebase.initializeApp(firebaseConfig);

export default firebase

export const auth = firebase.auth();