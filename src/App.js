import React, { useEffect, useState } from "react";
import Login from "./screens/Login";
import darkIcon from "./assets/mocha_icon.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GoogleButton from "./components/GoogleButton";
import Home from "./screens/Home";

function App() {
    // const [auth, setAuth] = useState("out");
    const [user, setUser] = useState();

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
