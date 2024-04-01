// Importujemy funkcję initializeApp z modułu firebase/app
import { initializeApp } from "firebase/app";
// Importujemy funkcję getAuth z modułu firebase/auth
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
// Importujemy funkcję getFirestore z modułu firebase/firestore
import { collection, getDocs, getFirestore } from "firebase/firestore";

// Konfiguracja Firebase, zawierająca kluczowe informacje dla naszej aplikacji Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC9gUPIQcx3iLYpGLADHoWjYk6OBL3AY-Y",
  authDomain: "elements-c0b72.firebaseapp.com",
  projectId: "elements-c0b72",
  storageBucket: "elements-c0b72.appspot.com",
  messagingSenderId: "862842750511",
  appId: "1:862842750511:web:ed5d6dfe3022507ed328da",
  measurementId: "G-Y4H810C7W6",
};

// Inicjalizacja Firebase za pomocą funkcji initializeApp, która zwraca instancję aplikacji Firebase
const app = initializeApp(firebaseConfig);

// Inicjalizacja modułu autentykacji Firebase za pomocą funkcji getAuth
// Ta funkcja przyjmuje jako argument zainicjalizowaną wcześniej instancję aplikacji Firebase (app)
const auth = getAuth(app);

// Inicjalizacja bazy danych Firestore za pomocą funkcji getFirestore
// Podobnie jak w przypadku autentykacji, funkcja ta przyjmuje jako argument instancję aplikacji Firebase (app)
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

// Eksportowanie zainicjowanej aplikacji Firebase oraz modułów autentykacji i bazy danych Firestore
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
