import React from 'react'
import Category from "./Category"
import './Menu.css'
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid"

function Menu() {
    return (
        <nav className="menu">
            <div className="title_menu">
                OUR PRODUCTS
            </div>

            <Grid className="grid"
                container direction="row"
                justify="center">
                <Link to="/cigarettes">
                    <div className="prod_row">
                        <Category
                            title="CIGARETTES"
                            image="https://i.ibb.co/b1vHbXj/Cigarette-clip-art-29.png">

                        </Category>
                    </div>
                </Link>

                <Link to="/food&drinks">
                    <div className="prod_row">
                        <Category
                            title="SNACKS AND BEVERAGES"
                            image="https://www.pinclipart.com/picdir/big/422-4226856_bbq-clipart-free-food-clipart-black-and-white.png">

                        </Category>
                    </div>
                </Link>
                <Link to="/lighter">
                    <div className="prod_row">
                        <Category
                            title="LIGHTERS"
                            image="https://i.ibb.co/cxqm4CS/lighter-clip-art-30.png">

                        </Category>
                    </div>
                </Link>
                <Link to="/hookah">
                    <div className="prod_row">
                        <Category
                            title="HOOKAH"
                            image="https://i.ibb.co/s5TqCds/Hookah.png">

                        </Category>
                    </div>
                </Link>
                <Link to="/medwakh">
                    <div className="prod_row">
                        <Category
                            title="MEDWAKH AND DOKHA"
                            image="https://i.ibb.co/JvSYFkN/Cigarette-clip-art-8.png">

                        </Category>
                    </div>
                </Link>
            </Grid>






        </nav>


    )
}

export default Menu
