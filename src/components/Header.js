import React from "react";
import { logout } from "../functions/localhandler";
import darkIcon from "../assets/mocha_icon.svg";

function Header() {
    return (
        <div className="header">
            <a href="/home">
                <img src={darkIcon} alt="icon" />
            </a>
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
