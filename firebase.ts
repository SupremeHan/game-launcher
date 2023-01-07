import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBugtZjx11rraXsbJ8CQ7_rFwRZKVGHy7Y',
  authDomain: 'game-launcher-auth.firebaseapp.com',
  projectId: 'game-launcher-auth',
  storageBucket: 'game-launcher-auth.appspot.com',
  messagingSenderId: '820186895766',
  appId: '1:820186895766:web:3afe309af7098aadfcb9b7',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
