import React from "react";
import Feature from "../components/Feature";
import Header from "../components/Header";
import { doesUserExist } from "../functions/localhandler";

function Home() {
    if (!doesUserExist()) {
        window.location.pathname = "/login";
    }

    return (
        <div className="home">
            <Header />
            <div className="featured">
                <Feature />
            </div>
        </div>
    );
}

export default Home;
