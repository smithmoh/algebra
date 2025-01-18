import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBuBLFkw95ruF9OIRiioifKN_2ebnTastU",
  authDomain: "algebra-web.firebaseapp.com",
  projectId: "algebra-web",
  storageBucket: "algebra-web.firebasestorage.app",
  messagingSenderId: "73192029132",
  appId: "1:73192029132:web:7414953f442414dcc03b69",
  measurementId: "G-CPC1JCK631"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;