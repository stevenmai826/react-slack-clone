import firebase from 'firebase/app';
import "firebase/auth"
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCFSZVAOCYwHayUebcolQZcwhIe9KxR3zo",
    authDomain: "react-slack-clone-b3b9b.firebaseapp.com",
    databaseURL: "https://react-slack-clone-b3b9b.firebaseio.com",
    projectId: "react-slack-clone-b3b9b",
    storageBucket: "react-slack-clone-b3b9b.appspot.com",
    messagingSenderId: "438108599871",
    appId: "1:438108599871:web:6e11c6352e2f2462"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;