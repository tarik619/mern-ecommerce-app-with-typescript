import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "mern-ecommerce-2024-f35fc.firebaseapp.com",
  projectId: "mern-ecommerce-2024-f35fc",
  storageBucket: "mern-ecommerce-2024-f35fc.appspot.com",
  messagingSenderId: "306359382357",
  appId: "1:306359382357:web:0aa425dbe7c5bf194dffdc",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
