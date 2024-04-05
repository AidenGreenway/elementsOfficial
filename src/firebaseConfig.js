import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9gUPIQcx3iLYpGLADHoWjYk6OBL3AY-Y",
  authDomain: "elements-c0b72.firebaseapp.com",
  projectId: "elements-c0b72",
  storageBucket: "elements-c0b72.appspot.com",
  messagingSenderId: "862842750511",
  appId: "1:862842750511:web:ed5d6dfe3022507ed328da",
  measurementId: "G-Y4H810C7W6",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);
const colRef = collection(db, "posts");
const ColRef1 = collection(db, "users");
const ColRef2 = collection(db, "firePosts");
const ColRef3 = collection(db, "waterPosts");
const ColRef4 = collection(db, "airPosts");
const ColRef5 = collection(db, "earthPosts");

getDocs(colRef).then((snapshot) => {
  console.log(snapshot.docs);
});

export {
  ColRef1,
  ColRef2,
  ColRef3,
  ColRef4,
  ColRef5,
  app,
  auth,
  colRef,
  createUserWithEmailAndPassword,
  db,
};
