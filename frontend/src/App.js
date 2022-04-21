import { useState } from "react";
import Login from "./components/Login";

function App() {
    const [auth, setAuth] = useState("out");

    return (
        <div className="App">
            {auth === "out" ? 
                <div className="-login-page">
                    <Login />    
                </div>
            : <h1>mocha!</h1>}
        </div>
    );
}

export default App;
