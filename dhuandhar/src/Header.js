import React from 'react'
import './Header.css';
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import logo from "./dhuandhar.png"


function Header() {
    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo"
                    src={logo}
                    alt="" />
            </Link>


            <div className="header__search">
                <input type="text" className="header__searchInput" />
            </div>

            {/*3 links*/}
            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineTwo">About Us</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineTwo">Contact Us</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineTwo">FAQs</span>
                    </div>
                </Link>


                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon></ShoppingBasketIcon>
                        <span className="header__optionLineTwo header__basketCount">0</span>
                    </div>
                </Link>

            </div>
            {/*basket icon*/}
        </nav>
    )
}

export default Header;
