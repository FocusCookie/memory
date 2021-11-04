import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDilAWoXzIuFwB8ZkPlt7_vX3sAfeB1las",
  authDomain: "memory-f0679.firebaseapp.com",
  databaseURL:
    "https://memory-f0679-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "memory-f0679",
  storageBucket: "memory-f0679.appspot.com",
  messagingSenderId: "627904537411",
  appId: "1:627904537411:web:2b3fa5f4ac492072b205f6",
};

const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export { firebase, database };
