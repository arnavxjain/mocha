import React, { useState } from "react";
import ColoredButton from "./ColoredButton";

function NewFeature() {

    const [post, setPost] = useState("");

    return (
        <div className="new">
            <div className="entry">
                <textarea value={post} onChange={(e) => setPost(e.target.value)} type="text" placeholder="Leave a mark on the blockchain. What’s poppin?"/>
                <button disabled={post.trim() == "" ? true : false}><ion-icon name="arrow-up-circle-outline"></ion-icon></button>
            </div>
            <div className="note">
                <p>
                    <ion-icon name="information-circle-outline"></ion-icon>
                    Note: Every new post uploaded is safely packaged to the blockchain via Web3 and it’s secure technologies.
                </p>
            </div>
            <div className="attachments">
                <ColoredButton buttonTitle="Image" iconTag="image-outline" colorHex="#FFF17657" fgHex="#6D6200"/>
                <ColoredButton buttonTitle="File" iconTag="document-outline" colorHex="#ff595957" fgHex="#FF5959"/>
                <ColoredButton buttonTitle="Link" iconTag="link-outline" colorHex="#FF902957" fgHex="#FF9029"/>
                <ColoredButton buttonTitle="Article" iconTag="newspaper-outline" colorHex="#76FF8457" fgHex="#004e08"/>
            </div>
        </div>
    )
}

export default NewFeature;
