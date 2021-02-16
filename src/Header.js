import React from 'react'
import './Header.css';
import { Link } from "react-router-dom";
import logo from "./Media/logo.png"



function Header() {
    return (
        <nav className="header">
            <Link to="/">
                <img
                    alt=""
                    className="logo"
                    src={logo}>

                </img>

            </Link>
            <Link to="/aboutUs" >
                <span className="header__option">
                    About Us
                </span>
            </Link>
            <Link to="/contactUs">
                <span className="header__option">
                    Contact Us
                </span>
            </Link>
            <Link to="/FAQs">
                <span className="header__option">
                    FAQs
                </span>
            </Link>


        </nav>
    )
}

export default Header;
