import React, { useEffect, useState } from "react";
import login from "../functions/authentication";
import ThemedButton from "../components/ThemedButton";
import GoogleButton from "../components/GoogleButton";
import { doesUserExist } from "../functions/localhandler";

import darkIcon from "../assets/mocha_icon.svg";

export default function Login() {
    const [authState, setAuthState] = useState(0);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    if (doesUserExist()) {
        window.location.pathname = "/home";
    }

    useEffect(() => {
        if (selectedImage) {
          setImageUrl(URL.createObjectURL(selectedImage));
        }
    }, [selectedImage]);

    return (
        <div className="login-page">
        <div className="--form-el author">
            {authState === 0 ? (
                <>
                    <h2>Sign In To Your Mocha Account</h2>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <ThemedButton
                        className="form-btn"
                        title="Sign In"
                        onClick={login(email, password)}
                    />
                    <GoogleButton text="Sign In With Google" />
                    <hr></hr>
                    <button href="" onClick={() => setAuthState(1)} className="typical-link">
                        Create an account
                    </button>
                </>
            ) : (
                <>
                    <h2>Create A Mocha Account</h2>
                    {/* <label htmlFor="img-cap">
                        <input type="file" name="de" style={{ display: "none" }} id="img-cap" />
                        <button  className="file-btn">
                            <img style={{ width: 40, height: 40 }} src="https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?b=1&k=20&m=1222357475&s=170667a&w=0&h=S4rQXn5gFTcmcZJSBOxKr1ufmasJRLUX5dcBhBB6V-A=" alt="demo" />    
                        </button>
                    </label> */}
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Full Name" />
                    <input type="password" placeholder="Password" />
                    {/* <div className="upload-btn">
                        <input 
                            accept="image/*" 
                            // style={{ display: "none" }} 
                            type="file" 
                            className="select-image" 
                            // value={selectedImage}
                            onChange={e => setSelectedImage(e.target.files[0])}
                        />
                        {
                            imageUrl && selectedImage && (
                                <img src={imageUrl} style={{ width: 25, height: 25, borderRadius: 100, transform: "translateY(-1.8px)" }}/>
                            )
                        }
                    </div> */}
                    <ThemedButton className="form-btn" title="Sign Up" />
                    <GoogleButton text="Sign Up With Google" />
                    <hr></hr>
                    <button href="" onClick={() => setAuthState(0)} className="typical-link">
                        Log into existing account
                    </button>
                </>
            )}
        </div>
        <img className="bottom-img" src={darkIcon}/>
        </div>
    );
}
