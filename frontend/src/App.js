import React, { useEffect, useState } from "react";
import Login from "./screens/Login";
import darkIcon from "./assets/mocha_icon.svg";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GoogleButton from "./components/GoogleButton";
import Home from "./screens/Home";

function App() {
    // const [auth, setAuth] = useState("out");
    const [user, setUser] = useState("m");

    return (
        <div className="App">
            {
                user == null ? (
                    <div className="login-page">
                        <Login />
                        <img src={darkIcon} className="bottom-img"/>
                    </div>
                ) : (
                    <div className="app-data">
                        <Router>
                            <Routes>
                                <Route path="/home" element={<Home />}/>
                            </Routes>
                        </Router>
                    </div>
                )
            }
        </div>
    );
}

export default App;
