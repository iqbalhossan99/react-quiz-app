import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_ID,

  apiKey: "AIzaSyCz7fKEQGgYh-VvKumOVT_fhGHZr56bN7w",
  authDomain: "react-quiz-app-f4505.firebaseapp.com",
  projectId: "react-quiz-app-f4505",
  storageBucket: "react-quiz-app-f4505.appspot.com",
  messagingSenderId: "202854434500",
  appId: "1:202854434500:web:1fe1a98e600f955448eb91",
  databaseURL: "https://react-quiz-app-f4505-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
