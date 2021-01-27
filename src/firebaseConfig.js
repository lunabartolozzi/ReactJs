import firebase from "firebase/app";
import "firebase/firestore";

const miConfiguracion = {
    apiKey: "AIzaSyCxcFc9IRx0io4k_cJ3m7pUIzhi2YedFCQ",
    authDomain: "react-lunabartolozzi.firebaseapp.com",
    projectId: "react-lunabartolozzi",
    storageBucket: "react-lunabartolozzi.appspot.com",
    messagingSenderId: "771840361727",
    appId: "1:771840361727:web:a27a9c180900a42897f8ca"  
};
 const app = firebase.initializeApp(miConfiguracion);

export const firestore = firebase.firestore(app);