"use client";

import { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default function Login() {

  const [jsonInput, setJsonInput] = useState("");
  const [message, setMessage] = useState("");


  const handleUpload = async () => {
    if (!jsonInput.trim()) {
      setMessage("Please enter JSON data.");
      return;
    }
    if (!db) {
      setMessage(
        "Firebase not configured. Add your Firebase config to environment variables (NEXT_PUBLIC_FIREBASE_*)."
      );
      console.error("db is not initialized. Check firebaseConfig and env vars.");
      return;
    }
    try {
      const data = JSON.parse(jsonInput);
      if (!Array.isArray(data.dummyPosts)) {
        setMessage("Invalid JSON: 'dummyPosts' array not found.");
        return;
      }
      for (const post of data.dummyPosts) {
        await addDoc(collection(db, "posts"), post);
      }
      setMessage("Upload successful! Posts added to Firestore.");
    } catch (err) {
      console.error(err);
      setMessage("Error uploading: " + (err instanceof Error ? err.message : "Unknown error"));
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="bg-white dark:bg-zinc-900 p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Login & Upload JSON</h1>
        <textarea
          value={jsonInput}
          onChange={e => setJsonInput(e.target.value)}
          rows={12}
          placeholder="Paste your JSON here..."
          className="block w-full mb-4 border border-gray-300 rounded px-3 py-2 font-mono text-sm"
        />
        <button
          onClick={handleUpload}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Upload
        </button>
        {message && <p className="mt-4 text-center text-sm text-gray-700 dark:text-gray-300">{message}</p>}
      </div>
    </div>
  );
}
