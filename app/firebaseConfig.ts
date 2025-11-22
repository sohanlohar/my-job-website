// Firebase configuration and initialization for Next.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

// Use NEXT_PUBLIC_ env vars so values are available in the browser
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "",
};

let db: Firestore | null = null;

if (firebaseConfig.apiKey) {
  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  db = getFirestore(app);
} else {
  // Friendly warning to help debugging when env vars are missing
  // Do NOT throw here to avoid hard crashes during builds; callers should handle `db` being null.
  // Add these env vars to `.env.local` or your deployment environment.
  // Example `.env.local` keys:
  // NEXT_PUBLIC_FIREBASE_API_KEY=...
  // NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
  // NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
  // NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
  // NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
  // NEXT_PUBLIC_FIREBASE_APP_ID=...
  //
  // See README in Firebase console for the config values.
  // We intentionally avoid throwing so the app can render a helpful message instead.
  // eslint-disable-next-line no-console
  console.warn(
    "Firebase not initialized: missing NEXT_PUBLIC_FIREBASE_API_KEY. Add your Firebase config to environment variables."
  );
}

export { db };
