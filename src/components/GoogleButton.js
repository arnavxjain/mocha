import React from "react";
import { signInWithGoogle } from "../console";
import googleIcon from "../assets/google.png";
// import { signInWithGoogle } from '../firebase/firebase';

function GoogleButton({ text }) {
    return (
        <div onClick={signInWithGoogle} className="google_button">
            {/* <ion-icon name="logo-google"></ion-icon> */}
            <img src={googleIcon} alt="icon" />
            <span>{text}</span>
        </div>
    );
}

export default GoogleButton;
