// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUlVnLv-lQZ42hczgEu-7iEqhrAn903Bg",
  authDomain: "nextjs-firebase3.firebaseapp.com",
  projectId: "nextjs-firebase3",
  storageBucket: "nextjs-firebase3.firebasestorage.app",
  messagingSenderId: "534505432383",
  appId: "1:534505432383:web:bc0e7b10927fa69a3fdf8a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Export function to initialize firebase.
export const initFirebase = () => {
  return app;
} 
