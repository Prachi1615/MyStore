import React from 'react'
import Category from "./Category"
import './Menu.css'
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid"

function Menu() {
    return (
        <nav className="menu">
            <div className="title">
                OUR PRODUCTS
            </div>

            <Grid className="grid"
                container direction="row"
                justify="center">
                <Link to="/cigarettes">
                    <div className="prod_row">
                        <Category
                            title="CIGARETTES"
                            image="https://clipart-best.com/img/cigarette/cigarette-clip-art-25.png">

                        </Category>
                    </div>
                </Link>
                <Link to="/hookah">
                    <div className="prod_row">
                        <Category
                            title="HOOKAH"
                            image="https://www.pikpng.com/pngl/b/100-1004594_gypsy-29-hookah-green-hookah-png-clipart.png">

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
            </Grid>






        </nav>


    )
}

export default Menu
