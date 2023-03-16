import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBN-dK2xK52aNI6qyXgBLXI4NFOYRXeBeM",
    authDomain: "ecommerce-3d734.firebaseapp.com",
    projectId: "ecommerce-3d734",
    storageBucket: "ecommerce-3d734.appspot.com",
    messagingSenderId: "739230395414",
    appId: "1:739230395414:web:1800aa449df2fe008fd937",
    measurementId: "G-7K5TLWHGW5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth, db}
