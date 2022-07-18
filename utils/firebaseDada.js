import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: 'AIzaSyCwEQorO2FE1fArd5d62NXgCu4Yg_FsVbk',
  authDomain: 'l-etoile-a-gourmandise.firebaseapp.com',
  projectId: 'l-etoile-a-gourmandise',
  storageBucket: 'l-etoile-a-gourmandise.appspot.com',
  messagingSenderId: '679590930430',
  appId: '1:679590930430:web:72d15a0b506d5804f5c2af',

  // ...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
