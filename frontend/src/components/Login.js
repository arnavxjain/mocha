import React from "react";
import darkIcon from "../assets/logo-dark.svg";
import ThemedButton from "./ThemedButton";

export default function Login() {
    return (
        <div className="--form-el">
            <h2>Sign In To Your Mocha Account</h2>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <ThemedButton className="form-btn" title="Sign In" />
            <hr></hr>
        </div>
    );
}
