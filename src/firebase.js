import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBRBk-GLAdGCRXqZP2z1qpT3mbJGHwPd3Q",
  authDomain: "netflix-clone-estudo-2022.firebaseapp.com",
  projectId: "netflix-clone-estudo-2022",
  storageBucket: "netflix-clone-estudo-2022.appspot.com",
  messagingSenderId: "377406639732",
  appId: "1:377406639732:web:03073b8b25b5ec05994b21",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
