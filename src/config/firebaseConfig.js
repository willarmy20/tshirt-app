import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyBbYhfZwXCqVcY-yYsCsPagdltn0vxNJSE",
    authDomain: "shirts-bfb9e.firebaseapp.com",
    projectId: "shirts-bfb9e",
    storageBucket: "shirts-bfb9e.appspot.com",
    messagingSenderId: "152911601263",
    appId: "1:152911601263:web:2292ebc729aa162d28379a",
    measurementId: "G-HHWP36P4Y3"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export{
    storage, firebase as default
}