import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { doesUserExist, saveUserByHandler } from "./functions/localhandler";

const firebaseConfig = {
    apiKey: "AIzaSyAcMKb5jGXN5LwxYEMKCr1jnUunTDxvJec",
    authDomain: "mocha-b221a.firebaseapp.com",
    projectId: "mocha-b221a",
    storageBucket: "mocha-b221a.appspot.com",
    messagingSenderId: "988198958098",
    appId: "1:988198958098:web:496df5086a6c01928454cb",
    measurementId: "G-3YEYSWXKT0",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);
//const provider=new GoogleAuthProvider()
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = {
            fullname: res.user.displayName,
            email: res.user.email,
            photoURL: res.user.photoURL,
            uid: res.user.uid,
        };
        console.log(doesUserExist());
        saveUserByHandler(user);
        console.log(doesUserExist());
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
};

export { db, auth, storage };
