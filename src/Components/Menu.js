import React from 'react'
import Category from "./Category"
import './Menu.css'
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid"

function Menu() {
    return (
        <nav className="menu">
            <Grid className="grid"
                container direction="row"
                justify="center">
                <Link to="/AboutUs">
                    <div className="sidebar__option">
                        About Us
                           </div>
                </Link>
                <Link to="/ContactUS">
                    <div className="sidebar__option">
                        Contact Us
                           </div>
                </Link>
                <Link to="/FAQs">
                    <div className="sidebar__option">
                        FAQs
                           </div>
                </Link>
                {/* <Link to="/SignIn">
                    <div className="sidebar__option">
                        SignIn/SignUp
                           </div>
                </Link> */}
            </Grid>






        </nav>


    )
}

export default Menu
