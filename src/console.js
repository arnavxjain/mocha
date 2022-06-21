import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

import { v4 as uuidv4 } from "uuid";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
} from "firebase/auth";

import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore/lite";
import { saveUserByHandler } from "./functions/localhandler";

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

const months = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

export const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        let date = `${months[new Date().getMonth()]} ${new Date().getDate()}`;
        const user = {
            fullname: res.user.displayName,
            email: res.user.email,
            photoURL: res.user.photoURL,
            uid: res.user.uid,
            bio: "",
            dob: "",
            joinDate: date,
            followers: [],
            following: [],
        };

        const q = query(
            collection(db, "users"),
            where("uid", "==", res.user.uid)
        );
        const docs = await getDocs(q);

        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), user);
            saveUserByHandler(user);
            window.location.pathname = "/home";
        } else {
            saveUserByHandler(docs[0]);
            console.log(docs[0]);
            window.location.pathname = "/home";
        }
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
};

export const signInWithEP = async (data) => {
    try {
        const res = await signInWithEP(data.email, data.password);
        console.log(res);
    } catch (error) {
        console.error(error);
    }
};

export const registerWithEP = async (data) => {
    try {
        const res = await createUserWithEmailAndPassword(
            auth,
            data.email,
            data.password
        );

        let date = `${months[new Date().getMonth()]} ${new Date().getDate()}`;
        const user = {
            fullname: data.fullName,
            email: data.email,
            photoURL: "https://picsum.photos/200",
            uid: uuidv4(),
            bio: "",
            dob: "",
            joinDate: date,
            followers: [],
            following: [],
        };

        const q = query(
            collection(db, "users"),
            where("uid", "==", res.user.uid)
        );
        const docs = await getDocs(q);

        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), user);
            saveUserByHandler(user);
            auth.setPersistence(
                data.checked
                    ? auth.Auth.Persistence.LOCAL
                    : auth.Auth.Persistence.SESSION
            );
            window.location.pathname = "/home";
        } else {
            console.log("account already exists!");
        }
    } catch (error) {
        console.error(error);
    }
};

export { db, auth, storage };
