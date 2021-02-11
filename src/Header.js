import React from 'react'
import './Header.css';
import { Link } from "react-router-dom";
import AboutUs from "./AboutUs"
import logo from "./logo.png"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function Header() {
    return (
        <nav className="header">
            <Link to="/">
                <img
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
