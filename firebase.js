// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEoNN36Wj6sEdUZItZnPxH5pCdcBKuSLM",
  authDomain: "gaming-store-8bed5.firebaseapp.com",
  projectId: "gaming-store-8bed5",
  storageBucket: "gaming-store-8bed5.appspot.com",
  messagingSenderId: "397239337262",
  appId: "1:397239337262:web:26f68a79543ee7180c3abf"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const db= firebase.firestore();
const auth = firebase.auth();

export { auth };
export default db