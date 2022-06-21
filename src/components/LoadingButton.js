import React from "react";
import loadingIcon from "../assets/loader.gif";
import loadingIcon2 from "../assets/loader2.gif";

function LoadingButton() {
    return (
        <button className="---theme-btn loader-btn">
            <img src={loadingIcon} alt="loader" />
        </button>
    );
}

export default LoadingButton;
