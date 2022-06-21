import React from "react";
import Header from "../components/Header";
import { doesUserExist } from "../functions/localhandler";

function Home() {
    // if (!doesUserExist()) {
    // window.location.pathname = "/login";
    // }

    return (
        <div className="home">
            <Header />
        </div>
    );
}

export default Home;
