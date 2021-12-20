
import { initializeApp } from "firebase/app";

import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7jsuFw7CQN-h3Fte7eatMfk9nR34Jk1Q",
  authDomain: "survey-final.firebaseapp.com",
  projectId: "survey-final",
  storageBucket: "survey-final.appspot.com",
  messagingSenderId: "728884584951",
  appId: "1:728884584951:web:859f4f81a9c689128b0ef2",
  measurementId: "G-G902CML74W",
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);



