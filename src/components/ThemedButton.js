import React from "react";

function ThemedButton({ title, className, onClick }) {
    return (
        <button onClick={onClick} className="---theme-btn">
            {title}
        </button>
    );
}

export default ThemedButton;
