import React from 'react'
import './Header.css';
import { Link } from "react-router-dom";
import logo from "./Media/logo.png"
import Sidebar from './Components/Sidebar'



function Header() {
    return (
        <nav className="header">
            <Link to="/">
                <div className="header__option">
                    MY STORE
                </div>

            </Link>


        </nav >
    )
}

export default Header;
