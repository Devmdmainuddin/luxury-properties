
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDj1nUxJWn6NjUAyV6gvmLSURWPTG893l0",
  authDomain: "luxury-properties-a2a28.firebaseapp.com",
  projectId: "luxury-properties-a2a28",
  storageBucket: "luxury-properties-a2a28.appspot.com",
  messagingSenderId: "700313295219",
  appId: "1:700313295219:web:a7e4a3728fe0ad424c4d06"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth