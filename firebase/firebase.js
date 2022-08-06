import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyBsX45cEOM-XADs8UyblFgIrN4IVtfPp8s",
    authDomain: "portfolio-86fbb.firebaseapp.com",
    databaseURL: "https://portfolio-86fbb-default-rtdb.firebaseio.com",
    projectId: "portfolio-86fbb",
    storageBucket: "portfolio-86fbb.appspot.com",
    messagingSenderId: "335491483845",
    appId: "1:335491483845:web:610c07f6368913e9e008ac",
    measurementId: "G-QLNVG5QJ02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db