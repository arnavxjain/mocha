import React from "react";
import { logout } from "../functions/localhandler";

function Header() {
    return (
        <div className="header">
            <a href="/home"><h1>mocha</h1></a>
            <input
                type="text"
                placeholder="Search for people around the globe"
            />
            <div className="header-controls">
                <button className="red-btn" onClick={logout}>
                    Log Out
                </button>
                <div className="profile-link"></div>
            </div>
        </div>
    );
}

export default Header;
