import React, { useEffect, useState } from "react";
import login from "../functions/authentication";
import ThemedButton from "../components/ThemedButton";
import GoogleButton from "../components/GoogleButton";
import { doesUserExist } from "../functions/localhandler";

import darkIcon from "../assets/mocha_icon.svg";
import { registerWithEP, signInWithEP } from "../console";

export default function Login() {
    const [authState, setAuthState] = useState(0);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");
    const [fullName, setFullName] = useState("");

    const [memory, setMemory] = useState(true);

    if (doesUserExist()) {
        window.location.pathname = "/home";
    }

    const prePushVerification = () => {
        if (password.trim() == "" || email.trim() == ""|| fullName.trim() == "" || confirmPassword.trim() == "") {
            console.log("error!");
        } else {
            if (password !== confirmPassword) {
                console.log("verif error!");
            } else {
                registerWithEP({
                    fullName,
                    email,
                    password,
                    checked: memory
                })
            }
        }
    }

    return (
        <div className="login-page">
        <div className="--form-el author">
            {authState === 0 ? (
                <>
                    <h2>Sign In To Your Mocha Account</h2>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="checker">
                        <input type="checkbox" name="" id="rem" />
                        <label htmlFor="rem">Remember Me</label>
                    </div>
                    <ThemedButton
                        className="form-btn"
                        title="Sign In"
                        onClick={signInWithEP(email, password)}
                    />
                    <GoogleButton text="Sign In With Google" />
                    <hr></hr>
                    <button href="" onClick={() => setAuthState(1)} className="typical-link">
                        Create an account
                    </button>
                </>
            ) : (
                <>
                    <h2>Create A Mocha Account</h2>
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Verify Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <div className="checker">
                        <input type="checkbox" name="" id="rem" checked={memory} onChange={(e) => setMemory(e.target.checked)}/>
                        <label htmlFor="rem">Remember Me</label>
                    </div>
                    <ThemedButton className="form-btn" title="Sign Up" onClick={prePushVerification}/>
                    <GoogleButton text="Sign Up With Google" />
                    <hr></hr>
                    <button href="" onClick={() => setAuthState(0)} className="typical-link">
                        Log into existing account
                    </button>
                </>
            )}
        </div>
        <img className="bottom-img" src={darkIcon}/>
        </div>
    );
}
