"use client";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initFirebase } from "../../firebase/firebaseApp";

export default function SignInButton() {
  // Initialize firebase
 // const app = initFirebase();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
  };

  return (
    <button onClick={signIn}>
      <div className="bg-blue-600 text-white rounded-md p-2 w-48">
        Sign In
      </div>
    </button>
  );
}
