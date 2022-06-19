import React, { useState } from "react";
import login from "../functions/authentication";
import ThemedButton from "../components/ThemedButton";
import GoogleButton from "../components/GoogleButton";
import { doesUserExist } from "../functions/localhandler";

export default function Login() {
    const [authState, setAuthState] = useState(0);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    if (doesUserExist()) {
        window.location.pathname = "/home";
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
                    <ThemedButton
                        className="form-btn"
                        title="Sign In"
                        onClick={login(email, password)}
                    />
                    <GoogleButton text="Sign In With Google" />
                    <hr></hr>
                    <a onClick={() => setAuthState(1)} className="typical-link">
                        Create an account
                    </a>
                </>
            ) : (
                <>
                    <h2>Create A Mocha Account</h2>
                    <input type="email" placeholder="Email" />
                    <input type="email" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <ThemedButton className="form-btn" title="Sign Up" />
                    <GoogleButton text="Sign Up With Google" />
                    <hr></hr>
                    <a onClick={() => setAuthState(0)} className="typical-link">
                        Log into existing account
                    </a>
                </>
            )}
        </div>
        </div>
    );
}
