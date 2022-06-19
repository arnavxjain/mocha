import React from "react";
import { logout } from "../functions/localhandler";

function Header() {
    return (
        <div className="header">
            <h1>mocha</h1>
            <input
                type="text"
                placeholder="Search for people around the globe"
            />
            <div className="header-controls">
                <button onClick={logout}>Log Out</button>
            </div>
        </div>
    );
}

export default Header;
