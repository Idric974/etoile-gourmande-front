import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyCwEQorO2FE1fArd5d62NXgCu4Yg_FsVbk',
  authDomain: 'l-etoile-a-gourmandise.firebaseapp.com',
  projectId: 'l-etoile-a-gourmandise',
  storageBucket: 'l-etoile-a-gourmandise.appspot.com',
  messagingSenderId: '679590930430',
  appId: '1:679590930430:web:72d15a0b506d5804f5c2af',
});

export const auth = app.auth();
export default app;
