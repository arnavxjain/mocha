import React from "react";
import Feature from "../components/Feature";
import Header from "../components/Header";
import News from "../components/News";
import Recs from "../components/Recs";
import { doesUserExist } from "../functions/localhandler";

function Home() {
    if (!doesUserExist()) {
        window.location.pathname = "/login";
    }

    return (
        <div className="home">
            <Header />
            <div className="featured">
                <Recs />
                <Feature />
                <News />
            </div>
        </div>
    );
}

export default Home;
