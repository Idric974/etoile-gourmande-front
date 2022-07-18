import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCwEQorO2FE1fArd5d62NXgCu4Yg_FsVbk',
  authDomain: 'l-etoile-a-gourmandise.firebaseapp.com',
  projectId: 'l-etoile-a-gourmandise',
  storageBucket: 'l-etoile-a-gourmandise.appspot.com',
  messagingSenderId: '679590930430',
  appId: '1:679590930430:web:72d15a0b506d5804f5c2af',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
