import React from "react";
import Smiley from "./images/smiley.png";
import "./style.css"
export default function Header(){
    return(
        <header className="headerdiv">
            <img src={Smiley} alt="something"  className="headerpic"/>
            <h2 className="headerName">Meme Generator</h2>
            <h3>React project - 2</h3>
        </header>
    )
}