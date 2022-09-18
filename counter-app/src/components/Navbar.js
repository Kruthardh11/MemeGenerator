import React from "react";
import   '../components/style.css';
import Logo from '../images/bleach-logo.png';
export default function Navbar(){
    return(
        <nav>
            <img src={Logo} alt='logo' />
            <a href=""><li className="navone">Home</li></a>
            <a href=""><li className="navone">About</li></a>
            <a href=""><li className="navone">Contact Us</li></a>
        </nav>
    )
}