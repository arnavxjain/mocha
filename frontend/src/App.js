import { useState } from "react";
import Login from "./components/Login";
import darkIcon from "./assets/mocha_icon.svg";

function App() {
    const [auth, setAuth] = useState("out");

    return (
        <div className="App">
            {auth === "out" ? (
                <div className="-login-page">
                    <img src={darkIcon} alt="" className="form-icon" />
                    <Login />
                    <div className="help">Mocha 2022</div>
                </div>
            ) : (
                <h1>mocha!</h1>
            )}
        </div>
    );
}

export default App;
