import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth"; // <-- use client SDK
import { getFirestore } from "firebase/firestore"; // <-- use client SDK

const firebaseConfig = {
  apiKey: "AIzaSyCLq48J9EwYi1KtxbC-P4-YcrhEllzmDmQ",
  authDomain: "ai-interview-cbaaf.firebaseapp.com",
  projectId: "ai-interview-cbaaf",
  storageBucket: "ai-interview-cbaaf.appspot.com", // fixed typo: .app -> .appspot.com
  messagingSenderId: "663657260469",
  appId: "1:663657260469:web:1aade9ede0cb4dadc665fc",
  measurementId: "G-150L0GXWT0"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);