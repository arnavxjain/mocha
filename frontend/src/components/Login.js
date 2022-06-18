import React, { useState } from "react";
import login from "../functions/authentication";
import ThemedButton from "./ThemedButton";

export default function Login() {

    const [authState, setAuthState] = useState(0);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
            <div className="--form-el author">
                {
                    authState === 0 ? (
                        <>
                            <h2>Sign In To Your Mocha Account</h2>
                            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <ThemedButton className="form-btn" title="Sign In" onClick={login(email, password)}/>
                            <hr></hr>
                            <a onClick={() => setAuthState(1)} className="typical-link">Create an account</a>
                        </>
                    ) : (
                        <>
                            <h2>Create A Mocha Account</h2>
                            <input type="email" placeholder="Email" />
                            <input type="email" placeholder="Username" />
                            <input type="password" placeholder="Password" />
                            <input type="password" placeholder="Confirm Password" />
                            <ThemedButton className="form-btn" title="Sign Up" />
                            <hr></hr>
                            <a onClick={() => setAuthState(0)} className="typical-link">Log into existing account</a>
                        </>
                    )
                }
            </div>
        )
}
