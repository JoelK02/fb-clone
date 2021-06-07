import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDhwJbl19u6k3YBcV_3DWi4OmnNZkrEybk",
    authDomain: "facebook-clone-c771a.firebaseapp.com",
    projectId: "facebook-clone-c771a",
    storageBucket: "facebook-clone-c771a.appspot.com",
    messagingSenderId: "869954596953",
    appId: "1:869954596953:web:7a6cff68ab74efa0b30148",
    measurementId: "G-7R75EPSF2C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;